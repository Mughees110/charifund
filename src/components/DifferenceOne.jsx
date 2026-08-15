import Link from "next/link";

const facilities = [
  {
    title: "Outdoor / OPD",
    text: "Quality care since January 2000 — about 200 patients a day, with MBBS doctors for those who need it most.",
    icon: "icon-health",
    accent: "#ff5528",
    image: "/facilities/outdoor.jpg",
  },
  {
    title: "Dental Care",
    text: "Sterilized B-Class Autoclave setup with a dedicated BDS doctor for safe, dignified dental treatment.",
    icon: "icon-support-hand",
    accent: "#122f2a",
    image: "/facilities/dental.jpg",
  },
  {
    title: "Visiting Consultants",
    text: "Weekly Eye Surgeon and Dermatologist visits — specialist care brought closer to our community.",
    icon: "icon-review",
    accent: "#ffc107",
    image: "/facilities/visiting.jpg",
  },
  {
    title: "Pathology Lab",
    text: "Since 2007 — basic tests at 50% discount, free for deserving widows and orphans, free sugar tests every Thursday.",
    icon: "icon-documents",
    accent: "#046a58",
    image: "/facilities/pathology.jpg",
  },
  {
    title: "Ambulance",
    text: "Emergency pick & drop for patients who cannot afford private ambulances — plus first aid in times of need.",
    icon: "icon-spread-love",
    accent: "#00715d",
    image: "/facilities/ambulance.jpg",
  },
];

const DecorativeRing = ({ color }) => (
  <svg
    className='facility-circle__ring'
    viewBox='0 0 200 200'
    aria-hidden='true'
  >
    <circle
      cx='100'
      cy='100'
      r='94'
      fill='none'
      stroke={color}
      strokeWidth='5'
      strokeLinecap='round'
      strokeDasharray='48 14 8 14 28 16 10 18'
    />
    <circle
      cx='100'
      cy='100'
      r='94'
      fill='none'
      stroke={color}
      strokeWidth='4'
      strokeLinecap='round'
      strokeDasharray='0 70 0 95 0 120'
      opacity='0.95'
    />
  </svg>
);

const DifferenceOne = () => {
  return (
    <section id='facilities' className='difference difference--facilities'>
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
                Our Facilities
              </span>
              <h2 className='title-animation_inner'>
                Care under one roof — for every{" "}
                <span>life</span> that walks in
              </h2>
              <p>
                From outdoor clinics to ambulance support, Al-Khadija serves the
                poverty-stricken with dignity, skill, and compassion.
              </p>
            </div>
          </div>
        </div>

        <div className='difference__inner'>
          <div className='row justify-content-center gutter-30'>
            {facilities.map((item, index) => (
              <div
                className='col-12 col-sm-6 col-xl-4'
                key={item.title}
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 100}
              >
                <article className='facility-item'>
                  <div className='facility-circle'>
                    <div className='facility-circle__photo'>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <DecorativeRing color={item.accent} />
                    <span
                      className='facility-circle__badge'
                      style={{ backgroundColor: item.accent }}
                      aria-hidden='true'
                    >
                      <i className={item.icon} />
                    </span>
                  </div>
                  <div className='facility-item__body'>
                    <h5>
                      <Link href='/contact-us'>{item.title}</Link>
                    </h5>
                    <p>{item.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className='shape-hand'
        data-aos='fade-right'
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src='/assets/images/difference/shape-hand.png'
          alt='Image_inner'
        />
      </div>
    </section>
  );
};

export default DifferenceOne;
