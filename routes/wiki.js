const express = require('express');
const router =  express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");

router.get('/',(req,res)=>{
  res.send(`<h1>Test</h1>`);
});


router.post('/', async (req,res, next)=>{
  console.log(req.body);

  const page = new Page({
    title: req.body.title,
    content: req.body.content//ask about it.
  });

  try {
    await page.save();
    console.log(page);
    res.redirect('/');
  } catch (error) { next(error) }
  // res.json(req.body);
  // res.send(`POST Request was sent here's the result`);
});

router.get('/add', (req,res)=>{
  res.send(addPage());
});

module.exports = router;
