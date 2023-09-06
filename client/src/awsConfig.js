// awsConfig.js

import AWS from 'aws-sdk';

// تنظیمات اتصال به AWS
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_REGION', // مثلاً 'us-east-1'
});

const s3 = new AWS.S3();

export default s3;
