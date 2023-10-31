import express from "express";
import bodyParser from "body-parser";

var app= express();
var port= 3000;
var blogTitle;
var posts = []

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

function Post(title, body){
    this.postTitle = title,
    this.postBody = body, 
    this.edit = function(newTitle, newBody){
        this.postTitle = newTitle,
        this.postBody = newBody,
        console.log("edited");
    }
}

app.get("/", (req, res) => {
    if(blogTitle){
        res.render("index.ejs", {header: blogTitle, uploads: posts,});
    } else{
        res.render("start.ejs");
    }
});

app.post("/submit", (req, res) => {
    blogTitle = req.body["title"];
    res.redirect("/");
});

app.get("/new-post", (req, res) => {
    res.render("new-form.ejs")
});

app.post("/new-post/submit", (req, res) => {
    posts.push(new Post(req.body["title"], req.body["body"]));
    res.redirect("/");
    console.log(posts)
})

app.post("/edit", (req, res) => {
    res.render("edit-form.ejs", {i: req.body["index"], oldTitle: posts[req.body["index"]]["postTitle"], oldBody: posts[req.body["index"]]["postBody"],});
});

app.post("/edit/submit", (req, res) => {
    posts[req.body["index"]].edit(req.body["title"], req.body["body"]);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

