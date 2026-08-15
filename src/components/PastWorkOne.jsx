"use client";
import { useEffect, useState } from "react";

const PLACES = [
  {
    id: "dhudyal",
    name: "Dhudyal Chakwal",
    region: "Punjab",
    cover: "/past/dhudyal/primary.jpg",
    images: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22,
    ].map((n) => `/past/dhudyal/${n}.jpg`),
  },
  {
    id: "green",
    name: "Green Town",
    region: "Lahore",
    cover: "/past/green/primary.jpg",
    images: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map(
      (n) => `/past/green/${n}.jpg`
    ),
  },
  {
    id: "jampur",
    name: "Jampur Rajanpur",
    region: "South Punjab",
    cover: "/past/jampur/primary.jpg",
    images: [
      1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ].map((n) => `/past/jampur/${n}.jpg`),
  },
  {
    id: "thatta",
    name: "Thatta Sindh",
    region: "Sindh",
    cover: "/past/thatta/primary.jpg",
    images: [
      1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17,
    ].map((n) => `/past/thatta/${n}.jpg`),
  },
];

const PastWorkOne = () => {
  const [activePlace, setActivePlace] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = activePlace?.images ?? [];

  useEffect(() => {
    if (!activePlace) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActivePlace(null);
      if (!gallery.length) return;
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePlace, gallery.length]);

  const openPlace = (place) => {
    setActivePlace(place);
    setActiveIndex(0);
  };

  return (
    <section id='past-work' className='past-work'>
      <div className='container'>
        <div className='row align-items-end gutter-30 past-work__intro'>
          <div className='col-12 col-lg-7'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Past Work
              </span>
              <h2 className='title-animation_inner'>
                Care that reached <span>communities</span>
              </h2>
            </div>
          </div>
          <div className='col-12 col-lg-5'>
            <p className='past-work__lead'>
              From Punjab to Sindh — open a place to step into the camp, the
              faces, and the work that happened there.
            </p>
          </div>
        </div>

        <div className='past-work__grid'>
          {PLACES.map((place, index) => (
            <button
              key={place.id}
              type='button'
              className={`past-work__card past-work__card--${index + 1}`}
              onClick={() => openPlace(place)}
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={index * 80}
            >
              <span className='past-work__card-media'>
                <img src={place.cover} alt={place.name} />
              </span>
              <span className='past-work__card-shade' aria-hidden='true' />
              <span className='past-work__card-ring' aria-hidden='true' />
              <span className='past-work__card-count'>
                {place.images.length} photos
              </span>
              <span className='past-work__card-body'>
                <span className='past-work__card-region'>
                  <i className='fa-solid fa-location-dot' />
                  {place.region}
                </span>
                <strong>{place.name}</strong>
                <span className='past-work__card-cta'>
                  View gallery <i className='fa-solid fa-arrow-right' />
                </span>
              </span>
              <span className='past-work__card-lens' aria-hidden='true'>
                <i className='fa-solid fa-expand' />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activePlace && gallery.length > 0 && (
        <div
          className='special-gallery'
          role='dialog'
          aria-modal='true'
          aria-label={`${activePlace.name} photo gallery`}
        >
          <button
            type='button'
            className='special-gallery__backdrop'
            aria-label='Close gallery'
            onClick={() => setActivePlace(null)}
          />
          <div className='special-gallery__panel'>
            <div className='special-gallery__top'>
              <h3>{activePlace.name}</h3>
              <button
                type='button'
                className='special-gallery__close'
                aria-label='Close'
                onClick={() => setActivePlace(null)}
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
                    (prev) => (prev - 1 + gallery.length) % gallery.length
                  )
                }
              >
                <i className='fa-solid fa-chevron-left' />
              </button>
              <img
                src={gallery[activeIndex]}
                alt={`${activePlace.name} photo ${activeIndex + 1}`}
              />
              <button
                type='button'
                className='special-gallery__nav special-gallery__nav--next'
                aria-label='Next photo'
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % gallery.length)
                }
              >
                <i className='fa-solid fa-chevron-right' />
              </button>
            </div>

            <div className='special-gallery__thumbs past-work__thumbs'>
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type='button'
                  className={
                    index === activeIndex
                      ? "special-gallery__thumb is-active"
                      : "special-gallery__thumb"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={src}
                    alt={`${activePlace.name} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PastWorkOne;
