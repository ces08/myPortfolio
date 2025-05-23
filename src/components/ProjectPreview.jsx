//  import React, { useState } from 'react';

//  export default function ProjectPreview(){
// const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = (e) => {
//     e.stopPropagation();
//     setIsOpen(false);
//   };
//  return(
//     <div>
//       <img
//         src="./src/assets/id_card.png"
//         alt="ID Card"
//         onClick={openModal}
//         className="cursor-pointer max-w-xs hover:scale-105 transition-transform"
//       />

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 p-6 rounded-xl overflow-y-auto relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
//             >
//               &times;
//             </button>

//             <h2 className="text-2xl font-bold mb-4">About Me</h2>
//             <p className="text-base leading-relaxed">
//               I'm a third-year student at SUNY Stony Brook University studying Computer Science and Applied Mathematics & Statistics.
//               <br /><br />
//               I love transforming rough sketches and concepts into functional products, animating ideas into enjoyable experiences...
//               <br /><br />
//               When I'm not coding, I'm doodling, watching anime, reading, or journaling. I speak English and Korean, and I'm working on my Spanish!
//               <br /><br />
//               (Repeat or add more content to demonstrate scroll)
//               <br /><br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//               <br /><br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//               <br /><br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//               <br /><br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//               <br /><br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
//               <br /><br />
//               (etc.)
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
//  }
 
