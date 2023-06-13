const router = require("express").Router();

const {
  getGrid,
  moveRobot,
  resetGrid,
} = require("../controllers/robotController");

router.get("/grid", getGrid);
router.post("/move", moveRobot);
router.post("/reset", resetGrid);
module.exports = router;
