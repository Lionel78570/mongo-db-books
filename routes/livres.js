import express from "express";
import {
  getLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre
} from "../controllers/livresController.js";

const router = express.Router();

router.get("/", getLivres);
router.post("/", createLivre);
router.get("/:id", getLivreById);
router.put("/:id", updateLivre);
router.delete("/:id", deleteLivre);

export default router;
