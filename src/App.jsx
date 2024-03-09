import { useEffect } from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products'
import TopTrends from './components/TopTrends/TopTrends'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />
      <TopTrends />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
