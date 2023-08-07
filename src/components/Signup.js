import React from 'react'
import logo2 from './images/logo2.png'
import signupimg from './images/signupimg.png'
import "./style2.css"

const Signup = () => {
  return (

      <div id='signup' style={{'backgroundColor':'#fff','height':'595px','overflowY':'hidden'}}>
       
        <div style={{'display':'flex','justifyContent':'space-between'}}>
        <div style={{'fontFamily':'"Poppins-SemiBold", Helvetica','textAlign':'left'}}>
        <br/>
        <div style={{'fontFamily':'"Poppins-SemiBold", Helvetica','fontWeight':'370','color':"#424B5A",'textAlign':'left','display':'flex','fontSize':'16px','width':'700px'}}>
         
       <div > <img src={logo2} alt="logo" style={{'marginRight':'20px','marginLeft':'40px'}} ></img></div>
       <div style={{'marginTop':"16px"}}> <b style={{'margin':'15px','marginLeft':'40px'}} ><a href='#homepage'>Home</a></b> 
        <b style={{'margin':'15px','marginLeft':'14px'}}><a href='#howitworks'>How it works</a></b>
        <b style={{'margin':'15px','marginLeft':'14px'}}><a href='#examples'>Examples</a></b>
        <b style={{'margin':'14px','marginLeft':'15px'}}><a href='#customerreview'>Case Studies</a></b></div></div>
         <div style={{'marginLeft':'20%'}}> 
         <br/>
      
        <h1 style={{"color": '#8213E0' }}>Create your Account</h1>
        <p className='signuptext'>
          **Search for profiles using I-797 Receipt 
Numbers to make sure they are valid.
        </p>
       
        <input type='email' placeholder="Email" className='inputsignup' style={{ textIndent: '10px'}}/>
        <input type='password' placeholder='Business Email' style={{'marginTop':'13px','textIndent': '10px'}} className='inputsignup'/>
        <div style={{'display':'flex'}}>
        <input type='text' placeholder='Company name' style={{'marginTop':'13px','textIndent': '10px'}} className='inputsignupcn'/>
        <input type='text' placeholder='Domain' style={{'marginTop':'13px', 'textIndent': '10px'}} className='inputsignupd'/>
        </div>
        <input type='text' placeholder='    Job profile' style={{'marginTop':'13px', 'textIndent': '10px'}} className='inputsignup'/>

     <p className='tcline'> <input type='checkbox' className='tccheckbox'/> I agree to the <a href='/' className='tc'>Terms and conditions</a></p>  
        <button className='signinbutton'>SIGN UP</button>
        <p className='insteadSignup'>Already have an account? <a href="/" className='signup'>LOG IN</a></p>
</div>
      </div>
      <div style={{'backgroundColor':'#AF60F2','borderRadius':'320px 0px 0px 320px','height':"595px",'width':'500px','marginTop':'0px'}}>
        <img src={signupimg} style={{'height':'360px','marginTop':'22%'}} alt="people verifying docs"></img>
    
      </div>
      </div>
      </div>
    
  )
}

export default Signup
