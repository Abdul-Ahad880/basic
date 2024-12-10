const express = require("express");

const app = express();


app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to the Express API!",
        status: "success",
        data: { id: 1, name: "Express Example" },
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://basic-tau-self.vercel.app/`);
});
