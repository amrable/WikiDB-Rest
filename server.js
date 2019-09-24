//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model('Article',articleSchema);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.route("/articles")

.get(
  function(req,res){
    Article.find({},function(err,foundArticles){
      if(!err){
        res.send(foundArticles);
      }else{
        res.send(err);
      }
    });
  }
)

.post(
  function(req,res){
    const title = req.body.title;
    const content = req.body.content;
    //
    // console.log(title);
    // console.log(content);
    const newArticle = new Article({
      title: title,
      content: content
    });

    newArticle.save(function(err){
      if(!err)
        res.send("Successfuly inserted a new article.");
        else
          res.send(err);
    });
  }
)

.delete(
  function(req,res){

    Article.deleteMany({},function(err){
      if(!err)
        res.send("Collection deleted Successfuly");
      else
        res.send(err);
    });

  }
);


app.route("/articles/:articleTitle")

.get(
  function(req,res){
    const title = req.params.articleTitle;
    Article.findOne({title: title},function(err,foundArticle){
      if(!err){
        res.send(foundArticle);
      }else{
        res.send(err);
      }
    });
  }
)

.put(
  function(req,res){

    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.content);
    Article.update(
      {title: req.params.articleTitle},
      {title: req.body.title , content: req.body.content},
      {overwrite: true},
      function(err){
        if(!err){
          res.send("Successfuly updated")
        }else{
          res.send(err);
        }
      }

    );
  }
)

.patch(
  function(req,res){
    Article.update(
      {title: req.params.articleTitle},
      {$set: req.body },
      function(err){
        if(!err){
          res.send("Successfuly updated");
        }else{
          res.send(err);
        }
      }
    );
  }
)

.delete(
  function(req,res){
    const title = req.params.articleTitle;

    Article.deleteOne({title:title},function(err){
      if(!err)
        res.send("Entry deleted Successfuly");
      else
        res.send(err);
    });

  }
);
