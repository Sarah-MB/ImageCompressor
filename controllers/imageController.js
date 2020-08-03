var Image = require('../models/image');
// var models = require('../models');



 
//GET UPLOAD IMAGE
exports.upload_get = function(req, res) {
    res.render("index");
};

//POST UPLOAD IMAGE
exports.upload = function(req, res, next) {
    const file = req.file;
  var ext;

  if (!file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 404;
    return next(error);
  }
  if (file.mimetype == "image/jpeg") {
    ext = "jpg";
  }
  if (file.mimetype == "image/png") {
    ext = "png";
    }
    console.log(file.path)

  res.render("image", { url: file.path, name: file.filename, ext: ext });
};

//POST COMPRESS IMAGE
var async = require('async');

exports.compress_upload = async  (req, res) 
    const files = await imagemin(["uploads/" + req.params.name], {
        destination: "output",
        plugins: [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.6, 0.8]
          })
        ]
      });
    
        res.download(files[0].destinationPath);
    };








// Display post create form on GET.
// exports.post_create_get = async function(req, res, next) {
//     // renders a post form
//     const authors = await models.Author.findAll();
//     const categories = await models.Category.findAll();
//     res.render('forms/post_form', { title: 'Create Post', authors: authors, categories: categories,  layout: 'layouts/detail'});
//     console.log("Post form renders successfully")
// };