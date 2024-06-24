import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

export { dynamoDBClient };