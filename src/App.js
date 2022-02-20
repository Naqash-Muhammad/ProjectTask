import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './FNavBar/Bar';
import AgainBar from './SecondNavBar/AgainBar';
import BarThird from './ThirdNavbar/BarThird';
import SixBaySix from './TopTwoCol/SixBySix';
import Card from './Card/Card';
import TwoCola from './SecondTowCol/TwoCola';
import UI from './FeatureThem/UI';
import MianRouter from './ButtonWork/MainRouter';
import Footer from './Footer1/Footer';
import FooterB from './Footer2/FooterB'; 



function App() {
  return (
    <>
        <Bar />
        <AgainBar />
        <BarThird />
        <SixBaySix />
        <Card />
        <TwoCola />
        <UI />
        <MianRouter />
        <Footer />
        <FooterB />
    </>
  );
}

export default App;
