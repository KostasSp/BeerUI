import "./SingleBeerDisplay.scss";

const SingleBeerDisplay = ({ data }) => {
  let dataList = [data];
  return (
    <div>
      {dataList.map((item) => (
        <div className="single-beer-list">
          <img src={item.image_url} alt="beer-img"></img>
          <ul className="single-beer-list-items">
            <li>
              Name:{"\n"}
              {item.name}
            </li>
            <li>
              ABV:{"\n"}
              {item.abv}
            </li>
            <li>
              Volume:{"\n"}
              {data.volume.value}
              {"\n"}
              {data.volume.unit}
              {"\n"}
            </li>
            <li>
              Description:{"\n"}
              {item.description}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SingleBeerDisplay;
