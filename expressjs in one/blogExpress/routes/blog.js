const express = require('express');
const path = require('path');
const blogs = require('../data/blogs')
const router = express.Router();

router.get('/', function(req,res){
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', function(req,res){
    blogs.forEach(element => {
        console.log(element.title)
    });
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

router.get('/blogpost/:slug', function(req,res){
    myBlog = blogs.filter((element)=>{
        return element.slug == req.params.slug
    })
    res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
})

module.exports = router;
