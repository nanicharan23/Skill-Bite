import React from 'react'
import house from '../Logos/house.png'
function Home(props) {
  return (
    <div>
        {props.display? 
        <div>
            Home <img src={house}/>
        </div>
        : null}
        
    </div>
  )
}

export default Home