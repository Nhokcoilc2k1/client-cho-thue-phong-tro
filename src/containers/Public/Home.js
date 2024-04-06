import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center border border-red-500 font-sans ">
            <Header />
            <Navigation />
            <div className="flex justify-center my-[10px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
