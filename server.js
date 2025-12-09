import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Redirect root (/) to /joke
app.get("/", (req, res) => {
  res.redirect("/joke");
});

// Joke route
app.get("/joke", async (req, res) => {
  try {
    const apiRes = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await apiRes.json();

    res.json({
      status: "success",
      data: joke
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch joke"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
