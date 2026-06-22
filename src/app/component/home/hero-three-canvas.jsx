"use client";
import { useEffect, useRef } from "react";

export default function HeroThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    let THREE;
    let cleanup;

    const init = async () => {
      THREE = await import("three");

      const canvas = canvasRef.current;
      if (!canvas) return;

      // ── Renderer ────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;

      // ── Scene & Camera ──────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
      camera.position.set(0, 0, 6);

      // ── Fog for depth ───────────────────────────────────────
      scene.fog = new THREE.FogExp2(0x070708, 0.035);

      // ════════════════════════════════════════════════════════
      // 1. PARTICLE FIELD — 1800 points with varied colors
      // ════════════════════════════════════════════════════════
      const particleCount = 1800;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const orange = new THREE.Color("#E84D0E");
      const orangeLight = new THREE.Color("#FF6B35");
      const dim = new THREE.Color("#2a2a2e");
      const blue = new THREE.Color("#3b82f6");
      const white = new THREE.Color("#ffffff");

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 28;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

        const r = Math.random();
        let col;
        if (r < 0.07)       col = orange;
        else if (r < 0.12)  col = orangeLight;
        else if (r < 0.17)  col = blue;
        else if (r < 0.2)   col = white;
        else                col = dim;

        colors[i * 3]     = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.038,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);


      // ════════════════════════════════════════════════════════
      // 5. CONNECTING NETWORK LINES
      // ════════════════════════════════════════════════════════
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xe84d0e,
        transparent: true,
        opacity: 0.055,
        blending: THREE.AdditiveBlending,
      });
      const lineGroup = new THREE.Group();
      for (let i = 0; i < 55; i++) {
        const lineGeo = new THREE.BufferGeometry();
        const start = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 8
        );
        const end = new THREE.Vector3(
          start.x + (Math.random() - 0.5) * 5,
          start.y + (Math.random() - 0.5) * 5,
          start.z + (Math.random() - 0.5) * 3
        );
        lineGeo.setFromPoints([start, end]);
        lineGroup.add(new THREE.Line(lineGeo, lineMat));
      }
      scene.add(lineGroup);

      // ════════════════════════════════════════════════════════
      // 6. GRID PLANE — bottom depth cue
      // ════════════════════════════════════════════════════════
      const gridHelper = new THREE.GridHelper(30, 30, 0xe84d0e, 0x1a1a22);
      gridHelper.position.y = -4;
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.12;
      scene.add(gridHelper);

      // ════════════════════════════════════════════════════════
      // 7. AMBIENT RING — orange halo behind text area
      // ════════════════════════════════════════════════════════
      const ringGeo = new THREE.TorusGeometry(2.5, 0.008, 2, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xe84d0e,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.2;
      scene.add(ring);

      const ring2Geo = new THREE.TorusGeometry(4.0, 0.005, 2, 180);
      const ring2Mat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.06,
        blending: THREE.AdditiveBlending,
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = Math.PI / 2.5;
      ring2.position.y = -0.5;
      scene.add(ring2);

      // ── Mouse Parallax ──────────────────────────────────────
      let mouse = { x: 0, y: 0 };
      let targetMouse = { x: 0, y: 0 };
      const onMouseMove = (e) => {
        targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove);

      // ── Resize ──────────────────────────────────────────────
      const onResize = () => {
        if (!canvas) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      // ── Animation Loop ───────────────────────────────────────
      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Smooth mouse interpolation
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        // Particles drift
        particles.rotation.y = t * 0.018;
        particles.rotation.x = t * 0.007;


        // Rings pulse
        ring.rotation.z = t * 0.05;
        ring2.rotation.z = -t * 0.03;
        ringMat.opacity = 0.08 + Math.sin(t * 0.8) * 0.04;
        ring2Mat.opacity = 0.04 + Math.sin(t * 0.6 + 1) * 0.02;

        // Lines sway
        lineGroup.rotation.y = t * 0.01;

        // Camera parallax
        camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.035;
        camera.position.y += (mouse.y * 0.35 - camera.position.y) * 0.035;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    };

    init();
    return () => { cleanup && cleanup(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
