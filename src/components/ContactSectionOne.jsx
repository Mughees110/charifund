"use client";
import { useState } from "react";

const CONTACT_EMAIL = "info@alkhadija.com";
const MAP_LAT = 31.5371875;
const MAP_LNG = 74.2808594;
const PLACE_NAME = "Al-Khadija Medical Center";
const PLACE_ADDRESS =
  "G7PJ+V8H, Nagra / Khuda-Bukhsh Road, Shera Kot, Lahore 54000, Pakistan";
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&hl=en&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`;

const ContactSectionOne = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this; humans don't
    if (data.get("_honey")) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone") || "Not provided",
            message: data.get("message"),
            _subject: "New message from Al-Khadija website",
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(
          result.message || "Unable to send your message right now."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error?.message ||
          "Something went wrong. Please email us directly at info@alkhadija.com."
      );
    }
  };

  return (
    <section id='contact' className='contact-main volunteer contact-section'>
      <div className='container'>
        <div className='row gutter-40 align-items-stretch'>
          <div className='col-12 col-xl-5'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>
                  We are here to <span>listen</span>
                </h2>
                <p>
                  Questions about care, volunteering, or supporting Al-Khadija —
                  reach out. We will get back to you with care and clarity.
                </p>
              </div>

              <div
                className='contact-main__inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:04237415120'>042-37415120</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:info@alkhadija.com'>info@alkhadija.com</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>{PLACE_NAME}</h6>
                    <p>
                      <a
                        href={MAP_LINK}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {PLACE_ADDRESS}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-xl-7'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Send a Message</h4>
                <p>
                  Share your name and message. Required fields are marked *
                </p>
              </div>
              <form onSubmit={handleSubmit} className='cta'>
                <input
                  type='text'
                  name='_honey'
                  tabIndex={-1}
                  autoComplete='off'
                  className='contact-honey'
                  aria-hidden='true'
                />

                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='name'
                      id='contactFullName'
                      placeholder='Your Name *'
                      required
                      disabled={status === "loading"}
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='email'
                      name='email'
                      id='contactEmailHome'
                      placeholder='Your Email *'
                      required
                      disabled={status === "loading"}
                    />
                    <i className='fa-solid fa-envelope' />
                  </div>
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='phone'
                    id='contactPhoneHome'
                    placeholder='Phone Number'
                    disabled={status === "loading"}
                  />
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='message'
                    id='contactMessageHome'
                    placeholder='Your Message *'
                    required
                    disabled={status === "loading"}
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>

                {status === "success" && (
                  <p className='contact-form-note contact-form-note--success'>
                    Thank you. Your message has been sent. Please also check{" "}
                    <strong>info@alkhadija.com</strong> once for an activation
                    email if this is the first submission — click confirm, then
                    messages will arrive normally.
                  </p>
                )}

                {status === "error" && (
                  <p className='contact-form-note contact-form-note--error'>
                    {errorMessage}
                  </p>
                )}

                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='Send message'
                    title='Send message'
                    className='btn--primary'
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <i className='fa-solid fa-arrow-right' />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className='contact-map'
          data-aos='fade-up'
          data-aos-duration={1000}
          data-aos-delay={150}
        >
          <div className='contact-map__frame'>
            <iframe
              title={`${PLACE_NAME} location map`}
              src={MAP_EMBED}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
            />
            <a
              className='contact-map__expand'
              href={MAP_LINK}
              target='_blank'
              rel='noopener noreferrer'
            >
              Expand <i className='fa-solid fa-up-right-and-down-left-from-center' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionOne;
