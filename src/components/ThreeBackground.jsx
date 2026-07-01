// components/ThreeBackground.jsx
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    containerRef.current.appendChild(renderer.domElement)

    // Particles
    const geometry = new THREE.BufferGeometry()
    const count = 1000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20
    }

    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    const material = new THREE.PointsMaterial({
      color: 0xc4922a,
      size: 0.2,
      transparent: true,
      opacity: 0.5,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse movement
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    let animationId

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Auto rotation
      particles.rotation.y += 0.002
      particles.rotation.x += 0.001

      // Mouse influence
      particles.rotation.x += (mouseY - particles.rotation.x) * 0.02
      particles.rotation.y += (mouseX - particles.rotation.y) * 0.02

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)

      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      geometry.dispose()
      material.dispose()
      renderer.dispose()

      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}