const journeyImages = [
  { src: "/cons/1.png", alt: "Al-Khadija journey — moment 1", wide: true },
  { src: "/cons/2.png", alt: "Al-Khadija journey — moment 2", wide: true },
  { src: "/cons/3.jpg", alt: "Al-Khadija journey — moment 3", wide: true },
  { src: "/cons/4.jpg", alt: "Al-Khadija journey — moment 4", wide: false },
  { src: "/cons/5.jpg", alt: "Al-Khadija journey — moment 5", wide: false },
  { src: "/cons/6.jpg", alt: "Al-Khadija journey — moment 6", wide: false },
  { src: "/cons/7.jpg", alt: "Al-Khadija journey — moment 7", wide: false },
  { src: "/cons/8.jpg", alt: "Al-Khadija journey — moment 8", wide: false },
];

const GalleryOne = () => {
  const slides = [...journeyImages, ...journeyImages];

  return (
    <section id='journey' className='gallery gallery--journey'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-10 col-xl-8'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Our Journey
              </span>
              <h2 className='title-animation_inner'>
                Smiles of relief. Tears of gratitude.{" "}
                <span>Hands that pray</span>
              </h2>
              <p>
                From a small dispensary to a growing Medical Centre — every
                step powered by compassion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='gallery__inner'>
        <div className='gallery__track'>
          {slides.map((item, index) => (
            <div
              className={`gallery__single ${
                item.wide ? "gallery__single--wide" : ""
              }`}
              key={`${item.src}-${index}`}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryOne;
