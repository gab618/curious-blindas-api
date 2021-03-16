import app from "./app";

const port = process.env.PORT || 1337;
app.listen(port, () =>
  console.log("Barão mágico para Balão vermelho responda!")
);
