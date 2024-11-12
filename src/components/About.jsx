import { useGSAP } from '@gsap/react'
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import React from 'react'
import { FoxModel } from './FoxModel'

const About = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            duration: 1,
            y: 0
        });


        gsap.to('#sub-title', {
            opacity: 1,
            duration: 1.5,
            y: 0
        })
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
        tl.to('.input-field', {
            opacity: 1,
            y: 0,
            stagger: 0.2, 
            duration: 1.5, 
        });
    }, [])

    const { scene } = useGLTF('/models/fox/scene-transformed.glb');
    return (
        <section id='about' className='h-full w-full common-padding'>
            <div className="screen-max-width">
                <h1 id="title" className="section-heading mb-12">
                    UI Animate
                </h1>
                <div className='w-full flex justify-between'>
                    <div className='w-1/2'>
                        <h2 id='sub-title' className="text-gray-100 opacity-0 text-4xl text-center mt-8 translate-y-20">Personal Detail</h2>
                        <form className="max-w-xl mx-auto mt-12">
                            <div className="input-field opacity-0  transform translate-y-[-20%] relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6 input-field opacity-0  transform translate-y-[-20%]">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6 input-field opacity-0  transform translate-y-[-20%]">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group input-field opacity-0  transform translate-y-[-20%]">
                                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                </div>
                            </div>
                            <div className="flex justify-center input-field opacity-0  transform translate-y-[-20%]">
                                <button type="submit" className="text-gray-200 bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className='w-1/2'>
                        <Canvas style={{ width: '100%', height: '100vh' }}>
                            <PerspectiveCamera makeDefault position={[10, 19, 10]} fov={50} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={3} castShadow={true} />
                            <FoxModel position={[0, 6.5, 0]} scale={[1, 1, 1]} rotation={[0, Math.PI / 2, 0]} />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={true}
                                enableRotate={false}
                                maxPolarAngle={Math.PI * 0.75} // Limit vertical rotation (optional)
                                minPolarAngle={Math.PI * 0.25} // Limit vertical rotation (optional)
                            />
                        </Canvas>

                    </div>
                </div>


                <div className='mt-5'>
                    <button className="size-btn-container">

                    </button>
                </div>
            </div>
        </section>
    )
}

export default About