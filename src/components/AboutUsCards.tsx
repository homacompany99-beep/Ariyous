import { type FC } from 'react'
interface AboutUsCardsProps {
    imageSrc: string,
    title: string,
    subTitle: string
}

const AboutUsCards: FC<AboutUsCardsProps> = (AboutUsCardsProps) => {
    return (
        <div className='w-42.75 h-61.75 border-[#65471e81] border rounded-[33px] bg-[#F8F3EB] flex flex-col justify-center items-center gap-4'>
            <div className='bg-[#083027] rounded-full  w-20.5 h-20.5 flex justify-center items-center'>
                <img src={AboutUsCardsProps.imageSrc} className='h-[47px] w-auto'></img>
            </div>
            <p className='text-[#083027] text-center font-bold text-[26px]'>{AboutUsCardsProps.title}</p>
            <p className='text-[#083027] text-center px-2 text-[13px]'>{AboutUsCardsProps.subTitle}</p>
        </div>
    );
};

export default AboutUsCards;