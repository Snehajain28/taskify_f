import ModalWrapper from "../ModalWrapper";

const AddSubTask = ({ open, setOpen, id }) => {

    // const [addSbTask] = useCreateSubTaskMutation();

    const handleOnSubmit = async (data) => {
        // try {
        //   const res = await addSbTask({ data, id }).unwrap();
        //   toast.success(res.message);
        //   setTimeout(() => {
        //     setOpen(false);
        //   }, 500);
        // } catch (err) {
        //   console.log(err);
        //   toast.error(err?.data?.message || err.error);
        // }
    };

    return (
        <>
            <ModalWrapper open={open} setOpen={setOpen}>
                <form onSubmit={handleOnSubmit} className=''>
                    <div className='text-base font-bold leading-6 text-gray-900 mb-4'
                    >
                        ADD SUB-TASK
                    </div>
                    <div className='mt-2 flex flex-col gap-6'>
                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-slate-800'>
                                Title
                            </label>
                            <div>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Sub-Task title'
                                    className="bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                                />
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-slate-800'>
                                Task Date
                            </label>
                            <div>
                                <input
                                    placeholder='Date'
                                    type='date'
                                    name='date'
                                    className="bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                                />
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>

                            <div className='w-full flex flex-col gap-1'>
                                <label className='text-slate-800'>
                                    Tag
                                </label>
                                <div>
                                    <input
                                        placeholder='Tag'
                                        type='text'
                                        name='tag'
                                        className="bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 mt-4 flex sm:flex-row-reverse gap-4'>
                        <button
                            className="px-3 py-2 outline-none bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-aut"

                        >
                            <span>Add Task</span>
                        </button>

                        <button
                            className="px-3 py-2 outline-none bg-white border text-sm font-semibold text-gray-900 sm:w-auto"
                            onClick={() => setOpen(false)}
                        >
                            <span>Cancel</span>
                        </button>
                    </div>
                </form>
            </ModalWrapper >
        </>
    );
};

export default AddSubTask;