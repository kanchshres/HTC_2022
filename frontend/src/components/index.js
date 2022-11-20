const express = require('express');
const app = express();
const path = require('path');



const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, "../images")
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storge:storage});



app.post("/upload", upload.single("image"),(req,res) => {
    res.send("i");
})

app.listen(3000);