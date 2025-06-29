const { Signup,Signin } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/signin", Signin);

module.exports = router;