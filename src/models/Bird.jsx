import {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const introStart = useRef(null);
    const {actions} = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();

    }, []);

    useFrame(({ clock }) => {
      if (introStart.current === null) {
        introStart.current = clock.elapsedTime;
      }

      const radius = 22;
      const centerZ = -70;
      const introDuration = 2;
      const introElapsed = clock.elapsedTime - introStart.current;
      const introProgress = Math.min(introElapsed / introDuration, 1);
      const easedProgress = 1 - Math.pow(1 - introProgress, 3);
      const orbitAngle = Math.PI / 2 - Math.max(introElapsed - introDuration, 0) * 0.25;
      const orbitX = Math.cos(orbitAngle) * radius;
      const orbitZ = centerZ + Math.sin(orbitAngle) * radius;
      const startPosition = [-45, 12, -48];

      birdRef.current.position.x = startPosition[0] + (orbitX - startPosition[0]) * easedProgress;
      birdRef.current.position.y = startPosition[1] + (Math.sin(clock.elapsedTime) * 0.2 + 2 - startPosition[1]) * easedProgress;
      birdRef.current.position.z = startPosition[2] + (orbitZ - startPosition[2]) * easedProgress;
      birdRef.current.rotation.y = (orbitAngle - Math.PI / 2) * easedProgress;

    });


  return (
      <mesh 
        position={[0, 2, -48]} 
        scale={[0.01, 0.01, 0.01]} 
        ref={birdRef}
      >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird