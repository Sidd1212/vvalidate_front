import React from 'react'
import reviewer1 from './images/reviewer1.png'
import qoutes from './images/qoutes.png'

const ReviewCard = (props) => {
  return (
    <div  className='reviewbox' style={{'height':'300px'}}>
      <div className='reviewimage'><img src={reviewer1} style={{'width':'210px'}} alt="reviewer"/></div>
      <div className='greydiv' style={{'alignItems':'left'}}><img style={{'marginLeft':'10px','height':'33px','float':'left'}} src={qoutes} alt="qoutes"/></div>
      <br/>
    <div className='reviewdiv' style={{'width':'190px','marginLeft':'10px'}}>
        {props.comment}
        <br/><br/>
        <b>{props.name}</b><br/>
        <i>{props.jobrole}</i>
        <br/>
    </div>
    </div>
  )
}

export default ReviewCard
