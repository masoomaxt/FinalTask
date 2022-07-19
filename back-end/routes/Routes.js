const express = require("express");
const { createBookmark } = require("../controllers/BMController");
const { getAllBookmarks, findBookmarkById, createBookmark, updateBookmark } = require("../controllers/BMController");
const authToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.route("/").get(authToken, getAllBookmarks);
router.route("/search/:id").get(findBookmarkById);
router.route("/create").post(createBookmark);
router.route("/update/:id").patch(updateBookmark);
router.route("/remove/:id").get(removeBookmark);


module.exports = router;