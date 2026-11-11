import { type FC } from 'react'
import type { serviceCardProps } from '../Type'

const ServiceCard: FC<serviceCardProps> = (serviceCardProps) => {
  return (
    <div className='w-88 h-auto mb-20 flex flex-col justify-start'>
      <img src={serviceCardProps.cardImagSrc} className='w-full' />
      <h3 className='font-bold text-[22px] mt-5 text-[#083027] text-right'>{serviceCardProps.faTitle}</h3>
      <h3 className='text-[#083027] mt-3 text-right text-[14px] font-bold'>{serviceCardProps.enTitle}</h3>
      <p className='text-[#083027] mt-6 text-justify text-[20px]'>{serviceCardProps.description}</p>
    </div>
  );
};

export default ServiceCard;