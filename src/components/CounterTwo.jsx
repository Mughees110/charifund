"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const CounterTwo = () => {
  return (
    <section
      id='impact'
      className='counter-four impact-section pt-120 pb-120'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-10 col-xl-9'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>Every life restored matters</span>
              <h3 className='title-animation_inner fw-5'>
                Behind every number is a mother, a father, a child who found
                hope again
              </h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='counter-four__content text-center'>
              <h2 className='hb'>
                <TrackVisibility once>
                  {({ isVisible }) =>
                    isVisible && (
                      <span className='odometer fw-8'>
                        <CountUp
                          delay={0}
                          start={0}
                          end={2.024}
                          decimals={3}
                          decimal='.'
                        />
                        <span className='prefix'> Million+</span>
                      </span>
                    )
                  }
                </TrackVisibility>
              </h2>
              <p className='text-xl'>
                People served and treated with compassion till 2025
              </p>
              <p
                className='mt-3'
                style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}
              >
                From emergency care to quiet recoveries, each life we touch is a
                promise kept — that dignity and healing should never be out of
                reach.
              </p>
              <div className='cta'>
                <a
                  href='#donate'
                  aria-label='help the next patient'
                  title='help the next patient'
                  className='btn--primary'
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("donate")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Help the Next Patient
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fc-one'>
        <img src='assets/images/fc-five.png' alt='Image_inner' />
      </div>
      <div className='fc-two'>
        <img src='assets/images/fc-nine.png' alt='Image_inner' />
      </div>
      <div className='fc-three'>
        <img src='assets/images/fc-ten.png' alt='Image_inner' />
      </div>
      <div className='fc-four'>
        <img src='assets/images/fc-two.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default CounterTwo;
