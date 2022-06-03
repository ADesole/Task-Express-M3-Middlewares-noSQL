const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
} = require("./posts.controllers");

router.get("/", postsGet);
router.post("/", postsCreate);
router.get("/:postId", fetchPost);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
