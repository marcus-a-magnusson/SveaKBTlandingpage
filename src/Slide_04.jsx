import SourceDropdown from './SourceDropDown';
import Survey from './survey';
import { useFadeInOnScroll } from './useFadeInOnScroll';

const SlideFour = () => {
  const { ref: fadeRef, isVisible } = useFadeInOnScroll();
  return (
    <>
      <section className="slide slide-04">
        <div className="center-content-container slide-4">
          <div
            ref={fadeRef}
            className={`center-content fade-in ${isVisible ? 'visible' : ''}`}
          >
            <div className="text-container">
              <h3>Vill du prata med psykolog?</h3>
              <p>
                Vår enkäten är baserad på etablerade mått som PHQ-9 och WHO-5.
                Den ger en överblick över faktorer som kan påverka ens mående.
                Enkäten avser inte att ersätta professionell diagnostik.
              </p>
            </div>

            <div className="survey-container">
              <Survey />
            </div>

            <SourceDropdown />
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideFour;
