process.env.NODE_ENV = "production";
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');


const mongoose = require('mongoose');
const userRouter = require('./src/routers/user.js');
const itemRouter = require('./src/routers/item.js');
const gifRouter = require('./src/routers/gifwatch.js');
const imageRegister = require('./src/routers/backGroundRegister.js');
const imageGallery = require('./src/routers/backGroundGallery.js');
const CollectionRouter = require('./src/routers/Collection.js');
const commentRouter = require('./src/routers/Comment.js');
const confirmComment = require('./src/routers/ConfirmComment.js');
const SocialMedia = require('./src/routers/socialMedia.js');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// تنظیمات CORS

const corsOptions = {
  origin: 'https://sj84-watchface.vercel.app/', // دامنه‌ای که می‌خواهید به آن اجازه دسترسی دهید
  methods: 'GET, POST, PUT, DELETE', // متدهای HTTP مجاز
  credentials: true, // اجازه ارسال کوکیها و هدرهای احراز هویت
};

app.use(cors(corsOptions));
// تعریف مسیر استاتیک برای فایل‌های React.js
app.use(express.static(path.join(__dirname, 'my-react-app/build')));

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

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

// Connect to MongoDB
const databaseUrl = process.env.DATABASE_URI;
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const port = process.env.PORT || 3000 ;

app.listen(port ,  () => console.log(`server running on port: ${port}`));
