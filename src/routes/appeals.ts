import express, { Router } from "express";
import * as appealsController from "../controllers/appeals";

const router: Router = express.Router();

router.post("/", appealsController.createAppeal);
router.get("/", appealsController.fetchAppeals);
router.patch("/:id/start", appealsController.startAppeal);
router.patch("/:id/complete", appealsController.completeAppeal);
router.patch("/:id/cancel", appealsController.cancelAppeal);
router.patch('/cancel-started', appealsController.cancelAllStartedAppeals);

export default router;