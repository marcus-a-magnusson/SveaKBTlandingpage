import Button from './Button';
import { useFadeInOnScroll } from './useFadeInOnScroll';
import DrawOnViewSVG from './DrawOnViewSvg';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import BrushTitle from './brushtitle';
const SlideThree = ({ onButtonClick }) => {
  const { ref: fadeRef, isVisible } = useFadeInOnScroll();
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 1 = 100%

  const toggleVideo = (videoRef, setIsPlaying) => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    // Update Desktop video if it exists in DOM
    if (desktopVideoRef.current) {
      desktopVideoRef.current.volume = newVolume;
    }

    // Update Mobile video if it exists in DOM
    if (mobileVideoRef.current) {
      mobileVideoRef.current.volume = newVolume;
    }
  };
  return (
    <>
      <section className="slide slide-03">
        <div className="grid-content-container slide-3">
          <div className="left-content">
            <div className="slide-image-wrapper slide-video">
              <div className="video-wrapper">
                <video
                  ref={desktopVideoRef}
                  src="/public/SveaKBTVideo.mp4"
                  playsInline
                  className="video-content video"
                  onClick={() =>
                    toggleVideo(desktopVideoRef, setIsDesktopPlaying)
                  }
                />
                {!isDesktopPlaying && (
                  <div className="play-button-overlay">▶</div>
                )}

                <div
                  className="volume-control"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    className="volume-icon"
                  />

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                    style={{ '--percent': `${volume * 100}%` }} // use your existing global CSS
                  />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 566 757"
                fill="none"
                className="slide-3-svg"
              >
                <path
                  d="M461.327 186.471C441.175 369.275 369.963 467.807 207.993 491.264C100.948 491.264 0 281.362 0 174.236C0 67.1109 95.2496 -22.6893 198.637 5.1072C384.679 55.1262 439.09 85.1268 461.327 186.471Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M560.286 532.888C560.286 640.013 442.615 808.651 184.603 741.359C77.5573 741.359 2.1591 285.201 2.1591 178.076C2.1591 70.9503 151.313 261.921 258.372 261.921C456.649 261.921 595.911 322.494 560.286 532.888Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>
          </div>
          <div
            ref={fadeRef}
            className={`right-content fade-in ${isVisible ? 'visible' : ''}`}
          >
            <BrushTitle text="Lätta steg" stroke1="brushstroke3.png" />

            <p>
              När måendet påverkas av årstidernas skiftningar kan små,
              genomtänkta steg vara hjälpsamma. Det här är exempel på sådant som
              ofta ingår i psykologisk behandling vid säsongsbunden nedstämdhet.
            </p>
            <h3>Reflektera</h3>
            <p>
              Om besvären är ihållande eller påverkar din vardag finns
              professionellt stöd att få. Ett första steg kan vara att stanna
              upp och reflektera över hur du mår.
            </p>
            <div className="button-container">
              <Button onClick={onButtonClick}>Stäm av ditt mående</Button>
            </div>

            <div className="slide-image-wrapper">
              <DrawOnViewSVG duration={3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 444 174"
                  fill="none"
                  className="svg-fast-draw"
                >
                  <path
                    d="M0.270744 165.906C26.9374 173.406 85.6707 180.406 107.271 148.406C128.871 116.406 159.271 110.739 171.771 111.906C190.104 121.739 228.271 137.406 260.771 115.406C287.971 94.6059 297.771 86.4059 299.271 84.9059C305.937 81.2393 323.471 74.9059 340.271 78.9059C361.271 83.9059 318.771 93.9059 318.271 97.9059C317.771 101.906 312.271 115.406 330.771 115.406C349.271 115.406 343.271 96.9059 353.271 87.9059C363.271 78.9059 369.771 72.4059 379.771 74.4059C389.771 76.4059 429.271 103.406 441.271 119.906C450.871 133.106 413.604 124.739 393.771 118.906C382.771 112.239 362.671 96.1059 370.271 84.9059C377.871 73.7059 382.104 71.9059 383.271 72.4059C384.937 71.5726 387.571 68.2059 384.771 61.4059C381.971 54.6059 387.937 50.9059 391.271 49.9059C393.437 49.4059 398.071 48.7059 399.271 49.9059C400.471 51.1059 399.104 52.406 398.271 52.906C395.937 52.5726 389.571 51.306 382.771 48.906C375.971 46.506 369.271 50.5726 366.771 52.906C363.104 58.0726 354.671 68.206 350.271 67.406C344.771 66.406 332.271 64.906 323.771 41.406C316.971 22.606 318.271 7.57262 319.771 2.40595C321.271 0.405951 326.171 -0.994048 333.771 9.40595C341.371 19.806 356.937 38.7393 363.771 46.906"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </DrawOnViewSVG>
            </div>
          </div>
        </div>

        <div className="mobile-show">
          <BrushTitle text="Lätta steg" stroke1="brushstroke3.png" />

          <p>
            När måendet påverkas av årstidernas skiftningar kan små, genomtänkta
            steg vara hjälpsamma. Det här är exempel på sådant som ofta ingår i
            psykologisk behandling vid säsongsbunden nedstämdhet.
          </p>

          <div className="slide-image-wrapper mobile-img video-mobile">
            <div className="video-wrapper">
              <video
                ref={mobileVideoRef}
                src="/public/SveaKBTVideo.mp4"
                playsInline
                className="video-content video"
                onClick={() => toggleVideo(mobileVideoRef, setIsMobilePlaying)}
              />
              {!isMobilePlaying && <div className="play-button-overlay">▶</div>}

              <div
                className="volume-control"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                  style={{ '--percent': `${volume * 100}%` }} // use your existing global CSS
                />
              </div>
            </div>
          </div>

          <div className="slide-image-wrapper mobile-img">
            <DrawOnViewSVG duration={3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 444 174"
                fill="none"
                className="svg-fast-draw"
              >
                <path
                  d="M0.270744 165.906C26.9374 173.406 85.6707 180.406 107.271 148.406C128.871 116.406 159.271 110.739 171.771 111.906C190.104 121.739 228.271 137.406 260.771 115.406C287.971 94.6059 297.771 86.4059 299.271 84.9059C305.937 81.2393 323.471 74.9059 340.271 78.9059C361.271 83.9059 318.771 93.9059 318.271 97.9059C317.771 101.906 312.271 115.406 330.771 115.406C349.271 115.406 343.271 96.9059 353.271 87.9059C363.271 78.9059 369.771 72.4059 379.771 74.4059C389.771 76.4059 429.271 103.406 441.271 119.906C450.871 133.106 413.604 124.739 393.771 118.906C382.771 112.239 362.671 96.1059 370.271 84.9059C377.871 73.7059 382.104 71.9059 383.271 72.4059C384.937 71.5726 387.571 68.2059 384.771 61.4059C381.971 54.6059 387.937 50.9059 391.271 49.9059C393.437 49.4059 398.071 48.7059 399.271 49.9059C400.471 51.1059 399.104 52.406 398.271 52.906C395.937 52.5726 389.571 51.306 382.771 48.906C375.971 46.506 369.271 50.5726 366.771 52.906C363.104 58.0726 354.671 68.206 350.271 67.406C344.771 66.406 332.271 64.906 323.771 41.406C316.971 22.606 318.271 7.57262 319.771 2.40595C321.271 0.405951 326.171 -0.994048 333.771 9.40595C341.371 19.806 356.937 38.7393 363.771 46.906"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </DrawOnViewSVG>
          </div>
          <h3>Reflektera</h3>
          <p>
            Om besvären är ihållande eller påverkar din vardag finns
            professionellt stöd att få. Ett första steg kan vara att stanna upp
            och reflektera över hur du mår.
          </p>
          <div className="button-container">
            <Button onClick={onButtonClick}>Stäm av ditt mående</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideThree;
