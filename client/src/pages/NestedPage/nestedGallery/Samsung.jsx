import {useState , useEffect} from 'react';
import CardSmall from '../../../Components/CardSmall';
import ReactPaginate from 'react-paginate';

const Samsung = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // شماره صفحه فعلی
  const itemsPerPage = 24; // تعداد آیتم‌ها در هر صفحه

  useEffect(() => {
      fetch('http://localhost:5000/api/items')
          .then(res => res.json())
          .then(res => setItems(res.data));
  }, []);

  const samsungItems = items.filter(item => item.category === 'Samsung');
  const pageCount = Math.ceil(samsungItems.length / itemsPerPage); // تعداد کل صفحات

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
              />
          </div>

          <div className="d-flex flex-wrap justify-content-center container">
              {samsungItems
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
                  forcePage={pageNumber}
              />
          </div>
      </div>
  )
}

export default Samsung;