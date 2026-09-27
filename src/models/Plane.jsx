import {useRef, useEffect } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Plane = ({isRotating, ...props }) => {
    const ref = useRef();
    const introStart = useRef(null);
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useFrame(({ clock }) => {
      if (introStart.current === null) {
        introStart.current = clock.elapsedTime;
      }

      const targetPosition = props.position || [0, 0, 0];
      const progress = Math.min((clock.elapsedTime - introStart.current) / 2, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const startPosition = [targetPosition[0] - 18, targetPosition[1] + 1, targetPosition[2] - 2];

      ref.current.position.x = startPosition[0] + (targetPosition[0] - startPosition[0]) * easedProgress;
      ref.current.position.y = startPosition[1] + (targetPosition[1] - startPosition[1]) * easedProgress;
      ref.current.position.z = startPosition[2] + (targetPosition[2] - startPosition[2]) * easedProgress;
    });

    useEffect(() => {
      console.log({isRotating});
      if (isRotating) {
        actions['Take 001'].play();
      }
      else {
        actions['Take 001'].stop();
      }
    }, [actions, isRotating]);
  

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane