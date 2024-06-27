import { Routes, Route } from 'react-router-dom';
import {
    Home,
    HomePage,
    Login,
    Register,
    RentalApartment,
    RentalHouse,
    RentalRoom,
    RentalSpace,
} from './containers/Public';
import { path } from './untils/contains';

function App() {
    return (
        <div className="h-full w-screen bg-primary">
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path="*" element={<HomePage />} />
                    <Route path={path.HOME__PAGE} element={<HomePage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.REGISTER} element={<Register />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalHouse />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
                    <Route path={path.NHA_CHO_THUE} element={<RentalRoom />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
