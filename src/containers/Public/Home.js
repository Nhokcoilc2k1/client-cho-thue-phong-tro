import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center border font-sans ">
            <Header />
            <Navigation />
            <div className="flex justify-center my-[20px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
