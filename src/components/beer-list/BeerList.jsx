import "./BeerList.scss";
import { Link } from "react-router-dom";

const BeerList = ({ display, loading }) => {
  const MAX_INGREDIENTS = 3;

  if (loading) {
    return <h2>getting data...</h2>;
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Beer Name</th>
            <th>ABV</th>
            <th>Volume</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {display.map((data, index) => (
            <tr key={index}>
              <Link
                to={{
                  pathname: `/beer/${data.name}`,
                }}
                state={data}
              >
                <td>{data.name}</td>
              </Link>
              <td>{data.abv}</td>
              <td>
                {data.volume.value}
                {"\n"}
                {data.volume.unit}
                {"\n"}
              </td>
              <td>
                {data.ingredients.malt
                  .filter((items, index) => index < MAX_INGREDIENTS)
                  .map((item, index) => (
                    <span key={index}>
                      {item.name}
                      {index === MAX_INGREDIENTS - 1 ? "." : ","}
                      {"\n"}
                    </span>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeerList;
