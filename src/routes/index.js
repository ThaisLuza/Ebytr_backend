const router = require('express').Router();
const listRouter = require('./toDoList/index');

router.use('/list', listRouter);

module.exports = router;
