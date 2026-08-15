import BannerOne from "@/components/BannerOne";
import ContactSectionOne from "@/components/ContactSectionOne";
import CounterTwo from "@/components/CounterTwo";
import DifferenceOne from "@/components/DifferenceOne";
import DonationFutureOne from "@/components/DonationFutureOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import GalleryTwo from "@/components/GalleryTwo";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import HelpTwo from "@/components/HelpTwo";
import PastWorkOne from "@/components/PastWorkOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Al-Khadija Foundation Trust Pakistan",
  description:
    "Al-Khadija Foundation Trust Pakistan — care, dignity, and hope for those who need it most.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />

        {/* Section 1 — Hero */}
        <BannerOne />

        {/* Section 2 — Impact */}
        <CounterTwo />

        {/* Section 3 — About / Mission */}
        <HelpOne />

        {/* Section 4 — Journey */}
        <GalleryOne />

        {/* Section 5 — Documentaries */}
        <GalleryTwo />

        {/* Section 6 — Facilities */}
        <DifferenceOne />

        {/* Section 7 — Special Work */}
        <HelpTwo />

        {/* Section 8 — Past Work */}
        <PastWorkOne />

        {/* Section 9 — Appeal / Donate */}
        <DonationFutureOne />

        {/* Section 10 — Contact */}
        <ContactSectionOne />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
