import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function MainLayout() {
    return (
        <div className='App'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainLayout;