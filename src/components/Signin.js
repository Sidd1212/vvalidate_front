import React from 'react'
import logo2 from './images/logo2.png'
import signupimg from './images/signupimg.png'
import "./style2.css"

export const Signin = () => {
  return (
      <div id="signin" style={{'backgroundColor':'#fff','height':'595px'}}>
       
        <div style={{'display':'flex','justifyContent':'space-between'}}>
        <div style={{'fontFamily':'"Poppins-SemiBold", Helvetica','textAlign':'left'}}>
        <br/>
        <div style={{'fontFamily':'"Poppins-SemiBold", Helvetica','fontWeight':'370','color':"#424B5A",'textAlign':'left','display':'flex','fontSize':'16px','width':'700px'}}>
         
       <div> <img src={logo2} alt="logo" style={{'marginRight':'20px','marginLeft':'40px'}} ></img></div>
       <div style={{'marginTop':"16px"}}> <b style={{'margin':'15px','marginLeft':'40px'}} ><a href='#homepage'>Home</a></b> 
        <b style={{'margin':'12px','marginLeft':'12px'}}><a href='#howitworks'>How it works</a></b>
        <b style={{'margin':'12px','marginLeft':'12px'}}><a href='#examples'>Examples</a></b>
        <b style={{'margin':'12px','marginLeft':'12px'}}><a href='#customerreview'>Case Studies</a></b></div></div>
         <div style={{'marginLeft':'20%'}}> 
         <br/>
         
        <h1 style={{"color": '#8213E0' }}>Welcome back!</h1>
        <p className='signuptext'>
          **Search for profiles using I-797 Receipt 
Numbers to make sure they are valid.
        </p>
        <br/>
        <input type='email' placeholder="    Email" className='inputsignup' style={{ textIndent: '10px'}} />
        <input type='password' placeholder='    Password' style={{'marginTop':'13px', 'textIndent': '10px'}} className='inputsignup'/>
        <p className='forgotp'>Forgot password?</p>
        <button className='signinbutton'>SIGN IN</button>
        <p className='insteadSignup'>Don’t have an account? <a href="/" className='signup'>SIGN UP</a></p>
        <p className='disclaimer'>Disclaimer: Vvalidate does not maintain copies of DHS approval notices and does not warrant its results. Our software evaluates whether a DHS approval notice resembles an actual approval notice issued by the Department of Homeland Security. This product should be used at an employer’s discretion. Customers should ultimately make hiring decisions based on their confidence in the authenticity and validity of the Department of Homeland Security approval notice, not solely based on our software.  Vvalidate is not a substitute for the Department of Homeland Security’s Everify system.</p>
</div>
      </div>
      <div style={{'backgroundColor':'#AF60F2','borderRadius':'320px 0px 0px 320px','height':"595px",'width':'500px','marginTop':'0px'}}>
        <img src={signupimg} style={{'height':'360px','marginTop':'22%'}} alt="people verifying docs"></img>
    
      </div>
      </div>
      </div>
  )
}

export default Signin
