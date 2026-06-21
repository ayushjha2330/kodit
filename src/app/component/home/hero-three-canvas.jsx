"use client";
import { useEffect, useRef } from "react";

export default function HeroThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    let THREE;

    const init = async () => {
      THREE = await import("three");

      const canvas = canvasRef.current;
      if (!canvas) return;

      // ── Renderer ────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setClearColor(0x000000, 0);

      // ── Scene & Camera ──────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      // ── Particle Field ──────────────────────────────────────
      const particleCount = 1200;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      const orange = new THREE.Color("#E84D0E");
      const dim = new THREE.Color("#333333");
      const blue = new THREE.Color("#3b82f6");

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        const r = Math.random();
        const col = r < 0.08 ? orange : r < 0.14 ? blue : dim;
        colors[i * 3]     = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;

        sizes[i] = Math.random() * 2.5 + 0.5;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const particleMat = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // ── Wireframe Icosahedron ────────────────────────────────
      const icoGeo = new THREE.IcosahedronGeometry(1.4, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0xe84d0e,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const icosahedron = new THREE.Mesh(icoGeo, icoMat);
      icosahedron.position.set(3.2, -0.5, 0);
      scene.add(icosahedron);

      // ── Wireframe Torus ──────────────────────────────────────
      const torusGeo = new THREE.TorusGeometry(0.9, 0.28, 16, 60);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      torus.position.set(-3.5, 0.8, -1);
      torus.rotation.x = Math.PI / 4;
      scene.add(torus);

      // ── Connecting Lines (DNA-like) ──────────────────────────
      const lineCount = 40;
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xe84d0e,
        transparent: true,
        opacity: 0.06,
        blending: THREE.AdditiveBlending,
      });
      const lineGroup = new THREE.Group();
      for (let i = 0; i < lineCount; i++) {
        const lineGeo = new THREE.BufferGeometry();
        const pts = [];
        const start = new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 6
        );
        const end = new THREE.Vector3(
          start.x + (Math.random() - 0.5) * 4,
          start.y + (Math.random() - 0.5) * 4,
          start.z + (Math.random() - 0.5) * 2
        );
        pts.push(start, end);
        lineGeo.setFromPoints(pts);
        lineGroup.add(new THREE.Line(lineGeo, lineMat));
      }
      scene.add(lineGroup);

      // ── Mouse Parallax ──────────────────────────────────────
      let mouse = { x: 0, y: 0 };
      const onMouseMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
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

        // Rotate particles slowly
        particles.rotation.y = t * 0.03;
        particles.rotation.x = t * 0.01;

        // Rotate icosahedron
        icosahedron.rotation.x = t * 0.25;
        icosahedron.rotation.y = t * 0.35;

        // Rotate torus
        torus.rotation.y = t * 0.2;
        torus.rotation.z = t * 0.15;

        // Mouse parallax on camera
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.04;
        camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    };

    const cleanup = init();
    return () => { cleanup.then((fn) => fn && fn()); };
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
