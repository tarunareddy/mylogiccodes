import pkg from 'express';
const { Router } = pkg;
import sampctrl from './HelloWorld.js';

const router = Router();
router.get("/api/printHelloWorld",sampctrl.printHelloWorld);


export default router;