import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController';

const router = express.Router();

router.get('/', getPosts);
router.get('/:postId', getPostById);
router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

export default router;
