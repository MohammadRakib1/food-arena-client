import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Deshboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/deshboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/addItem'>
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/manageItem'>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/bookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/deshboard/users'>
                                    <FaUser></FaUser>
                                    All Users
                                </NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/deshboard/userHome'>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/deshboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/deshboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/deshboard/review'>
                                        <FaAd></FaAd>
                                        Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/deshboard/paymentHistory'>
                                        <FaList></FaList>
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;