import React from 'react' 

//Logos
import Java from '../Logos/java.png'
import Windows from '../Logos/windows.png'
import ComputerNetwork from '../Logos/global.png'
import Dbms from '../Logos/database.png'

//CSS
import '../CSS/Home.css'

function Home() {
  return (
    <div className='py-2'>
      <div className='row my-3'>
        <div class="col text-center shadow mx-2">
          <div className='my-4'>
            <img src={Java} width="200px" height="auto"/>           
            <h2 class="emoji-text">Java</h2>  
            <hr></hr> 
            <small class="lead">Learn all about Core Java fundamentals required for interviews.</small>           
          </div>
        </div>
    
        <div class="col text-center shadow mx-2">
          <div className='my-4'>
            <img src={Windows} width="200px" height="auto"/>           
            <h2 class="emoji-text">OperatingSystems</h2>       
            <hr></hr>  
            <small class="lead">Operating Systems fundamentals required to ace interviews.</small>
          </div>    
        </div>
      </div>

      <div className='row'>
        <div class="col text-center shadow mx-2">
          <div className='my-4'>
            <img src={ComputerNetwork} width="200px" height="auto"/>           
            <h2 class="emoji-text">Computer Networks</h2>  
            <hr></hr> 
            <small class="lead">Learn all about Core Java fundamentals required for interviews.</small>           
          </div>
        </div>

        <div class="col text-center shadow mx-2">
          <div className='my-4'>
            <img src={Dbms} width="200px" height="auto"/>           
            <h2 class="emoji-text">DBMS</h2>       
            <hr></hr>  
            <small class="lead">Operating Systems fundamentals required to ace interviews.</small>
          </div>    
        </div>

      </div>
    </div>
  )
}

export default Home