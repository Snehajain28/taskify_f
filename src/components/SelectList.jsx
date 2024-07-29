import React, {  useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { MdCheck } from "react-icons/md";

const SelectList = ({ lists, selected, setSelected, label }) => {

  const [open, setOpen] = useState(false);


  return (
    <div className=''>
      {label && <p className='text-slate-900 dark:text-gray-500'>{label}</p>}

      <div >
        <div className='relative mt-1'>
          <div onClick={() => {
            setOpen(!open);
          }} className='relative w-[9.5rem] cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm'>
            <span className='block truncate'>{selected}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <BsChevronExpand onClick={() => {
                setOpen(!open)
              }}
                className='h-5 w-5 '
              />
            </span>
          </div>
          <div>
            {open &&
              <div onClick={() => {
                setOpen(!open);
              }}
                className='z-50 absolute border mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                {lists.map((list, index) => (
                  <div onClick={() => {
                    setSelected(list);
                  }} key={index}
                    className=" cursor-default select-none py-[2px] pl-10 pr-4 text-gray-900">
                    <>
                      <span
                        className={`block truncate ${selected === list ? "font-medium bg-amber-100" : "font-normal "
                          }`}
                      >
                        {list}
                      </span>
                      {selected === list ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <MdCheck className='h-5 w-5' />
                        </span>
                      ) : null}
                    </>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectList;