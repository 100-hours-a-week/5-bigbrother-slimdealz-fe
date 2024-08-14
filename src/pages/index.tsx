import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet } from 'react-router-dom';

const OutLetContainer = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default OutLetContainer;
