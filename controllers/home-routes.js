// activity 15 controllers
// activity 16 controllers
// 28-Stu-Mini_Project Main/homeRoutes.js
const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models/');

// WHEN I click on the homepage option
// THEN I am taken to the homepage.
// GET all posts for homepage which includes existing blog 
// posts if any have been posted.
router.get('/', async (req, res) => {
try {
  const blogPostData = await BlogPost.findAll({ 
    //show data for user who created blogpost together with blogpost.
    //Get all blog posts and JOIN with user data
    include: [{ model: User,
        attributes: ['username'],
    },
  ],
  });

  // serialize data so the template can read it
  const blogPosts =  blogPostData.map((blogPost) => 
    blogPost.get({ plain: true })
  );

  res.render('all-blogPosts', { 
    blogPosts 
  });
} catch (err) {
  res.status(500).json(err);
}
});

// GET one blogpost
router.get('/blogpost/:id', async (req, res) => {
try {
  const  blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [{ model: User, model: Comment,
            attributes: ['username'], 
          }],
  });     
  if (blogPostData) {
    const blogPosts =  blogPostData.get({ plain: true });

    res.render('oneBlogPost', { blogPosts });
  } else {
    res.status(404).end();
  }
} catch (err) {
  res.status(500).json(err);
}
});

// activity 17, controllers/api/home-routes.js
// Login route
router.get('/login', (req, res) => {
// if the user is already logged in, redirect to the homepage
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}
// otherwise, render the 'login' template
res.render('login');
});

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in
router.get('/signup', (req, res) => {
// if the user is already logged in, redirect to the homepage
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}
// otherwise, render the 'signup' template
res.render('signup');
});

module.exports = router;