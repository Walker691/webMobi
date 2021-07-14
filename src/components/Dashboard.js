import React from 'react';
import '../styles/dashboard.css'
import Leftbar from './Leftbar'
import Main from './Main'
import Rightbar from './Rightbar'


const Dashboard = () => {
    return(
        <div className = 'container'>
            <Leftbar />
            <Main />
            <Rightbar />   
        </div>
    )
}

export default Dashboard