"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const HelpOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section id='about' className='help help--about'>
        <div className='container'>
          <div className='row align-items-center gutter-40'>
            <div className='col-12 col-lg-5 col-xxl-6'>
              <div className='help__thumb'>
                <div className='help__thumb-inner'>
                  <div className='thumb-top thumb'>
                    <img
                      src='/about1.jpg'
                      alt='Al-Khadija care'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                  <div
                    className='thumb-lg thumb'
                    data-aos='fade-left'
                    data-aos-duration={1000}
                  >
                    <img
                      src='/about-primary.jpg'
                      alt='Al-Khadija foundation'
                      loading='lazy'
                      decoding='async'
                    />
                    <div className='video-btn-wrapper'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </span>
                    </div>
                  </div>
                  <div className='thumb thumb-bottom'>
                    <img
                      src='/about2.jpg'
                      alt='Serving humanity'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                  <div className='line'>
                    <img src='/assets/images/help/line.png' alt='Image_inner' />
                  </div>
                  <div className='grid-line'>
                    <img
                      src='/assets/images/help/grid.png'
                      alt='Image_inner'
                      className='base-img'
                    />
                  </div>
                  <div className='vertical-text'>
                    <h5>
                      Serving <span>Humanity</span> Since 2000
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='help__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  About Al-Khadija
                </span>
                <h2 className='title-animation_inner'>
                  Every life valued. Every hand{" "}
                  <span>reached</span> with care.
                </h2>
                <p>
                  About 25 years ago, philanthropists joined hands to support
                  the deserving with limited means. On{" "}
                  <strong>1st January, 2000</strong>, that spirit became{" "}
                  <strong>Al-Khadija Foundation</strong> — hope, run by the
                  common man, for the common man.
                </p>
                <div className='help__content-icon-group'>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-support-heart' />
                    </div>
                    <div className='content'>
                      <h6>Our Vision</h6>
                      <p>
                        A world where every life is valued, and quality health
                        care and basic education are available to all.
                      </p>
                    </div>
                  </div>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-make-donation' />
                    </div>
                    <div className='content'>
                      <h6>Our Mission</h6>
                      <p>
                        Serve ailing humanity, ease radical poverty, and light
                        the path out of ignorance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='help__content-list'>
                  <ul>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Care beyond
                      socio-religious boundaries
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Healthcare and
                      education for the deprived
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Community hope
                      — by the people, for the people
                    </li>
                  </ul>
                </div>
                <div className='help__content-cta cta'>
                  <a
                    href='#donate'
                    aria-label='support our mission'
                    title='support our mission'
                    className='btn--primary'
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("donate")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Support Our Mission
                  </a>
                  <div className='contact-btn'>
                    <div className='contact-icon'>
                      <i className='icon-phone' />
                    </div>
                    <div className='contact-content'>
                      <p>Need help?</p>
                      <a
                        href='#contact'
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hand'>
          <img src='/assets/images/help/hand.png' alt='Image_inner' />
        </div>
        <div className='parasuit'>
          <img src='/assets/images/parasuit.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img src='/assets/images/help/spade.png' alt='Image_inner' />
        </div>

        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XxVg_s8xAms'
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
      </section>
    </>
  );
};

export default HelpOne;
