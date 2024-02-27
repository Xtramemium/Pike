const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/menu', require('./menu'));

module.exports = router;
