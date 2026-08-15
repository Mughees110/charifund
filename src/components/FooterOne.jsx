"use client";
import Link from "next/link";

const EXPLORE_LINKS = [
  { id: "about", label: "About Us" },
  { id: "impact", label: "Impact" },
  { id: "journey", label: "Journey" },
  { id: "documentaries", label: "Documentaries" },
];

const WORK_LINKS = [
  { id: "facilities", label: "Facilities" },
  { id: "special-work", label: "Special Work" },
  { id: "past-work", label: "Past Work" },
  { id: "donate", label: "Donate" },
  { id: "contact", label: "Contact" },
];

const FooterOne = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className='footer-two'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-md-6 col-xl-3'>
            <div
              className='footer-two__widget'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='footer-two__widget-logo'>
                <Link
                  href='/'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  <img
                    src='/logo.png'
                    alt='Al-Khadija'
                    width={400}
                    height={400}
                    decoding='async'
                    loading='lazy'
                  />
                </Link>
              </div>
              <div className='footer-two__widget-content'>
                <p>
                  Al-Khadija Foundation Trust Pakistan serves those who need
                  care most — with compassion, dignity, and hope.
                </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-6 col-xl-2 offset-xl-1'>
            <div
              className='footer-two__widget'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <div className='footer-two__widget-intro'>
                <h5>Explore</h5>
                <div className='line'>
                  <span className='large-line' />
                  <span className='small-line' />
                  <span className='small-line' />
                </div>
              </div>
              <div className='footer-two__widget-content'>
                <ul>
                  {EXPLORE_LINKS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        <i className='fa-solid fa-arrow-right' />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-6 col-xl-3'>
            <div
              className='footer-two__widget footer-two__widget--alternate'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={400}
            >
              <div className='footer-two__widget-intro'>
                <h5>Our Work</h5>
                <div className='line'>
                  <span className='large-line' />
                  <span className='small-line' />
                  <span className='small-line' />
                </div>
              </div>
              <div className='footer-two__widget-content'>
                <ul>
                  {WORK_LINKS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        <i className='fa-solid fa-arrow-right' />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <div
              className='footer-two__widget footer-two__widget--alternate'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <div className='footer-two__widget-intro'>
                <h5>Get In Touch</h5>
                <div className='line'>
                  <span className='large-line' />
                  <span className='small-line' />
                  <span className='small-line' />
                </div>
              </div>
              <div className='footer-two__widget-content footer-two__widget-content--contact'>
                <ul>
                  <li>
                    <a href='tel:04237415120'>
                      <i className='fa-solid fa-phone' />
                      042-37415120
                    </a>
                  </li>
                  <li>
                    <a href='mailto:info@alkhadija.com'>
                      <i className='fa-regular fa-envelope' />
                      info@alkhadija.com
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.google.com/maps/search/?api=1&query=31.5371875,74.2808594'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa-solid fa-location-dot' />
                      Al-Khadija Medical Center, Shera Kot, Lahore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-two__copyright'>
        <div className='container'>
          <div className='row align-items-center gutter-12'>
            <div className='col-12'>
              <div className='footer-two__copyright-inner text-center'>
                <p>
                  Copyright © {new Date().getFullYear()} Al-Khadija Foundation
                  Trust Pakistan. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
        <img
          src='assets/images/sprade.png'
          alt=''
          className='base-img'
        />
      </div>
      <div className='sprade-light' data-aos='zoom-in' data-aos-duration={1000}>
        <img src='assets/images/sprade-light.png' alt='' />
      </div>
    </footer>
  );
};

export default FooterOne;
