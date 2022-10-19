const router = require('express').Router()

const { getAllReports, getReport, updateReport, addReport } = require('../controllers/reportController')

router.get('/', getAllReports)
router.get('/:reportId', getReport)
router.post('/', addReport)
router.put('/:reportId', updateReport)

module.exports = router