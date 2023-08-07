import React from 'react';
import logodashboard from './images/logodadhboard.png';
import gear from './images/gear.svg';
import exit from './images/exit.svg';
import upload from './images/upload.svg'; // Import your upload button icon
import Filters from './Filters';
import "./style2.css";

const Dashboard = () => {
  return (
    <div style={{'backgroundColor':'#EBEBEE','height':'700px'}}>
      <div style={{'backgroundColor':'#fff','height':'80px'}} className='dashboardnav'>
        <div>
          <br/>
          <img src={logodashboard} style={{"height":'40px','float':'left','marginLeft':'3%'}} alt="logo"/>
          <a href="#" style={{'float':'left','marginRight':'20px','marginTop':'10px'}}><img src={upload} alt="upload" style={{'height':'20px'}}/></a>
          <img src={exit} alt="exit" style={{'float':'right','marginRight':'70px','marginTop':'7px','height':'30px'}}/>
          <img src={gear} alt="gear" style={{'float':'right','marginRight':'34px','marginTop':'7px','height':'30px'}}/>
        </div>
      </div>

      <br/>
      <Filters/>
    </div>
  )
}

export default Dashboard;
