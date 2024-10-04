import React, { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";

interface ScreenshotCaptureProps {
  onScreenshotCapture: (screenshot: string) => void;
}

export default function ScreenshotCapture({
  onScreenshotCapture,
}: ScreenshotCaptureProps) {
  const [screenshotArea, setScreenshotArea] = useState<HTMLElement | null>(
    null
  );
  const screenshotRef = useRef<HTMLDivElement>(null);
  const [selectionArea, setSelectionArea] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (screenshotArea) {
        const rect = screenshotRef.current?.getBoundingClientRect();
        if (rect) {
          setSelectionArea({
            startX: e.clientX - rect.left,
            startY: e.clientY - rect.top,
            endX: e.clientX - rect.left,
            endY: e.clientY - rect.top,
          });
        }
      }
    },
    [screenshotArea]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (screenshotArea && selectionArea) {
        const rect = screenshotRef.current?.getBoundingClientRect();
        if (rect) {
          setSelectionArea({
            ...selectionArea,
            endX: e.clientX - rect.left,
            endY: e.clientY - rect.top,
          });
        }
      }
    },
    [screenshotArea, selectionArea]
  );

  const handleMouseUp = useCallback(() => {
    if (screenshotArea && selectionArea) {
      const { startX, startY, endX, endY } = selectionArea;
      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);

      html2canvas(screenshotArea, {
        x,
        y,
        width,
        height,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      }).then((canvas) => {
        onScreenshotCapture(canvas.toDataURL());
      });

      setScreenshotArea(null);
      setSelectionArea(null);
    }
  }, [screenshotArea, selectionArea, onScreenshotCapture]);

  const captureScreenshot = () => {
    setScreenshotArea(document.body);
  };

  return (
    <>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
      {screenshotArea && (
        <div
          ref={screenshotRef}
          className="fixed inset-0 bg-black bg-opacity-50 cursor-crosshair z-50"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="absolute top-4 left-4 text-white">
            Click and drag to select the area for the screenshot
          </div>
          {selectionArea && (
            <div
              className="absolute border-2 border-white"
              style={{
                left: Math.min(selectionArea.startX, selectionArea.endX),
                top: Math.min(selectionArea.startY, selectionArea.endY),
                width: Math.abs(selectionArea.endX - selectionArea.startX),
                height: Math.abs(selectionArea.endY - selectionArea.startY),
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
