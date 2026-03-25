import express from 'express';

const router = express.Router();

import Post from '../models/Post.js';

//get home
router.get('', async (req,res) => {

    const locals = {
        title: "NodeJS Blog",
        description:"Simple Blog created with Nodejs, express & mongodb"
    }

    try {
        const data = await Post.find();
        res.render('index',{locals,data});
    } catch (error) {
       console.log(error) 
    }
    
});

function insertPostData(){
    Post.insertMany([
        {
            title :"Building blogs",
            body:"This is the body"
        }
    ])
}

insertPostData();


router.get('/about',(req,res) => {
    res.render('about');
});

export default router;