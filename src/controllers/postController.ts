import { Request, Response, NextFunction } from "express";
import * as postService from "../services/postService";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const { posts, totalPages } = await postService.getPosts(page, limit);

    res.json({
      posts,
      totalPages,
    });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.getPostById(req.params.postId);
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPost = await postService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedPost = await postService.updatePost(
      req.params.postId,
      req.body
    );
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await postService.deletePost(req.params.postId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
