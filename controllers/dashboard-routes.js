const router = require('express').Router();
const { BlogPost } = require('../models/');
const withAuth = require('../utils/auth');

//activity 28 controllers/homeRoutes.js.
//activity 28 controllers/projectRouts.js
//use withAuth middleware to prevent access to route.
//if you are logged in, then you can create new blog posts.
//this way the / route and all its child routes will be protected 
//by our authentication middleware.
router.get('/', withAuth, async (req, res) => {
  try {
    const postBlogData = await BlogPost.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const blogPosts = postBlogData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('allBlogPostsAdmin', {
      layout: 'dashboard',
      blogPosts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postBlogData = await BlogPost.findByPk(req.params.id);

    if (postBlogData) {
      const blogPost = postBlogData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        blogPost,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
