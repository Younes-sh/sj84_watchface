import { useState, useEffect } from 'react';
import CardSmall from '../../../Components/CardSmall';
import ReactPaginate from 'react-paginate';
import './all.css';


const All = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // شماره صفحه فعلی
  const itemsPerPage = 24; // تعداد آیتم‌ها در هر صفحه
  
  var URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(`${URL}/api/items`)
        .then(res => res.json())
        .then(res => setItems(res.data));
}, []);
  const pageCount = Math.ceil(items.length / itemsPerPage); // تعداد کل صفحات

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='pt-5'>
   
      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={pageNumber} // این خط را اضافه کنید
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center container">
        {items
          .slice(
            pageNumber * itemsPerPage,
            (pageNumber + 1) * itemsPerPage
          )
          .map(item => <CardSmall key={item.id} {...item} />)}
      </div>
      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={pageNumber} // این خط را اضافه کنید
        />
      </div>
    </div>
  );
}

export default All;
