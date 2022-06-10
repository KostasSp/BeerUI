import SingleBeerDisplay from "../../components/single-beer-display/SingleBeerDisplay";
import { useLocation } from "react-router-dom";

const BeerProfile = () => {
  const { state } = useLocation();
  return (
    <div>
      <SingleBeerDisplay data={state} />
    </div>
  );
};

export default BeerProfile;
