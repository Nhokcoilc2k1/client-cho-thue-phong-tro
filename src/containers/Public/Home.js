import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center border font-sans ">
            <Header />
            <Navigation />
            <div className="w-screen lg:w-984 xl:w-1120 flex justify-center items-start ">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
