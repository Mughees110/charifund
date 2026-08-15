"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const documentaries = [
  {
    id: "FVKm50ELAIg",
    title: "Al-Khadija: A Story of Care",
    subtitle:
      "Filmed in 2013 — capturing the heart of our journey of service, and the lives touched by care.",
    thumb: "/thumbnail1.png",
    year: "2013",
  },
];

const GalleryTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(documentaries[0].id);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
    setIsOpen(true);
  };

  return (
    <>
      <section
        id='documentaries'
        className='ff-gallery gallery-docs pt-120 pb-120'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>Our Documentary</span>
                <h2 className='title-animation_inner mt-0 fw-6'>
                  Real stories of pain, prayer, and{" "}
                  <span>healing</span>
                </h2>
                <p>
                  In 2013, we shared this film — a window into the lives we
                  serve, and the hope that keeps this work alive.
                </p>
              </div>
            </div>
          </div>

          <div className='row gutter-24 justify-content-center'>
            {documentaries.map((doc) => (
              <div className='col-12 col-md-10 col-lg-8 col-xl-6' key={doc.id}>
                <article
                  className='doc-card'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <button
                    type='button'
                    className='doc-card__media'
                    onClick={() => openVideo(doc.id)}
                    aria-label={`Watch ${doc.title}`}
                  >
                    <img src={doc.thumb} alt={doc.title} />
                    <span className='doc-card__overlay' aria-hidden='true' />
                    <span className='doc-card__play' aria-hidden='true'>
                      <i className='fa-solid fa-play' />
                    </span>
                    <span className='doc-card__duration'>{doc.year}</span>
                    <span className='doc-card__watch'>Watch film</span>
                  </button>
                  <div className='doc-card__content'>
                    <span className='doc-card__tag'>Documentary · {doc.year}</span>
                    <h5>{doc.title}</h5>
                    <p>{doc.subtitle}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId={activeVideo}
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default GalleryTwo;
