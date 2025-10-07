import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div className="flex flex-col min-h-screen">
            {noHeaderFooter || <Navbar></Navbar>}
            <main className="flex-grow">
                <Outlet />
            </main>

            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;