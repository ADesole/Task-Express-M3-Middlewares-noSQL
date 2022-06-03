const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const slugify = require("slugify");
const router = require("./api/posts/posts.routes");

connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);

router.use((req, res, next) => {
  if (req.method === "POST") req.body.slug = slugify(req.body.title);
  next();
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
  console.log("Error handled");
});

app.use((req, res, next) => {
  res.status(404).json({ message: "not found" });
  next();
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
