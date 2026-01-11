import { useEffect, useRef } from 'react';

const DrawOnViewSVG = ({ children, duration = 2, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const paths = container.querySelectorAll('path');

    // 1. Setup the "Hidden" state
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.transition = 'none';
      path.style.opacity = '0';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 2. Trigger animation after a small buffer + optional custom delay
          setTimeout(() => {
            paths.forEach((path) => {
              // Apply the custom duration passed via props
              path.style.transition = `stroke-dashoffset ${duration}s ease-in-out, opacity 0.5s ease-in`;
              path.style.strokeDashoffset = '0';
              path.style.opacity = '1';
            });
            observer.disconnect();
          }, 50 + delay * 1000); // Convert delay seconds to ms
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [duration, delay]); // Re-run if props change

  return (
    <div ref={containerRef} className="svg-draw-container">
      {children}
    </div>
  );
};

export default DrawOnViewSVG;
