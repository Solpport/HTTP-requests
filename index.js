import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Sui-chan wa kyou mo kawaii!</h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>Hoshimachi Suisei (星街すいせい) is a female Japanese Virtual YouTuber associated with hololive.</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Message 919-244-8412 for cool Suisei facts!</h1>");
    console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});