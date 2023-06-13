// Define the initial position of the robot
let robotPosition = { x: 0, y: 0 };

// Define the position of the red square
const redSquarePosition = { x: 4, y: 4 };

module.exports.getGrid = async (req, res, next) => {
  // Return the current state of the grid
  res.json({
    grid: { rows: 5, cols: 5 },
    robotPosition,
    redSquarePosition,
  });
};

// API endpoint to move the robot
module.exports.moveRobot = async (req, res, next) => {
  const { direction } = req.body;

  // Update the robot's position based on the provided direction
  switch (direction) {
    case "up":
      robotPosition.x = Math.max(robotPosition.x - 1, 0);
      break;
    case "down":
      robotPosition.x = Math.min(robotPosition.x + 1, 4);
      break;
    case "left":
      robotPosition.y = Math.max(robotPosition.y - 1, 0);
      break;
    case "right":
      robotPosition.y = Math.min(robotPosition.y + 1, 4);
      break;
    default:
      // Handle invalid directions
      return res.status(400).json({ error: "Invalid direction" });
  }

  // Return the updated robot position
  res.json({ position: robotPosition });
};

// API endpoint to reset the robot's position
module.exports.resetGrid = (req, res) => {
  // Reset the robot's position to the initial position
  robotPosition = { x: 0, y: 0 };

  // Return the reset position
  res.json({ position: robotPosition });
};
