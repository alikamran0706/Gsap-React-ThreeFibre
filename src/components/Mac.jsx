import { useGSAP } from '@gsap/react';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { FoxIslandModel } from './FoxIsland';
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FlyingBirdModel } from './FlyingBirdModel';

const Box = () => {
    const [hover, setHover] = useState(false)
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            position={[-1.2, -2, -8]}
            ref={ref}
            onPointerOver={(event) => {
                event?.stopPropagation();
                setHover(true);
                console.log(event, 'Hovered on the mesh');
            }}
            onPointerOut={(event) => {
                setHover(false);
                console.log('Pointer out, hover reset to false');
            }}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hover ? 'hotpink' : 'white'} />
        </mesh>
    )
}
const Mac = () => {

    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            duration: 1.5,
            y: 0
        });
    }, [])
    // useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <section id='about' className='h-full w-full common-padding bg-slate-300'>
            <div className="screen-max-width">
                <h1 id="title" className="section-heading mb-12">
                    Personal Info
                </h1>

                <Canvas style={{ width: '100%', height: '100vh' }}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <Box />
                    <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} />
                    <FlyingBirdModel
                        scale={[1, 1, 1]}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    {/* <FoxIslandModel
                        position={[0, 0, 0]} 
                        scale={[1, 1, 1]} 
                        rotation={[0, Math.PI / 2, 0]}
                    /> */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={true}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Canvas>
            </div>
        </section>
    )
}

export default Mac