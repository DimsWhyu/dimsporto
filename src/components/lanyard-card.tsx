import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import dimasPhoto from "@/assets/Foto Formal_Dimas_Putih.png";

interface LanyardCardProps {
  className?: string;
}

export function LanyardCard({ className = "" }: LanyardCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
    pointLight.position.set(-4, -2, 4);
    scene.add(pointLight);

    // --- Create 2D Texture for Front ID Card ---
    const cardCanvas = document.createElement("canvas");
    cardCanvas.width = 600;
    cardCanvas.height = 950;
    const ctx = cardCanvas.getContext("2d")!;

    // Load Dimas Photo
    const photoImg = new Image();
    photoImg.src = dimasPhoto;

    const drawCardTexture = () => {
      // Card Background (Sleek Dark Card)
      ctx.fillStyle = "#121318";
      ctx.beginPath();
      ctx.roundRect(0, 0, 600, 950, 32);
      ctx.fill();

      // Card Inner Border / Accent line
      ctx.strokeStyle = "#383b47";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Header Gradient Bar
      const grad = ctx.createLinearGradient(0, 0, 600, 0);
      grad.addColorStop(0, "#6366f1");
      grad.addColorStop(0.5, "#ec4899");
      grad.addColorStop(1, "#14b8a6");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 600, 16);

      // Top Logo & Header Text
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 20px monospace";
      ctx.fillText("INSTITUT TEKNOLOGI SEPULUH NOPEMBER", 40, 65);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText("DATA SCIENCE DEPARTMENT", 40, 105);

      // Divider Line
      ctx.strokeStyle = "#272a36";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 125);
      ctx.lineTo(560, 125);
      ctx.stroke();

      // Profile Photo Slot
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(165, 165, 270, 340, 24);
      ctx.clip();
      if (photoImg.complete && photoImg.naturalWidth !== 0) {
        ctx.drawImage(photoImg, 165, 165, 270, 340);
      } else {
        ctx.fillStyle = "#1e2330";
        ctx.fillRect(165, 165, 270, 340);
      }
      ctx.restore();

      // Photo Frame
      ctx.strokeStyle = "#4f46e5";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(165, 165, 270, 340, 24);
      ctx.stroke();

      // Name & Title
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 34px sans-serif";
      ctx.fillText("DIMAS WAHYU S.", 300, 565);

      ctx.fillStyle = "#818cf8";
      ctx.font = "600 22px monospace";
      ctx.fillText("DATA SCIENTIST & ANALYST", 300, 605);

      // Badges
      ctx.fillStyle = "#1e2235";
      ctx.strokeStyle = "#3730a3";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(60, 640, 480, 54, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#c7d2fe";
      ctx.font = "bold 18px monospace";
      ctx.fillText("★ 3rd Most Outstanding Student ITS 2026", 300, 674);

      ctx.fillStyle = "#1e2235";
      ctx.strokeStyle = "#065f46";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(60, 712, 480, 54, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#a7f3d0";
      ctx.font = "bold 18px monospace";
      ctx.fillText("Beasiswa Indonesia Maju (BIM) Awardee", 300, 746);

      // Bottom ID Footer & Barcode simulation
      ctx.fillStyle = "#475569";
      ctx.font = "16px monospace";
      ctx.fillText("ID: ITS-DS-2026 • PORTFOLIO ACCESS", 300, 810);

      // Simulated Barcode
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 42; i++) {
        const w = (i % 3 === 0 ? 6 : 3);
        ctx.fillRect(80 + i * 10, 840, w, 40);
      }

      // Top Lanyard Hole Slot
      ctx.fillStyle = "#090a0f";
      ctx.beginPath();
      ctx.ellipse(300, 35, 45, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    photoImg.onload = () => {
      drawCardTexture();
      frontTexture.needsUpdate = true;
    };
    drawCardTexture();

    const frontTexture = new THREE.CanvasTexture(cardCanvas);

    // --- 3D ID Card Mesh ---
    const cardWidth = 2.2;
    const cardHeight = 3.5;
    const cardDepth = 0.04;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x1e2029, roughness: 0.4 }), // right
      new THREE.MeshStandardMaterial({ color: 0x1e2029, roughness: 0.4 }), // left
      new THREE.MeshStandardMaterial({ color: 0x1e2029, roughness: 0.4 }), // top
      new THREE.MeshStandardMaterial({ color: 0x1e2029, roughness: 0.4 }), // bottom
      new THREE.MeshStandardMaterial({ map: frontTexture, roughness: 0.2, metalness: 0.1 }), // front
      new THREE.MeshStandardMaterial({ color: 0x121318, roughness: 0.3, metalness: 0.2 }), // back
    ];

    const cardGroup = new THREE.Group();
    const cardMesh = new THREE.Mesh(cardGeometry, materials);
    cardGroup.add(cardMesh);

    // Silver Metal Clip Ring at top of card
    const clipGeo = new THREE.TorusGeometry(0.16, 0.035, 16, 32);
    const clipMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.9,
      roughness: 0.1,
    });
    const clipMesh = new THREE.Mesh(clipGeo, clipMat);
    clipMesh.position.set(0, cardHeight / 2 + 0.1, 0);
    cardGroup.add(clipMesh);

    scene.add(cardGroup);

    // --- Verlet Physics Rope / Lanyard Strap ---
    const numPoints = 14;
    const segLength = 0.26;
    const anchor = new THREE.Vector3(0, 3.2, 0);

    const points: { pos: THREE.Vector3; oldPos: THREE.Vector3 }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const p = new THREE.Vector3(0, anchor.y - i * segLength, 0);
      points.push({ pos: p.clone(), oldPos: p.clone() });
    }

    // 3D Curve Line Mesh for Strap
    const strapCurve = new THREE.CatmullRomCurve3(points.map((p) => p.pos));
    const strapGeo = new THREE.TubeGeometry(strapCurve, 32, 0.045, 8, false);

    // Fabric Strap Texture Canvas
    const strapCanvas = document.createElement("canvas");
    strapCanvas.width = 512;
    strapCanvas.height = 64;
    const sCtx = strapCanvas.getContext("2d")!;
    sCtx.fillStyle = "#312e81";
    sCtx.fillRect(0, 0, 512, 64);
    sCtx.fillStyle = "#ffffff";
    sCtx.font = "bold 20px monospace";
    sCtx.fillText("DIMAS WAHYU • DATA SCIENCE ITS • ", 10, 40);
    const strapTexture = new THREE.CanvasTexture(strapCanvas);
    strapTexture.wrapS = THREE.RepeatWrapping;
    strapTexture.repeat.set(4, 1);

    const strapMat = new THREE.MeshStandardMaterial({
      map: strapTexture,
      roughness: 0.6,
      side: THREE.DoubleSide,
    });
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    scene.add(strapMesh);

    // --- Physics Update Function (Verlet Rope Integration) ---
    const gravity = new THREE.Vector3(0, -0.015, 0);
    let isMouseDown = false;
    const mousePos = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    let cardAngleX = 0;
    let cardAngleY = 0;
    let cardAngleZ = 0;

    const updatePhysics = () => {
      // 1. Verlet Integration for Rope Nodes
      points[0].pos.copy(anchor);

      for (let i = 1; i < numPoints; i++) {
        const p = points[i];
        const vel = p.pos.clone().sub(p.oldPos).multiplyScalar(0.96);
        p.oldPos.copy(p.pos);
        p.pos.add(vel).add(gravity);
      }

      // If dragging card with mouse
      if (isMouseDown) {
        raycaster.setFromCamera(mousePos, camera);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, intersectPoint);
        if (intersectPoint) {
          points[numPoints - 1].pos.lerp(intersectPoint, 0.35);
        }
      }

      // 2. Satisfy Distance Constraints
      for (let iteration = 0; iteration < 8; iteration++) {
        points[0].pos.copy(anchor);
        for (let i = 0; i < numPoints - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const delta = p2.pos.clone().sub(p1.pos);
          const dist = delta.length();
          if (dist > 0.0001) {
            const diff = (dist - segLength) / dist;
            if (i === 0) {
              p2.pos.sub(delta.multiplyScalar(diff));
            } else {
              p1.pos.add(delta.clone().multiplyScalar(diff * 0.5));
              p2.pos.sub(delta.multiplyScalar(diff * 0.5));
            }
          }
        }
      }

      // 3. Update Lanyard Tube Geometry
      const curve = new THREE.CatmullRomCurve3(points.map((p) => p.pos));
      strapMesh.geometry.dispose();
      strapMesh.geometry = new THREE.TubeGeometry(curve, 32, 0.045, 8, false);

      // 4. Attach Card Group to Bottom Node of Lanyard
      const bottomNode = points[numPoints - 1].pos;
      const prevNode = points[numPoints - 2].pos;

      cardGroup.position.copy(bottomNode).sub(new THREE.Vector3(0, cardHeight / 2 + 0.1, 0));

      // Calculate dynamic physics tilt based on rope movement & swing velocity
      const ropeDir = bottomNode.clone().sub(prevNode).normalize();
      const targetAngleZ = -ropeDir.x * 1.2;
      const targetAngleX = ropeDir.z * 1.2;

      cardAngleZ += (targetAngleZ - cardAngleZ) * 0.15;
      cardAngleX += (targetAngleX - cardAngleX) * 0.15;

      // Add gentle idle swing when not dragging
      if (!isMouseDown) {
        cardAngleY += (0 - cardAngleY) * 0.08;
      } else {
        cardAngleY += (mousePos.x * 0.8 - cardAngleY) * 0.15;
      }

      cardGroup.rotation.set(cardAngleX, cardAngleY, cardAngleZ);
    };

    // --- Mouse & Touch Event Handlers ---
    const getCanvasMouse = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      return new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
    };

    const onPointerDown = (e: MouseEvent) => {
      isMouseDown = true;
      setIsDragging(true);
      mousePos.copy(getCanvasMouse(e));
    };

    const onPointerMove = (e: MouseEvent) => {
      if (isMouseDown) {
        mousePos.copy(getCanvasMouse(e));
      }
    };

    const onPointerUp = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        isMouseDown = true;
        setIsDragging(true);
        mousePos.copy(getCanvasMouse(e.touches[0]));
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isMouseDown && e.touches[0]) {
        mousePos.copy(getCanvasMouse(e.touches[0]));
      }
    };

    const onTouchEnd = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    canvas.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // --- Animation Loop ---
    let animId = 0;
    const animate = () => {
      updatePhysics();
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);

      canvas.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[540px] md:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full touch-none" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none rounded-full border border-border/80 bg-surface-2/90 px-3 py-1 font-mono text-[11px] text-muted-foreground shadow-xs">
        {isDragging ? "✦ Pulling Card..." : "✦ Click & Drag ID Card"}
      </div>
    </div>
  );
}
