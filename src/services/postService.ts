import { Post } from "../models/postModel";
import { dynamoDBClient } from "../utils/dynamoDBClient";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const TableName = "Posts";
export const getPosts = async (
  page: number,
  limit: number
): Promise<{ posts: Post[]; totalPages: number }> => {
  let params: DocumentClient.ScanInput = {
    TableName,
    Limit: limit,
  };

  let startKey = null;
  let posts: Post[] = [];

  for (let i = 1; i < page; i++) {
    const data = await dynamoDBClient.scan(params).promise();
    startKey = data.LastEvaluatedKey;
    if (!startKey) break; // No more pages

    params.ExclusiveStartKey = startKey;
  }

  const data = await dynamoDBClient.scan(params).promise();
  posts = data.Items as Post[];

  const countParams: DocumentClient.ScanInput = {
    TableName,
    Select: 'COUNT',
  };
  const countData = await dynamoDBClient.scan(countParams).promise();
  const totalPosts = countData.Count || 0;
  const totalPages = Math.ceil(totalPosts / limit);

  return {
    posts,
    totalPages,
  };
};

export const getPostById = async (postId: string): Promise<Post> => {
  const params: DocumentClient.GetItemInput = {
    TableName,
    Key: { postId },
  };
  const data = await dynamoDBClient.get(params).promise();
  if (!data.Item) throw new Error("Post not found");
  return data.Item as Post;
};

export const createPost = async (post: Post): Promise<Post> => {
  const params: DocumentClient.PutItemInput = {
    TableName,
    Item: post,
  };
  await dynamoDBClient.put(params).promise();
  return post;
};

export const updatePost = async (
  postId: string,
  updatedPost: Partial<Post>
): Promise<Post> => {
  const params: DocumentClient.UpdateItemInput = {
    TableName,
    Key: { postId },
    UpdateExpression: "set title = :title, content = :content",
    ExpressionAttributeValues: {
      ":title": updatedPost.title,
      ":content": updatedPost.content,
    },
    ReturnValues: "ALL_NEW",
  };
  const data = await dynamoDBClient.update(params).promise();
  return data.Attributes as Post;
};

export const deletePost = async (postId: string): Promise<void> => {
  const params: DocumentClient.DeleteItemInput = {
    TableName,
    Key: { postId },
  };
  await dynamoDBClient.delete(params).promise();
};
