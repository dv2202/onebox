import React from 'react';
import { MdRefresh } from "react-icons/md";
import status from '../assets/emailinbox.svg'
const ShowEmails = ({ data, onEmailClick }) => {
  return (
    <div className="w-[278px] p-4 flex flex-col items-center gap-[8px]">
      <div className='flex flex-row justify-between h-[64px] items-center w-full'>
        <div className='w-[160px] h-[47px] p-[10px] text-[#4285F4] text-[20px] leading-[27.24px] font-bold'>
           All Inbox(s)
        </div>
        <div className='w-[32px] h-[32px] rounded-md bg-[#25262B] p-2'><MdRefresh className='text-white'/></div>
      </div>
      <div className="w-[278px] flex items-center flex-col">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[255px] h-auto px-[12px] py-[8px] gap-[8px] flex flex-col border-t-[1px] border-[#FFFFFF]  cursor-pointer"
            onClick={() => onEmailClick(item)}
          >
           <div className='flex flex-col gap-[2px] w-full'>
            <div className='flex flex-row justify-between items-center'>
                <p className="text-[14px] font-medium leading-5">{item.fromEmail}</p>
                <p className='font-normal text-[12px] leading-[18px] text-[#FCFCFC]'> {new Date(item.sentAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
            </div>
            <p className="text-[12px] text-[#E1E0E0] font-normal">{item.subject.slice(0, 20)}</p>
           </div>
           <img src={status} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowEmails;
