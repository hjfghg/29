import { useState } from 'react'
import './App.css'

const App = (props) => {
  const [liText] = useState(props.initialLiText)
  return (
    <div className="App">
      <div className="container">
        <div className='top-div'>
          <h1>Заголовок</h1>
        </div>
        <div className='bottom-div'>
          <div className="left-div">
            <ul>
              <div className="red">
                {liText}
              </div>
              <div className="blue">
                {liText}
              </div>
              <div className="green">
                {liText}
              </div>
            </ul>
          </div>
          <div className='right-div'>
            <img className='image'></img>
            <img className='image'></img>
            <img className='image'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;