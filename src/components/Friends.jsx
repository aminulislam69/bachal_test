import React from 'react'
import propic from '../assets/propic.png'
import Button from '@mui/material/Button';

const Friends = () => {
  return (
    <div className="box">

        <h3 >Friend</h3>
                <div className="list">
                    <div className="img">
                    <img src={propic}/>
                    </div>
                    <div className="detail">
                    <h2>Friends Reunion</h2>
                    <p>Hi Guys, Wassup!</p>
                    </div>
                    <div className="button">
                    <Button size="small" variant="contained">Join</Button>
                    </div>
                </div>
        
    </div>
  )
}

export default Friends