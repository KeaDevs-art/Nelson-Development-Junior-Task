const express = require("express");

const app = express();

app.use(express.json());

const PORT = 4500;

const serverRouter = require("./routes/serverRoutes");
app.use("/api/v1/server", serverRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});
