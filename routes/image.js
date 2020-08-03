var express = require('express');
var image = require("../controllers/imageController");
var multer = require("multer");
var router = express.Router();

///MULTER
const upload = multer({
  storage: storage
});

//GET UPLOAD IMAGE
router.get("/", image.upload_get);

//POST UPLOAD IMAGE ROUTE
router.post("/", upload.single("image"), image.upload);

//POST COMPRESS IMAGE ROUTE
router.post("/compress/uploads/:name/:ext", image.compress_upload);




module.exports = router;
