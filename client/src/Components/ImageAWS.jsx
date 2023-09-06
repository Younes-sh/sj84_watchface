import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  // تنظیمات مربوط به اتصال به حساب AWS
  accessKeyId: 'AKIA3D4DJ62U5MGM4PQU',
  secretAccessKey: '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',
  region: 'eu-west-3', //  'us-east-1'
});

function ImageComponent({ imageKey , name }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const getObjectUrl = async () => {
      try {
        const params = {
          Bucket: 'watch-gif'
          ,
          Key: imageKey,
        };
        const url = await s3.getSignedUrl('getObject', params);
        setImageUrl(url);
      } catch (error) {
        console.error('Error getting image URL', error);
      }
    };

    getObjectUrl();
  }, [imageKey]);

  return (
    <img src={imageUrl} alt={name} />
  );
}

export default ImageComponent;
