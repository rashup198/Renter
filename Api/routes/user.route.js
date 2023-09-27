import express from 'express';
import { test } from '../controlles/user.controller.js';

const router = express.Router();

router.get('/test',test);

export default router;
