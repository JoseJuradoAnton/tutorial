const express = require('express');
const app = express();
const port = 3000;


app.get("/api/student", (req, res) => {
    res.json({ info: "hello from server" });
});

app.listen(port, () => console.log(`app listening on port ${port}`));
