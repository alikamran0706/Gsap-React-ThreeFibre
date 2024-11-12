import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function FlyingBirdModel(props) {
    const group = useRef();
    const scrollOffsetRef = useRef(0);
    const velocityRef = useRef(0);
    const damping = 0.95;
    const scrollSensitivity = 0.00007;

    const { nodes, materials, animations } = useGLTF('/models/simple_bird/scene-transformed.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const animationName = 'Flying';
        const animationToPlay = animations.find(animation => animation.name === animationName);
        if (animationToPlay) {
            actions[animationToPlay.name]?.play();
        } else {
            console.log('Animation not found with the specified UUID.');
        }
    }, [animations, actions]);

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            velocityRef.current += event.deltaY * scrollSensitivity;
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useFrame(() => {
        if (group.current) {
            const radius = 2;
            const angle = scrollOffsetRef.current;

            scrollOffsetRef.current += velocityRef.current;
            velocityRef.current *= damping;
            if (Math.abs(velocityRef.current) < 0.0001) {
                velocityRef.current = 0;
            }

            const x = radius * Math.cos(angle+200);
            const z = radius * Math.sin(angle + 750);

            group.current.position.set(x, 1, z);

            const tangentX = -radius * Math.sin(angle);
            const tangentZ = radius * Math.cos(angle);

            const facingAngle = Math.atan2(tangentZ, tangentX);
            group.current.rotation.y = facingAngle;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
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
    );
}

useGLTF.preload('/models/simple_bird/scene-transformed.glb');
