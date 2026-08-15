"use client";
import { useState } from "react";

const FUND_NEEDS = [
  {
    title: "Operation Theatre & Lift",
    detail: "Theatres, ward floors & lift · Rs. 40 Million",
  },
  {
    title: "Pathology Lab Upgrade",
    detail: "PCR, Elisa & HbA1c — Rs. 3 Million",
  },
  {
    title: "Hepatitis Advisory Setup",
    detail: "Endoscope & Color Doppler — Rs. 2.5 Million",
  },
  {
    title: "Zero Prescription Fee",
    detail: "5,000 outdoor patients / month — Rs. 0.5 Million monthly",
  },
];

const IBAN = "PK82BAHL0065098101406501";
const IBAN_DISPLAY = "PK82 BAHL 0065 0981 0140 6501";

const DonationFutureOne = () => {
  const [copied, setCopied] = useState(false);

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id='donate'
      className='donation-future donation-future--appeal'
    >
      <div className='container'>
        <div className='row gutter-40 align-items-start'>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div className='donation-future__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Appeal | Donate
                </span>
                <h2 className='title-animation_inner'>
                  Support the care that <span>changes lives</span>
                </h2>
                <p className='appeal-lead'>
                  Al-Khadija Medical Centre serves a community living near the
                  poverty line — widows, orphans, and families who struggle even
                  for daily bread. We charge only a nominal{" "}
                  <strong>Rs. 40</strong> prescription fee (our cost is closer
                  to Rs. 100), and many already receive free care. Your donation
                  helps every part of this work — clinics, equipment, outreach,
                  and the patients who need us most.
                </p>
                <ul className='appeal-needs'>
                  {FUND_NEEDS.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <em>{item.detail}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='donation-future__thumb'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <h4>Operation Theatre &amp; Lift</h4>
              <p className='appeal-card-copy'>
                One of the projects we are actively working on — finishing
                theatres, ward floors, and a patient lift so surgical care can
                happen under one roof.
              </p>
              <div className='cause__progress progress-bar-single'>
                <div className='cause-progress__bar'>
                  <div className='progress-bar-wrapper' data-percent='28%'>
                    <div className='progress-bar'>
                      <div
                        className='progress-bar-percent'
                        style={{ width: "28%" }}
                      >
                        <span className='percent-value' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cause-progress__goal'>
                <p>
                  Status: <span className='raised'>In progress</span>
                </p>
                <p>
                  Goal: <span className='goal'>Rs. 40 Million</span>
                </p>
              </div>
              <hr />
              <ul className='appeal-card-points'>
                <li>
                  <i className='icon-health' /> Eye &amp; general surgery setup
                </li>
                <li>
                  <i className='icon-support-heart' /> Labor, sterilization &amp;
                  nursery rooms
                </li>
                <li>
                  <i className='icon-donation' /> Four-story patient lift
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className='appeal-bank'
          data-aos='fade-up'
          data-aos-duration={1000}
          data-aos-delay={100}
        >
          <div className='appeal-bank__badge'>
            <i className='fa-solid fa-building-columns' />
          </div>
          <div className='appeal-bank__copy'>
            <p className='appeal-bank__label'>Bank transfer · Pakistan</p>
            <p className='appeal-bank__title'>
              Al-Khadija Foundation Trust Pakistan
            </p>
            <div className='appeal-bank__iban-row'>
              <p className='appeal-bank__iban'>
                <span>IBAN</span>
                {IBAN_DISPLAY}
              </p>
              <button
                type='button'
                className='appeal-bank__copy-btn'
                onClick={copyIban}
                aria-label='Copy IBAN'
              >
                <i
                  className={
                    copied ? "fa-solid fa-check" : "fa-regular fa-copy"
                  }
                />
                {copied ? "Copied" : "Copy IBAN"}
              </button>
            </div>
            <p className='appeal-bank__meta'>
              Bank Al Habib Limited · Shadman Colony Branch, Lahore
              <br />
              Donations currently accepted from Pakistan only
            </p>
          </div>
        </div>
      </div>

      <div className='donation-bg' aria-hidden='true' />
    </section>
  );
};

export default DonationFutureOne;
