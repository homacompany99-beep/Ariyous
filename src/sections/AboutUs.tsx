import { type FC } from 'react'
import Section from '../components/Section';
import AboutUsCards from '../components/AboutUsCards';
import { aboutCartStrings } from '../strings/about.config';
import arrowAbout from "../assets/aboutArrow.png";
import logo from "../assets/logo.png";
import border from "../assets/border.png"
const AboutUs: FC = () => {
    return (
        <Section
            contentClassName='py-56 pr-[8rem]'
            variant='primary'
            wave={{
                enabled: true,
                direction: "deep",
                backgroundColor: "#F4F0E8",
                fillColor: "#06382E",
                height: 150,
            }}
        >
            <div className='flex flex-wrap justify-between w-full'>
                <div className="right flex flex-col flex-center justify-center items-center gap-[4rem] pr-8">
                    <h3 className='font-bold text-[52px]'>ما کیستیم؟</h3>
                    <img src={arrowAbout} className='w-[151.8px] h-[25px]' />
                    <h2 className='text-[30px] font-normal text-[#083027]'>شرکت‌ همکاران‌ مبتکر‌آریا،‌همراهی‌ برای‌ خلق‌آینده‌ای‌ دیجیتال</h2>
                    <p className='text-[28px] text-[#083027] font-normal text-justify h-auto w-[715px]'>آریوس‌‌ یک‌ تیم‌ خلاق‌ و‌ متخصص‌ در‌ زمینه‌ طراحی‌ و‌ توسعه‌ وب‌ سایت
                        و‌ راهکارهای‌ دیجیتال‌است.‌تمرکز‌ ما‌ بر‌ ارائه‌ راه‌ حل‌ های‌ نو آورانه
                        با‌کیفیت‌ و‌ متناسب‌ با‌ نیاز‌ کسب‌ و کارهاست‌ . تا‌تجربه‌ای‌ متمایز
                        .و‌اثربخش‌ در‌ دنیای‌ دیجیتال‌ایجاد‌ کنیم</p>
                    <div className='flex justify-center items-center mt-[2rem] gap-[6rem]'>
                        {aboutCartStrings.map((item, index) => (
                            <AboutUsCards key={index} {...item} />
                        ))}
                    </div>

                </div>
                <div className='left'>

                    <div className='bg-[#F4EEE8] border-[1.8px] border-[#E8D7BB] w-[815.78px] h-[978.41px] rounded-tr-[234px] rounded-br-[234px] flex justify-center items-center relative'>
                        <div>
                            <img src={border} alt="" className='w-[769px] h-[1065.4px] absolute top-[-47px] left-[15%]' />
                        </div>
                        <img src={logo} className='w-[734px]' />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;