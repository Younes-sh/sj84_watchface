const express = require('express');
const app = express();
const helmet = require('helmet');
// const config = require('config');
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

const cors = require('cors')
// const port = require(config.get('port'))
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
// تنظیمات امنیتی با استفاده از Helmet
app.use(helmet());
 
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

mongoose.connect("mongodb+srv://sheikhlaryounes:2KWbIGZqgcyZqEHi@watch.ww1vfpo.mongodb.net/")
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.log('error to connect'))

const port = process.env.PORT || 5000 ;

app.listen(port ,  () => console.log(`server running on port: ${port}`));