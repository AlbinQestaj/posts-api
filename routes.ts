import express, { Request, Response } from 'express';
import {addPost} from './controllers'
const router = express.Router();

// // Define a route for the root path ('/')
router.post('/addPost', addPost);

export default router;