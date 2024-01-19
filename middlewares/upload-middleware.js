const multer = require("multer");
const fs = require("fs");
const basePath = process.cwd();
const edgecompatible = require('edgecompatible');
const s3Path = "https://dev-files-nft-generator.s3.amazonaws.com";
edgecompatible.compat();

module.exports.files = {
  storage: function () {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const trait = req.body.name;
        const address = req.body.address;
        const projectID = req.body.projectID;
        cb(
          null,
          `${basePath}/public/asset/arts/${address}/${projectID}/traits/${trait}`
        );
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });
    return storage;
  },
};
