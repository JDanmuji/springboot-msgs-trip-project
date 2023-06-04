import React from 'react';
import MsgaHeader from '../components/MsgsHeader';
import MsgsFooter from '../components/MsgsFooter';
import MainHeader from './MainHeader';
import '../css/header.css';
import '../css/myro.css';
import '../css/uikit.min.css';
import '../css/materialize.min.css';



const Main = () => {
    return (
        <div>
            <MsgaHeader />
            <MainHeader />
            <MsgsFooter />


        </div>
    );
};

export default Main;