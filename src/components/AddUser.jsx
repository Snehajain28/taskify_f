import React from "react";
import ModalWrapper from "./ModalWrapper";
import Loading from "./Loader";
// import { useStateValues } from "../Utils/Provider";

const AddUser = ({ open, setOpen, userData }) => {
  // let defaultValues = userData ?? {};
  // const [{ user }, disptach] = useStateValues();

  const isLoading = false,
    isUpdating = false;


  const handleSubmit = () => { };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit}>
          <div  className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
          </div>
          <div className='mt-2 flex flex-col gap-6'>
           
          <div className='w-full flex flex-col gap-1'>
         <label className='text-slate-800'>
            {"Full Name"}
          </label>
        <div>
          <input
            type='text'
            name={'name'}
            placeholder='Full name'
            className="'w-full rounded' bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-1'>
         <label className='text-slate-800'>
            {"Title"}
          </label>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className="'w-full rounded' bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
          />
        </div>
      </div>


      <div className='w-full flex flex-col gap-1'>
         <label className='text-slate-800'>
            {"Email Address"}
          </label>
        <div>
          <input
             type='email'
             name='email'
            placeholder='Email Address'
            className="'w-full rounded' bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-1'>
         <label className='text-slate-800'>
            {"Role"}
          </label>
        <div>
          <input
             type='text'
             name='role'
             placeholder='Role'
            className="'w-full rounded' bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
          />
        </div>
      </div>
          </div>

          {isLoading || isUpdating ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
              <button className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
              > Submit</button> 
            
            <button  onClick={() => setOpen(false)}
              className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
              >Cancel</button> 
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;