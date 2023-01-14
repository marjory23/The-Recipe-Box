'use strict'

const router = require('express').Router();
const ctrl = require('./controllers/controllers');
const userCtrl = require('./controllers/userControllers');
const authMiddleware = require('./middlewares/auth');


router.get('/recipes', ctrl.getRecipe);
router.post('/recipes', ctrl.postRecipe);
router.delete('/recipes/:id', ctrl.deleteRecipe);

router.post('/register', userCtrl.create);
router.post('/login', userCtrl.login);
router.get('/me', authMiddleware, userCtrl.profile);
router.post('/logout',  authMiddleware, userCtrl.logout);



module.exports = router;