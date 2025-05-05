const router = require('express').Router();
const Article = require('../models/article.model');

// Get all articles
router.get('/', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 6;
      const skip = (page - 1) * limit;
  
      const articles = await Article.find()
        .skip(skip)
        .limit(limit);
  
      const total = await Article.countDocuments();
      const totalPages = Math.ceil(total / limit);
  
      res.json({
        articles,
        currentPage: page,
        totalPages,
        totalItems: total
      });
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });

// Add new article
router.post('/add', async (req, res) => {
  try {
    const newArticle = new Article({
      nomArt: req.body.nomArt,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    });

    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get article by id
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Delete article
router.delete('/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json('Article deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update article
router.put('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    
    article.nomArt = req.body.nomArt;
    article.description = req.body.description;
    article.price = req.body.price;
    article.image = req.body.image;

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;