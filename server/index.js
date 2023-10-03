process.env.NODE_ENV = "production";
const express = require('express');
const app = express();
const cors = require('cors')
// const path = require('path');
require('dotenv').config(); // خواندن مقادیر از فایل .env

const mongoose = require('mongoose');
const userRouter = require('./src/routers/user');
const itemRouter = require('./src/routers/item');
const gifRouter = require('./src/routers/gifwatch');
const imageRegister = require('./src/routers/backGroundRegister');
const imageGallery = require('./src/routers/backGroundGallery');
const CollectionRouter = require('./src/routers/Collection');
const commentRouter = require('./src/routers/Comment');
const confirmComment = require('./src/routers/ConfirmComment');
const SocialMedia = require('./src/routers/socialMedia');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// تنظیمات CORS

app.use(cors({
  origin: 'https://sj84-watchface.vercel.app', // دامنه‌ی منبع
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // متدهای مجاز
  credentials: true, // اجازه‌ی ارسال کوکی‌ها
}));

app.use('/api/users' , userRouter);
app.use('/api/items' , itemRouter);
app.use('/api/gifs' , gifRouter);
app.use('/api/imageregister' , imageRegister);
app.use('/api/imagegallery', imageGallery);
app.use('/api/collections'  , CollectionRouter);
app.use('/api/comments' , commentRouter);
app.use('/api/confirmcomments' , confirmComment);
app.use('/api/socialMedias', SocialMedia);

app.get('/' , (req , res) => {
  res.send('Hello world')
})


MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@watch.ww1vfpo.mongodb.net/`

// تنظیمات اتصال به دیتابیس
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });


const port = process.env.PORT || 5000 ;

app.listen(port ,  () => console.log(`server running on port: ${port}`));
