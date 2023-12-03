import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/Footer/FooterSection';

const MainLayout = () => {

    return (
        <div className=''>
            <Header></Header>
           
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default MainLayout;