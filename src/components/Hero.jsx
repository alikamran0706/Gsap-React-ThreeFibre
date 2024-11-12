import { useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo, smallHeroVideo } from "../utils"

const Hero = () => {
    const [ videoSrc, setVideoSrc ] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5
        })

        gsap.to('#cta', {
            opacity: 1,
            delay: 1.5,
            y: -50
        });
    
    }, [])

    const onWindowresizeHandler = () => {
        if(window.innerWidth < 760)
            setVideoSrc(smallHeroVideo)
        else
            setVideoSrc(heroVideo)
    }
    useEffect(() => {
      window.addEventListener('resize', onWindowresizeHandler)
    
      return () => {
        window.removeEventListener('resize', onWindowresizeHandler)
      }
    }, [])
    
  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 flex-center flex-col w-full">
            <p id="hero" className="hero-title"></p>
            <div className="md:w-10/12 w-9/12">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} loop>
                    <source src={videoSrc} type="video/mp4">
                    </source>
                </video>
            </div>

        </div>
        {/* <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn" >
                Buy
            </a>
            <p className="font-normal text-xl">
                From $199/month or $999
            </p>
        </div> */}
    </section>
  )
}

export default Hero