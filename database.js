const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:Aman2001@cluster0.hmsyj4o.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((e) => {
      console.log("Connected to mongoDb...");
    })
    .catch((error) => {
      console.log(error);
    });
};
