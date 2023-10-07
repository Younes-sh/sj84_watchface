import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

function TextControlsExample() {
  const [comment, setComment] = useState({
    email: '', // ایمیل را خالی کنید
    name: '',  // نام را خالی کنید
    comment: '', // کامنت را خالی کنید
  });
  const [errors, setErrors] = useState('');
  const URL = process.env.REACT_APP_URL_API;

  const validationSchema = Yup.object().shape({
    // email: Yup.string().email('Enter a valid email address').required('Email field is required'),
    name: Yup.string().min(3, 'The name must be at least 3 letters long').required('The name field is required'),
    comment: Yup.string().min(5, 'Comment must be at least 5 characters long').required('The comment field is required'),
  });

  const controlHandler = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const commentHandler = () => {
    validationSchema
      .validate(comment, { abortEarly: false })
      .then(() => {
        Swal.fire({
          title: 'Your comment will be checked - then displayed in the comments section',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        axios.post(`${URL}/api/confirmcomments`, comment);

        // پس از ارسال موفقیت‌آمیز نظر، فیلدهای ایمیل، نام و کامنت را خالی کنید
        setComment({
          email: '',
          name: '',
          comment: '',
        });
      })
      .catch((errors) => {
        // اعتبارسنجی ناموفق بوده است، خطاها را نمایش دهید
        const errorMessages = {};
        errors.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setErrors(errorMessages);
      });
  };

  return (
    <div className='p-3'>
      <Form className='text-start'>
        <Form.Group className="mb-3">
          <Form.Label>Email address <span className='text-danger'>Optional</span></Form.Label>
          <Form.Control onChange={controlHandler} name="email" type="email" value={comment.email} placeholder="name@example.com" />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name<span className='text-danger'>*</span></Form.Label>
          <Form.Control onChange={controlHandler} name='name' type="text" value={comment.name} placeholder="Name" />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comment<span className='text-danger'>*</span></Form.Label>
          <Form.Control onChange={controlHandler} name='comment' as="textarea" value={comment.comment} rows={3} />
          {errors.comment && <p className="text-danger">{errors.comment}</p>}
        </Form.Group>
        <button onClick={commentHandler} className='btn btn-info' type='button'>Comment</button>
      </Form>
    </div>
  );
}

export default TextControlsExample;
