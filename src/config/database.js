import mongoose from "mongoose";

let connected = false;

const connectedDB = async () => {
  mongoose.set("strictQuery", false);
  if (connected) {
    console.log("DataBase is already connected ...");
    return;
}
try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("DataBase connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectedDB;
