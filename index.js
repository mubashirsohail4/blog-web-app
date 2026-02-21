import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware: Method Override to get put, patch and delete request from html
app.use(methodOverride("_method"));

// Middleware: Path for static files in public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware: bodyParser to get form values form html
app.use(bodyParser.urlencoded({ extended: true }));

// Root directory request
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Compose page request
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

// Articles page request
app.get("/articles", (req, res) => {
  res.render("articles.ejs");
});

// Publish article request (no-op, handled client-side)
app.post("/publish", (req, res) => {
  res.render("published.ejs");
});

// View article request (handled client-side)
app.get("/articles/:id", (req, res) => {
  res.render("article.ejs");
});

// Edit article compose page request (handled client-side)
app.get("/compose/:id", (req, res) => {
  res.render("compose.ejs");
});

// Edit article request (no-op, handled client-side)
app.put("/publish/:id", (req, res) => {
  res.render("published.ejs");
});

// Delete article request (no-op, handled client-side)
app.delete("/delete/:id", (req, res) => {
  res.redirect("/articles");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
