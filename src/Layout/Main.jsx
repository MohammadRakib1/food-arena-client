import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Main;