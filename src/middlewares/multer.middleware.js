import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)//gives power to name the file as we save it
    }
  })
  
export const upload = multer({ 
    storage, 
})