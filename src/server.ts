import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ ok: "?XD" });
});

app.listen(1337);
