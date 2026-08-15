import ComingSoonInner from "@/components/ComingSoonInner";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Al-Khadija Foundation Trust Pakistan",
  description: "Al-Khadija Foundation Trust Pakistan — care, dignity, and hope for those who need it most.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* ComingSoonInner */}
        <ComingSoonInner />
      </section>
    </AOSWrap>
  );
};

export default page;
