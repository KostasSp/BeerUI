import "./Paginate.scss";

const Paginate = ({ beersPerPage, totalBeers, paginate }) => {
  const pages = [];

  //create number of total pages (based on the number of beers to be displayed per page)
  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((page) => (
        <span className="page-numbers" key={page}>
          <a onClick={() => paginate(page)} href="#!">
            {page}
          </a>
        </span>
      ))}
    </>
  );
};

export default Paginate;
