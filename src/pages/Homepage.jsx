import Customertest from '../components/Customertest'
import Mainpage from '../components/Mainpage';
import { Navbar } from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';
function Homepage() {
  return (
    <div className="Home">
      <Navbar/>
      <Mainpage/>
      <WhyUs/>
      <NewArrivals/>
      <Customertest/>
      <Footer/>
    </div>
  );
}

export default Homepage;
