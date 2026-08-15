"use client";
import { useEffect, useState } from "react";

const FEATURED = [
  {
    src: "/eye.png",
    alt: "Cataract eye surgeries",
    label: "59 Cataract Surgeries",
  },
  {
    src: "/prosthetic.png",
    alt: "Prosthetic care",
    label: "14 Prosthetic Lives",
  },
];

const GALLERY = [
  {
    src: "/pros-prrofs/471438050_10234568465462669_241001629395409855_n.jpg",
    alt: "A life restored through care",
  },
  {
    src: "/pros-prrofs/603807960_10239640105050489_2463799920374026962_n.jpg",
    alt: "Hope after surgery",
  },
  {
    src: "/pros-prrofs/626863897_10240312284774562_9177883990984713593_n.jpg",
    alt: "Standing again with dignity",
  },
  {
    src: "/pros-prrofs/766710583_10243138296183081_2998678217016596777_n.jpg",
    alt: "A smile that says thank you",
  },
];

const HelpTwo = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!galleryOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setGalleryOpen(false);
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % GALLERY.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + GALLERY.length) % GALLERY.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryOpen]);

  const openGallery = (index = 0) => {
    setActiveIndex(index);
    setGalleryOpen(true);
  };

  const scrollToDonate = (e) => {
    e.preventDefault();
    document
      .getElementById("donate")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id='special-work' className='help-two help-two--special'>
      <div className='container'>
        <div className='row g-4 align-items-center'>
          <div className='col-12 col-lg-6 order-1'>
            <div className='special-work__media'>
              {FEATURED.map((item, index) => (
                <button
                  key={item.label}
                  type='button'
                  className='special-work__shot'
                  onClick={() => openGallery(0)}
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={index * 100}
                >
                  <img src={item.src} alt={item.alt} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className='col-12 col-lg-6 order-2'>
            <div className='help-two__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Special Work
                </span>
                <h2 className='title-animation_inner'>
                  Restoring sight. Restoring <span>dignity</span>
                </h2>
                <p>
                  Behind every number is a face, a family, a quiet prayer
                  answered. Through cataract surgeries and prosthetic care,
                  Al-Khadija has helped people see the world again — and walk
                  back into life with hope.
                </p>
              </div>

              <div className='help__content-icon-group special-work__points'>
                <div className='help__content-icon'>
                  <div className='thumb'>
                    <i className='icon-health' />
                  </div>
                  <div className='content'>
                    <h6>59 Cataract Surgeries</h6>
                    <p>
                      Fifty-nine people once lived in fading light. Today, they
                      can see their children&apos;s faces again — because someone
                      chose to care.
                    </p>
                  </div>
                </div>
                <div className='help__content-icon'>
                  <div className='thumb'>
                    <i className='icon-support-heart' />
                  </div>
                  <div className='content'>
                    <h6>14 Prosthetic Lives</h6>
                    <p>
                      Fourteen souls who thought their steps had ended — now
                      stand, walk, and move forward with dignity restored.
                    </p>
                  </div>
                </div>
              </div>

              <div className='special-work__actions'>
                <button
                  type='button'
                  className='btn--primary'
                  onClick={() => openGallery(0)}
                >
                  View Success Stories{" "}
                  <i className='fa-solid fa-arrow-right' />
                </button>
                <a
                  href='#donate'
                  className='btn--secondary'
                  onClick={scrollToDonate}
                >
                  Support This Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {galleryOpen && (
        <div
          className='special-gallery'
          role='dialog'
          aria-modal='true'
          aria-label='Success stories gallery'
        >
          <button
            type='button'
            className='special-gallery__backdrop'
            aria-label='Close gallery'
            onClick={() => setGalleryOpen(false)}
          />
          <div className='special-gallery__panel'>
            <div className='special-gallery__top'>
              <h3>Success Stories</h3>
              <button
                type='button'
                className='special-gallery__close'
                aria-label='Close'
                onClick={() => setGalleryOpen(false)}
              >
                <i className='fa-solid fa-xmark' />
              </button>
            </div>

            <div className='special-gallery__hero'>
              <button
                type='button'
                className='special-gallery__nav special-gallery__nav--prev'
                aria-label='Previous photo'
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + GALLERY.length) % GALLERY.length
                  )
                }
              >
                <i className='fa-solid fa-chevron-left' />
              </button>
              <img
                src={GALLERY[activeIndex].src}
                alt={GALLERY[activeIndex].alt}
              />
              <button
                type='button'
                className='special-gallery__nav special-gallery__nav--next'
                aria-label='Next photo'
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % GALLERY.length)
                }
              >
                <i className='fa-solid fa-chevron-right' />
              </button>
            </div>

            <div className='special-gallery__thumbs'>
              {GALLERY.map((item, index) => (
                <button
                  key={item.src}
                  type='button'
                  className={
                    index === activeIndex
                      ? "special-gallery__thumb is-active"
                      : "special-gallery__thumb"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.src} alt={item.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HelpTwo;
