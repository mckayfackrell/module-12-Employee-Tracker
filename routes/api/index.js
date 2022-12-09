const router = require('express').Router();
const departmentsRoutes = require('./departmentsRoutes');
const rolesRoutes = require('./rolesRoutes');
const employeesRoutes = require('./employeesRoutes');

router.use('/departments', departmentsRoutes);
router.use('/roles', rolesRoutes);
router.use('/employees', employeesRoutes);

module.exports = router;
