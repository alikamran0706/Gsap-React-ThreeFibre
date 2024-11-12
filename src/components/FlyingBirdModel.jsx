import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function FlyingBirdModel(props) {
    const group = useRef();
    const [position, setPosition] = useState([0, 0, 0])
    const { nodes, materials, animations } = useGLTF('/models/simple_bird/scene-transformed.glb')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {

        const animationName = 'Flying'; // Replace this with your animation's UUID
        const animationToPlay = animations.find(animation => animation.name === animationName)
        if (animationToPlay) {
            actions[animationToPlay.name]?.play()  // Play the animation by name
        } else {
            console.log('Animation not found with the specified UUID.')
        }
    }, [animations]);
    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                setPosition((prevPosition) => [prevPosition[0], prevPosition[1], prevPosition[2] - 1])  // Move forward
                break;
            case 'ArrowDown':
                setPosition((prevPosition) => [prevPosition[0], prevPosition[1], prevPosition[2] + 1])  // Move backward
                break;
            case 'ArrowLeft':
                setPosition((prevPosition) => [prevPosition[0] - 1, prevPosition[1], prevPosition[2]])  // Move left
                break;
            case 'ArrowRight':
                setPosition((prevPosition) => [prevPosition[0] + 1, prevPosition[1], prevPosition[2]])  // Move right
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown)
    
        // Cleanup event listener when component unmounts
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        }
      }, [])
    return (
        <group ref={group} position={position} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                    position={[0, 0.205, 0]}
                    rotation={[1.485, 0, 0]}
                    scale={0.313}
                />
                <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                    position={[0, 0.205, 0]}
                    rotation={[1.485, 0, 0]}
                    scale={0.313}
                />
                <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                    position={[0, 0.205, 0]}
                    rotation={[1.485, 0, 0]}
                    scale={0.313}
                />
                <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                    position={[0, 0.205, 0]}
                    rotation={[1.485, 0, 0]}
                    scale={0.313}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/simple_bird/scene-transformed.glb')