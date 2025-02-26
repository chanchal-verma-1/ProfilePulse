const multer=require('multer'); 
const path=require('path');
const crypto=require('crypto');

// diskstorage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/images')
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(10, function(err,name) {
        const fn=name.toString('hex') + path.extname(file.originalname);
        cb(null, fn);
      })
    }
  })
  
  const upload = multer({ storage: storage });
  module.exports = upload;