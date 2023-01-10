const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_SECRET,
// });

cloudinary.config({
  cloud_name: "dglvkccci",
  api_key: "296581916231144",
  api_secret: "hkyGPlieOOAm0Z1x4nZHAyFuvxE",
});

module.exports = cloudinary;
