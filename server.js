import express from 'express';
const app = express();
app.get("/", (req, res) => {
    return res.send("This is Home Page");
});

const port = process.env.PORT || 3000 ;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));