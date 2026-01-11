import { useEffect, useRef, useState } from 'react';

const BrushTitle = ({
  text,
  stroke1,
  stroke2,
  className1 = '', // New prop for custom class on brush 1
  className2 = '', // New prop for custom class on brush 2
  duration = 1.5,
  delay = 0.5,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const strokeStyle = { transitionDuration: `${duration}s` };

  return (
    <div className="title-container" ref={containerRef}>
      {stroke1 && (
        <img
          className={`brushstroke stroke-1 ${className1} ${
            isVisible ? 'animate' : ''
          }`}
          src={stroke1}
          style={strokeStyle}
          alt=""
        />
      )}
      {stroke2 && (
        <img
          className={`brushstroke stroke-2 ${className2} ${
            isVisible ? 'animate' : ''
          }`}
          src={stroke2}
          style={{ ...strokeStyle, transitionDelay: `${delay}s` }}
          alt=""
        />
      )}
      <h1 className="brush-h1">{text}</h1>
    </div>
  );
};

export default BrushTitle;
