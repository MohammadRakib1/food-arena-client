import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import banner3 from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Food Arena | Menu</title>
            </Helmet>
            <Cover img={banner3} title='our menu'></Cover>
            <SectionTitle subHeading='Dont Miss' heading='Todays offer'></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>
        </div>
    );
};

export default Menu;