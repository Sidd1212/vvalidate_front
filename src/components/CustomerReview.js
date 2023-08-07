import React from 'react'
import arrow from './images/arrow.png'
import ReviewCard from './ReviewCard'
import reviewleft from './images/reviewleft.svg'
import reviewright from './images/reviewright.svg'
import dotdark from './images/dotdark.svg'
import dotlight from './images/dotlight.svg'
import "./style2.css"

let reviewarry=[{
'img':"someimage",
'comment':"VValidate simplifies the hiring process significantly. It has been a game-changer for our hiring process.",
'name':"Anderson ",
'jobrole':"Business Analyst"
},
{'img':"someimage",
'comment':"VValidate simplifies the hiring process significantly. It has been a game-changer for our hiring process.",
'name':"Anderson ",
'jobrole':"Business Analyst"},
{'img':"someimage",
'comment':"VValidate simplifies the hiring process significantly. It has been a game-changer for our hiring process.",
'name':"Anderson ",
'jobrole':"Business Analyst"}] 



const CustomerReview = () => {
  return (
    <div className="customerReviewContainer"id="customerreview">
        <br/>
    <h1 className='crheader'>Customers Review</h1>
    <br/>
    <div style={{'display':'flex','justifyContent':'space-between','marginLeft':'7%','marginRight':'5%'}}>
<div>
    <p className='crQuestion'>What they say <br/>about us?<br/>
    <b className='crans'>Hear what our customers  <br/>think about our service</b>
    <div className='checkout'>Check out&nbsp;&nbsp;&nbsp; <a href='/'><img src={arrow} style={{'marginTop':'10px','height':'20px'}} alt='arrow'/></a> </div></p>
    
</div>
<div><br/>

<div className='reviewContainer' style={{'display':'flex','justifyContent':'space-between'}}>

{reviewarry.map((row)=>{
      return <><ReviewCard  img={row.img} comment={row.comment} name={row.name} jobrole={row.jobrole}/></>})}

</div>
<br/>
<div style={{'display':'flex','justifyContent':'space-between'}}>
  <div style={{'marginLeft':'20px'}}>
<img src={reviewleft} alt='left'/>
<img src={reviewright} alt='right'/></div>
<div style={{'marginRight':'150px'}}>
<img src={dotdark} alt="dot"/>
<img src={dotlight} alt='dot'/>
<img src={dotlight} alt='dot'/>

</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default CustomerReview
