const router = require('express').Router();
const employees = require('./employeeRoutes');

router.use('/employees', employees);

module.exports = router;