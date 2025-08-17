
"use client";
import { useEffect, useRef, useState } from "react";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [streamError, setStreamError] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (!active) return;
        if (videoRef.current) {
          (videoRef.current as any).srcObject = stream as MediaStream;
        }
      } catch (e: any) {
        setStreamError(e?.message || "Не удалось получить доступ к камере");
      }
    }
    init();
    return () => {
      active = false;
      const srcObj = (videoRef.current as any)?.srcObject as MediaStream | undefined;
      if (srcObj) srcObj.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const w = video.videoWidth || 640;
    const h = video.videoHeight || 480;
    (canvas as HTMLCanvasElement).width = w;
    (canvas as HTMLCanvasElement).height = h;

    const ctx = (canvas as HTMLCanvasElement).getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video as HTMLVideoElement, 0, 0, w, h);
    const dataUrl = (canvas as HTMLCanvasElement).toDataURL("image/png");
    setPhotoUrl(dataUrl);
  };

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Камера</h1>
      {streamError ? (
        <div className="p-4 border rounded-2xl bg-red-50 text-red-700">
          Ошибка камеры: {streamError}
        </div>
      ) : (
        <div className="space-y-3">
          <video ref={videoRef} autoPlay playsInline className="w-full rounded-2xl border" />
          <button
            onClick={takePhoto}
            className="px-4 py-2 rounded-xl border hover:shadow"
          >
            Сделать фото
          </button>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      {photoUrl && (
        <div className="space-y-2">
          <div className="font-semibold">Снимок:</div>
          <img src={photoUrl} alt="photo" className="w-full max-w-md rounded-2xl border" />
          <a
            href={photoUrl}
            download={`photo-${int(__import__('time').time())}.png`}
            className="inline-block px-4 py-2 rounded-xl border hover:shadow"
          >
            Скачать PNG
          </a>
        </div>
      )}
    </main>
  );
}
