
export default function Tabs({ tabs, selected, setSelected, children }) {

  return (
    <div className='w-full px-1 sm:px-0'>
      <div>
        <div className='flex justify-between space-x-6 rounded-xl p-1'>
          {tabs.map((tab, index) => (
            <div key={tab.title}
              onClick={() => setSelected(index)}
              className={`w-fit flex items-center outline-none gap-2 px-3 py-2.5 text-base font-medium leading-5 bg-white
                 ${selected === index ? "text-blue-700  border-b-2 border-blue-600"
                  : "text-gray-800  hover:text-blue-800"
                } `}>
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
        </div>
        <div className='w-full mt-2'>{children}</div>
      </div>
    </div>
  );
}