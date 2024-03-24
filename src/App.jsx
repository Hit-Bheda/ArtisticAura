import './App.css'
import Images from './images.json'

function App() {
  const Title1 = "Outdoor".split("");
  const Title2 = "Touch".split("");
  return (
    <>
      <div className='main'>
        <div className="hero w-full h-screen flex items-center justify-center">
          <div className="hero-text grid items-center justify-center">
            <div className="text-center text-[5vw]">
              {Title1.map((item,index)=>
                <span key={index}>{item}</span>
              )}
            </div>
            <div className="text-center text-[5vw]">
              {Title2.map((item,index)=>
                <span key={index}>{item}</span>
              )}
            </div>
          </div>
          <div className="hero-images absolute z-[-1] w-full h-[130vh] translate-x-[0%] translate-y-[0%] top-0 left-0">
            {
              Object.entries(Images).map(([key,value])=>
                <img key={key} src={value.url} alt={value.alt} className={`${value.styles}  absolute`}/>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
