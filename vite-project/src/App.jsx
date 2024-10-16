import Accordian_01 from "./Components/Accordian_01/Accordian_01";
import "./App.css";
import RandomColor_02 from "./Components/RandomColor_02/RandomColor_02";
import StarRating_03 from "./Components/StarRating_03/StarRating_03";

function App() {
  return (
    <>
      <Accordian_01 />
      <RandomColor_02 />
      <StarRating_03 noOfStars={10}/>
    </>
  );
}

export default App;
