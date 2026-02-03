'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Linkedin(props) {
  const { nodes, materials } = useGLTF('/linkedin-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['Objeto_1_Tinta_(1)_0'].geometry}
        material={materials.Tinta_1}
        scale={0.005}
      />
      <mesh
        geometry={nodes['Objeto_2_Tinta_(3)_0'].geometry}
        material={materials.Tinta_3}
        scale={0.005}
      />
    </group>
  );
}

useGLTF.preload('/linkedin-transformed.glb');

