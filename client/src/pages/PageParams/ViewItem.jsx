import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CopyAddress from '../../Components/CopyAddress/CopyAddress';

const ViewItem = () => {
  const [item, setItem] = useState([]);
  const itemID = useParams().itemID;

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${itemID}`)
      .then((res) => res.json())
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='pt-5'>
      <Row className='container m-auto mt-5 '>
        <Col lg={4} className='pt-2 '>
          <div style={{ position: 'relative' }}>
            <div
              className='viewItemLogo mt-3'
              style={{
                width: '40%',
                margin: 'auto',
                position: 'absolute',
                height: '50px',
                backgroundColor: '#DCDAD7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>{item.name}</span>
            </div>

            <iframe src={item.Embed} width='100%' height='580' style={{ border: 'none' }}></iframe>
            <h3 className='mt-4 text-start'>{item.name}</h3>
            {/* Buttons */}
            <div className='text-start mt-4  d-flex'>
              <Link to='/gallery' className='btn btn-primary'>
                Back to Gallery
              </Link>

              <CopyAddress />
              
            
            </div>
          </div>
        </Col>
        <Col lg={8} className='text-start border p-4 mt-2 rounded-4 border-dark'>
          <h1>{item.name}</h1>
          <p className='aliegnText'>{item.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ViewItem;
