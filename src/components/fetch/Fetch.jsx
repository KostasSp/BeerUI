import { useState, useEffect } from "react";
import BeerList from "../beer-list/BeerList";
import Paginate from "../panigate/Paginate";

const Fetch = () => {
  const API_URI = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(15);
  const [beerData, setBeerData] = useState([]);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  //the beers to be displayed on any given page
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentPageData = beerData.slice(indexOfFirstBeer, indexOfLastBeer);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //no CORS error or API key to hide, so a server was not required
      const data = await fetch(API_URI);
      const jsonData = await data.json();
      setBeerData(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <BeerList display={currentPageData} loading={loading} />
      <Paginate
        beersPerPage={beersPerPage}
        totalBeers={beerData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Fetch;
