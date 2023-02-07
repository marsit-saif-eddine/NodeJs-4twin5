var os = require("os");
var express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        hosname:os.hostname(),
        type:os.type(),
        platform:os.platform()
    })

});
router.get('/cpus', function (req, res) {
    res.json({
        cpus:os.cpus()
    })

});
router.get('/cpus/:id', function (req, res) {
    res.json({
        cpus:os.cpus()[req.params.id]
    })

});

module.exports = router
