
import AWS from "aws-sdk";

// Configure the AWS SDK for the region
AWS.config.update({ region: "us-east-1" });

// Initialize the DynamoDB DocumentClient
const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

export { dynamoDBClient };
