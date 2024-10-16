import "./App.css";
import Accordian_01 from "./Components/Accordian_01/Accordian_01";
import RandomColor_02 from "./Components/RandomColor_02/RandomColor_02";
import StarRating_03 from "./Components/StarRating_03/StarRating_03";
import QRCode_07 from './Components/QRCode_07/QRCode.jsx'


function App() {
  return (
    <>
      <Accordian_01 />
      <RandomColor_02 />
      <StarRating_03 noOfStars={10}/>
      <QRCode_07/>
    </>
  );
}

export default App;
