import './App.css'
// import Images from './images.json'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const container = useRef()

  useEffect(()=>{
   
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub:1
    })
},[])

useEffect(()=>{
  gsap.to(".img1", {
    y: 160,
    // duration: 1,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})

useEffect(()=>{
  gsap.to(".img2", {
    y: 180,
    // duration: .6,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})

useEffect(()=>{
  gsap.to(".img3", {
    y: 160,
    // duration: .2,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})

useEffect(()=>{
  gsap.to(".img4", {
    y: 180,
    // duration: .6,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})

useEffect(()=>{
  gsap.to(".img5", {
    y: 130,
    // duration: .6,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})

useEffect(()=>{
  gsap.to(".img6", {
    y: 200,
    // duration: .2,
    ease:"easeInOut",
    scrollTrigger: {
      trigger: '.img1',
      start: 'top top',
      end: '+=200%',
      scrub: 0.3,
    },
  })
})
  
  const Title1 = "Outdoor".split("");
  const Title2 = "Touch".split("");
  const Images = {
    "1": {
      "url": "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
      "alt": "",
      "styles": "top-[0%] left-[3%] w-[15rem] img1"
    },
    "2": {
      "url": "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "alt": "",
      "styles": "top-[0%] right-[3%] w-[14rem] img2"
    },
    "3": {
      "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
      "alt": "",
      "styles": "top-[35%] left-[28%] w-[14rem] img3"
    },
    "4": {
      "url": "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "alt": "",
      "styles": "top-[35%] right-[28%] w-[14rem] img4"
    },
    "5": {
      "url": "https://images.unsplash.com/photo-1533387520709-752d83de3630?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "alt": "",
      "styles": "top-[40%] left-[7%] w-[15rem] img5"
    },
    "6":{
      "url": "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      "alt": "",
      "styles": "top-[3%] left-[40%] w-[16rem] img6"
    }
  }
  return (
    <>
      <div className='main'>
        <div className="hero w-full h-screen flex items-center justify-center">
          <div className="hero-text grid items-center justify-center">
            <div className="text-center text-[10vw]">
              {Title1.map((item,index)=>
                <span key={index}>{item}</span>
              )}
            </div>
            <div className="text-center text-[10vw]">
              {Title2.map((item,index)=>
                <span key={index}>{item}</span>
              )}
            </div>
          </div>
          <div className="hero-images absolute z-[-1] w-full h-[130vh] translate-x-[0%] translate-y-[0%] top-0 left-0" >
            {
              Object.entries(Images).map(([key,value])=>
                <img key={key} src={value.url} alt={value.alt} className={`${value.styles} absolute`}/>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
