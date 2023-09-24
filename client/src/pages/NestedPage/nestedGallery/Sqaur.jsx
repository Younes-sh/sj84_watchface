import { useState, useEffect } from 'react';
import CardSmall from '../../../Components/CardSmall';
import ReactPaginate from 'react-paginate';
const Squar = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // شماره صفحه فعلی
  const itemsPerPage = 24; // تعداد آیتم‌ها در هر صفحه

  const URL = process.env.REACT_APP_URL_API;

  useEffect(() => {
      fetch(`${URL}/api/items`)
          .then(res => res.json())
          .then(res => setItems(res.data));
  }, []);

  const appleItems = items.filter(item => item.category === 'Squar');
  const pageCount = Math.ceil(appleItems.length / itemsPerPage); // تعداد کل صفحات

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
          forcePage={pageNumber}
          marginPagesDisplayed={2} // تعداد خانه‌های نخست و آخر
        />
          </div>

          <div className="d-flex flex-wrap justify-content-center container">
              {appleItems
                  .slice(
                      pageNumber * itemsPerPage,
                      (pageNumber + 1) * itemsPerPage
                  )
                  .map(item => <CardSmall key={item._id} {...item} />)}
          </div>

          <div className='pagination-container'>
          <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={pageNumber}
          marginPagesDisplayed={2} // تعداد خانه‌های نخست و آخر
        />
          </div>
      </div>
  )
}

export default Squar;
