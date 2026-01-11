import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import SlideOne from './Slide_01';
import SlideTwo from './Slide_02';
import SlideThree from './Slide_03';
import SlideFour from './Slide_04';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const surveyRef = useRef(null);

  // Function to smooth scroll to the survey
  const scrollToSurvey = () => {
    surveyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle the "Stäm av ditt mående" button clicks
  const handleButtonClick = () => {
    // 1. Update the URL to /test without hiding the slides
    navigate('/test');
    // 2. Scroll down
    scrollToSurvey();
  };

  // Handle deep-linking: If someone loads the site at /test, scroll them down immediately
  useEffect(() => {
    if (location.pathname === '/test') {
      // Small timeout ensures the browser has painted the slides first
      setTimeout(() => {
        surveyRef.current?.scrollIntoView({ behavior: 'auto' });
      }, 100);
    }
  }, []);

  return (
    <div className="app-container">
      <main>
        {/* All slides are rendered immediately */}
        <SlideOne onButtonClick={handleButtonClick} />
        <SlideTwo />
        <SlideThree onButtonClick={handleButtonClick} />

        {/* Survey is always at the bottom, not behind a Route gate */}
        <div ref={surveyRef} className="survey-section-wrapper">
          <SlideFour />
        </div>
      </main>
    </div>
  );
}

export default App;
