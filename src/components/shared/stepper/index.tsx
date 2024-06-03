// import Image from "next/image";
// import React from "react";

// interface Step {
//   number?: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface StepperProps {
//   steps: Step[];
// }

// const Stepper: React.FC<StepperProps> = ({ steps }) => {
//   return (
//     <div className="w-full flex justify-center">
//       <ul className="relative flex flex-col md:flex-row gap-2">
//         {steps.map((step, index) => (
//           <li
//             key={index}
//             className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block"
//           >
//             <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
//               {step.number !== undefined && (
//                 <>
//                   <span
//                     style={{ boxShadow: "0px 1px 4px 0px #0000001F" }}
//                     className="w-[59px] h-[59px] flex justify-center items-center text-[25px] text-[#864AFF] flex-shrink-0 font-bold rounded-full dark:bg-neutral-700 dark:text-white"
//                   >
//                     {step.number}
//                   </span>
//                   {index < steps.length - 1 && (
//                     <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-[#EDEDED] group-last:hidden dark:bg-neutral-700"></div>
//                   )}
//                 </>
//               )}
//             </div>
//             <div className="grow md:grow-0 md:mt-3 pb-5 flex flex-col items-center">
//               <span className="block text-sm font-medium text-gray-800 dark:text-white">
//                 {step.title}
//               </span>
//               {index !== 0 && (
//                 <div className="relative w-full max-w-md h-48 mt-2">
//                   <Image
//                     src={step.image}
//                     alt={step.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded"
//                   />
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Stepper;

import React from "react";
import Image from "next/image";

export interface Step {
  number?: number;
  title: string;
  description: string;
  image?: string;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className="w-full hidden xl:flex justify-center">
      <ul className="relative flex flex-col md:flex-row gap-2 w-full">
        {steps.map((step, index) => (
          <li
            key={index}
            className="md:shrink w-full group flex gap-x-2 md:block"
          >
            {step.number !== undefined && (
              <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                <span
                  style={{ boxShadow: "0px 1px 4px 0px #0000001F" }}
                  className="w-[59px] h-[59px] flex justify-center items-center text-[25px] text-[#864AFF] flex-shrink-0 font-bold rounded-full dark:bg-neutral-700 dark:text-white"
                >
                  {step.number}
                </span>
                {index !== 4 && (
                  <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-[#EDEDED] group-last:hidden dark:bg-neutral-700"></div>
                )}
              </div>
            )}
            {index !== 0 && index !== 5 && (
              <div className="grow md:grow-0 md:mt-3 pb-5 flex flex-col items-start">
                <span className="block text-sm text-[18px] font-bold dark:text-white">
                  {step.title}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
