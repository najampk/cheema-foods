import Image from 'next/image';
import Link from 'next/link';



const operations = [
  {
    title: "Design Brief",
    des: ["Understaing the client's requirements", "Outlining core details of the project"],
    icon: "test",
  },
  {
    title: "On Boarding",
    des: ["Engagement with client", "Singing of the contract"],
    icon: "test",
  },
  {
    title: "Proposal",
    des: ["Initial Drawings", "Space Planning"],
    icon: "test",
  },
  {
    title: "Budgeting",
    des: ["Final Design Proposal in 3D Visualisztion", "Costing Options"],
    icon: "test",
  },
  {
    title: "Selection & Implementation",
    des: ["Meterials Procurement", "Engagement of contract(s)"],
    icon: "test",
  },
  {
    title: "Handling Over",
    des: ["Handling over finished space ready to inhabited"],
    icon: "test",
  },

]
export default function Operate({ children, home }) {
  return (
    <>
      <div className='container mx-auto px-5'>
        <h2 className='head-one'>How We Operate</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-0 gap-x-5'>

          {operations.map((operate, index) => {
            return (
              <div key={"operate_" + index} className='relative h-auto pb-10 group   w-full after:hover:border-[--toupe] after:duration-300 after:transition   after:left-4 after:top-4 after:right-4 after:bottom-4  after:border after:z-10 after:absolute'> <div className='absolute text-slate-50 right-0 w-10 h-10 flex justify-center items-center border shadow-lg text-xl z-30 bg-[--toupe]'>{index+1}</div>
                <h2 className='w-auto group-hover:pl-12 pr-10 box-border transition-all p-2 pl-8 bg-[--bblack] text-slate-200 absolute top-10 text-xl font-medium z-20 duration-300 group-hover:text-[--toupe]'>{operate.title}</h2>
                <Image
                  src={"/images/" + operate.icon + ".png"}
                  width="200"
                  height="200"
                  alt={operate.title}
                  className='  h-20 w-20 mt-28 mx-auto drop-shadow-[-2px_2px_2px_rgba(0,0,0,1)]'
                />
                <ul className='text-slate-50 relative mt-8 pl-8 z-20 list-inside list-square text-[--toupe] '>

                  {operate.des.map((item, index) => {
                    return (<li key={"item_" + index} className='hover:translate-x-2 list-[square]  duration-150 transition-all'>{item}</li>)
                  })}

                </ul>
              </div>

            )
          })}

        </div>
      </div>
    </>
  );
}