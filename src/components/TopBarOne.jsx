"use client";
import { useEffect, useRef } from "react";
import NiceSelect from "nice-select2";
import "nice-select2/dist/css/nice-select2.css";

const TopBarOne = () => {
  const currencyRef_one = useRef(null);
  const countryRef_one = useRef(null);

  useEffect(() => {
    let currencySelect = null;
    let countrySelect = null;
    let updateDisplayHandler = null;
    let timer = null;

    // Initialize NiceSelect after component mounts
    if (currencyRef_one.current) {
      currencySelect = new NiceSelect(currencyRef_one.current, {
        searchable: false,
      });
    }
    if (countryRef_one.current) {
      countrySelect = new NiceSelect(countryRef_one.current, {
        searchable: false,
      });
      
      // Fix HTML rendering in data-display - update after initialization
      timer = setTimeout(() => {
        const selectElement = countryRef_one.current;
        if (selectElement) {
          const niceSelectWrapper = selectElement.closest('.nice-select');
          if (niceSelectWrapper) {
            const currentSpan = niceSelectWrapper.querySelector('.current');
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            if (currentSpan && selectedOption) {
              const displayHtml = selectedOption.getAttribute('data-display');
              if (displayHtml) {
                currentSpan.innerHTML = displayHtml;
              }
            }
            
            // Also update on change
            updateDisplayHandler = () => {
              const selectedOption = selectElement.options[selectElement.selectedIndex];
              if (currentSpan && selectedOption) {
                const displayHtml = selectedOption.getAttribute('data-display');
                if (displayHtml) {
                  currentSpan.innerHTML = displayHtml;
                }
              }
            };
            
            selectElement.addEventListener('change', updateDisplayHandler);
          }
        }
      }, 100);
    }

    return () => {
      // Cleanup on unmount
      if (timer) {
        clearTimeout(timer);
      }
      if (currencySelect && typeof currencySelect.destroy === "function") {
        try {
          currencySelect.destroy();
        } catch (error) {
          console.error("Error destroying currency select:", error);
        }
      }
      if (countrySelect && typeof countrySelect.destroy === "function") {
        try {
          countrySelect.destroy();
        } catch (error) {
          console.error("Error destroying country select:", error);
        }
      }
      if (updateDisplayHandler && countryRef_one.current) {
        countryRef_one.current.removeEventListener('change', updateDisplayHandler);
      }
    };
  }, []);

  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href="mailto:support@example.com">
                          <i className="fa-regular fa-envelope"></i>
                          support@example.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:2305-587-3407">
                          <i className="fa-solid fa-phone"></i>
                          +2(305) 587-3407
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    <p>
                      <i className="icon-heart-hand"></i> Are you ready to help
                      them? Let's become a volunteer!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                   
                    <div className="social">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://vimeo.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="vimeo"
                      >
                        <i className="fa-brands fa-vimeo-v"></i>
                      </a>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarOne;
