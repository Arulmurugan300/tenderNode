const mongoose = require('mongoose');

const connectDB = async ()=>{
  await mongoose.connect("mongodb+srv://arulmadhujothi:HRENJFR8ij22IkRf@cluster0.jew1o.mongodb.net/nodeTender")
}

module.exports =  {connectDB}
