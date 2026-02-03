'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Aphrodite(props) {
  const { nodes, materials } = useGLTF('/aphrodite-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Rz_123_Afrodyta_z_Melos_119K_0.geometry}
        material={materials.defaultMat}
        position={[18.663, 112.118, 1]}
        rotation={[0, -1, -0.2]}
      />
    </group>
  );
}

useGLTF.preload('/aphrodite-transformed.glb');

