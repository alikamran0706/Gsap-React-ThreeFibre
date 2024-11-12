import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function FoxModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/fox/scene-transformed.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    animations.forEach((animation) => {
        console.log(`Animation Name: ${animation.name}, UUID: ${animation.uuid}`);
      })
    const animationName = 'idle'; // Replace this with your animation's UUID
    const animationToPlay = animations.find(animation => animation.name === animationName)

    if (animationToPlay) {
      console.log(`Found animation: ${animationToPlay}, playing it...`)
      actions[animationToPlay.name]?.play()  // Play the animation by name
    } else {
      console.log('Animation not found with the specified UUID.')
    }
  }, [animations])
  // Optional: Rotate the model to ensure it's not upside down or facing wrong direction
  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      {/* Construct the model group using skinned meshes */}
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/fox/scene-transformed.glb');
