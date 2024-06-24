import { docClient } from "./dynamodb";
import { Request, Response } from "express";

const addPost = async (req: Request, res: Response) => {
  
  const params = {
    TableName: "Posts",
    Item: {
      postId: "2", // Primary key value
      title: "This is the first post",
      content: "Lorem ipsum dolor sit amet",
    },
  };

  try {
    const response = await docClient.put(params).promise();
    res.status(200).json({
      status: "success",
      data: {
        response,
      },
    });
  } catch (err) {
    console.error("Error adding post:", err);
  }
};

export { addPost };
