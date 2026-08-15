"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { id: "impact", label: "Impact" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "documentaries", label: "Documentaries" },
  { id: "facilities", label: "Facilities" },
  { id: "special-work", label: "Special Work" },
  { id: "past-work", label: "Past Work" },
  { id: "contact", label: "Contact" },
];

const HeaderOne = () => {
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setMobileMenu(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);

      mobileMenuListRef.current
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const id = anchor.getAttribute("href")?.replace("#", "");
            if (!id) return;
            setMobileMenu(false);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
    }
  }, []);

  return (
    <>
      <header
        className={`header header-secondary ${scroll && "sticky-header"}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img src='/logo.png' alt='Al-Khadija' />
                      <span className='navbar-brand__name d-xl-none'>
                        Al-Khadija Foundation Trust
                        <em>Pakistan · Est. 2000</em>
                      </span>
                    </Link>
                  </div>
                  <div className='navbar__menu-wrapper'>
                    <div className='navbar__menu d-none d-xl-block'>
                      <ul className='navbar__list'>
                        {NAV_LINKS.map((item) => (
                          <li className='navbar__item nav-fade' key={item.id}>
                            <a
                              href={`#${item.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='contact-btn'>
                      <div className='contact-icon'>
                        <i className='icon-support' />
                      </div>
                      <div className='contact-content'>
                        <p>Call Us Now</p>
                        <a href='tel:04237415120'>042-37415120</a>
                      </div>
                    </div>
                  </div>
                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <a
                        href='#donate'
                        className='btn--primary d-none d-md-flex'
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection("donate");
                        }}
                      >
                        Donate Now <i className='fa-solid fa-arrow-right' />
                      </a>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <img src='/logo.png' alt='Al-Khadija' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            <a
              href='#donate'
              className='btn--primary '
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("donate");
              }}
            >
              Donate Now <i className='fa-solid fa-arrow-right' />
            </a>
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href='https://vimeo.com/'
              target='_blank'
              aria-label='share us on vimeo'
              title='vimeo'
            >
              <i className='fa-brands fa-vimeo-v' />
            </Link>
            <Link
              href='https://x.com/'
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-twitter' />
            </Link>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderOne;
