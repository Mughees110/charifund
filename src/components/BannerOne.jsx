"use client";

const BannerOne = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id='home' className='banner-two banner-two--impact-bridge'>
      <div className='container'>
        <div className='row align-items-center gutter-30'>
          <div className='col-12 col-lg-7 order-2 order-lg-1'>
            <div className='hero-copy'>
              <span className='hero-identity'>
                Al-Khadija Foundation Trust Pakistan · Est. 2000
              </span>
              <h1>
                Serving those who need{" "}
                <span className='bottom-line'>care</span> most
              </h1>
              <p className='hero-lead'>
                Healing with compassion in communities that cannot afford to
                wait.
              </p>
              <div className='banner__content-cta cta'>
                <a
                  href='#donate'
                  aria-label='donate now'
                  title='donate now'
                  className='btn--primary'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("donate");
                  }}
                >
                  Donate Now <i className='fa-solid fa-arrow-right' />
                </a>
                <a
                  href='#journey'
                  className='hero-quiet-link'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("journey");
                  }}
                >
                  See our journey
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5 order-1 order-lg-2'>
            <div className='hero-photo'>
              <img
                src='/section1.jpg'
                alt='Care and family at Al-Khadija'
                width={1400}
                height={788}
                fetchPriority='high'
                decoding='async'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
