const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Setup Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "passenger-photos",
    format: async () => "png",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

// ✅ Initialize Multer
const upload = multer({ storage });
// console.log("Upload Middleware Loaded:", upload); // ✅ Debugging log

// ✅ Fix export
module.exports = upload;
