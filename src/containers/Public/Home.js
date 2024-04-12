import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center border font-sans ">
            <Header />
            <Navigation />
            <div className="w-1120 flex justify-center items-start mt-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
