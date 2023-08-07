import React from 'react'
import './style.css'

const Filters = () => {
  return (
    <div className='filterdiv'>
      <div>
        <input type="text" placeholder='Search' className='search' style={{'float':'left','marginLeft':'3%','marginTop':'2.3%','textIndent': '10px'}}/>
        <input type="date" placeholder='Date and Time' className='dt'  style={{'float':'right','marginRight':'70px','marginTop':'3%','height':'30px', 'textIndent': '10px'}}/>
      </div>
    </div>
  )
}

export default Filters
