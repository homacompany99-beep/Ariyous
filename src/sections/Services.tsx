import { type FC } from 'react'
import Section from '../components/Section';
import { servicesStrings } from '../strings/sevices.config';
import ServiceCard from '../components/ServiceCard';
const Services: FC = () => {
  return (
    <Section
      variant="primary"
      contentClassName="px-[8rem] pt-17 pb-50 services"
      wave={{
        enabled: true,
        direction: "deep",
        backgroundColor: "#F4F0E8",
        fillColor: "#083027",
        height: 150,
      }}>
      <h2 className='text-[#CCAB6D] text-center font-bold text-[3.4rem]'>خدمات آریوس</h2>
      <div className='mt-10 mb-20'>
        <p className='text-center  text-[30px] font-bold text-[#083027]'>راهکارهای هوشمند برای آینده ای بهتر</p>
        <p className='text-center font-bold text-[30px] text-[#083027] mt-6'>آریوس با بهره گیری از فناوری هلی پیشرفته و تیمی متخصص</p>
        <p className='text-center font-bold text-[30px] text-[#083027] mt-6'>راهکارهایی نوآورانه و متناسب با نیاز شما ارایه می دهد</p>
      </div>
      <div className="flex justify-between flex-wrap gap-8 ">
        {servicesStrings.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>

    </Section>
  );
};

export default Services;