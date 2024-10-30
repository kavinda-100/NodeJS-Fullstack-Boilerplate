import express from "express";

import UserRoute from "./moduls/user/user.route";

const router = express.Router();

router.use("/user", UserRoute);
// all other routes go below

export default router;