const Multer = require("multer");
const FS = require("fs");

const dir_root = "/Users/mahanran/Desktop/ima/money for workless dayii 3/static";

function avatarImage(req, res, next) {
  uploadFile(req, res, next, "avatar","avatar");
}

function uploadFile(req, res, next, key, folder) {
    let url = `/upload/`;
    if (folder) url += folder + "/";
    FS.mkdir(dir_root + url, { recursive: true }, (error) => {
      let storage = Multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, dir_root + url);
        },
        filename: function (req, file, cb) {
          var dotindex = file.originalname.lastIndexOf(".");
          var ext = file.originalname.substr(dotindex);
          cb(null, file.fieldname + "_" + Date.now() + ext);
        },
      });
      let upload = Multer({ storage: storage }).single(key);
      upload(req, res, (err) => {
        if (err) res.json({ "error:": err });
        else {
          req.body.file = url + req.file.filename;
          next();
        }
      });
    });
  
}

module.exports = { avatarImage };
