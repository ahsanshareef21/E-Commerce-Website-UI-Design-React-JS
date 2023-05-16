import Header from "./component/Header";
import Navbr from "./component/Navbar";
import Products from "./component/Products";
import Silder from "./component/Slider";
// import Cards from "./component/cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <>
      <div>
        <div className="Nav">
          <Navbr />
        </div>
        <div className="headerr">
          <Header />
        </div>

       
          <Silder/>

        
        <br/>

        <div className="footer">
          <Products />
        </div>
      </div>
    </>
  );
};

export default App;
