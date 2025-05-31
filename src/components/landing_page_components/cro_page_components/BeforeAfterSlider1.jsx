// 'use client';

// import { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './beforeAfter.css';

// const sliderData = [
//   {
//     before: '/images/cro_page_images/pr01-after.jpg',
//     after: '/images/cro_page_images/pr01-beofore.jpg',
//   },
//   {
//     before: '/images/cro_page_images/pr02-after.jpg',
//     after: '/images/cro_page_images/pr02-before.jpg',
//   },
//   {
//     before: '/images/cro_page_images/pr02-after.jpg',
//     after: '/images/cro_page_images/pr02-before.jpg',
//   },
// ];

// export default function BeforeAfterSlider() {
//   useEffect(() => {
//     const wrappers = document.querySelectorAll('.ba-wrapper');

//     wrappers.forEach((wrapper) => {
//       const overlay = wrapper.querySelector('.ba-overlay');
//       const handle = wrapper.querySelector('.ba-handle');

//       function updateSlider(x) {
//         const bounds = wrapper.getBoundingClientRect();
//         let pos = ((x - bounds.left) / bounds.width) * 100;
//         pos = Math.max(0, Math.min(100, pos));
//         overlay.style.width = `${pos}%`;
//         handle.style.left = `${pos}%`;
//       }

//       const start = (e) => {
//         e.preventDefault();
//         const move = (ev) => updateSlider(ev.clientX || ev.touches[0].clientX);
//         const stop = () => {
//           window.removeEventListener('mousemove', move);
//           window.removeEventListener('mouseup', stop);
//           window.removeEventListener('touchmove', move);
//           window.removeEventListener('touchend', stop);
//         };
//         window.addEventListener('mousemove', move);
//         window.addEventListener('mouseup', stop);
//         window.addEventListener('touchmove', move);
//         window.addEventListener('touchend', stop);
//       };

//       handle.addEventListener('mousedown', start);
//       handle.addEventListener('touchstart', start);
//     });
//   }, []);

//   return (
//     <div className="before-after-slider">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={40}
//         pagination={{ clickable: true }}
//         loop
//         modules={[Pagination]}
//       >
//         {sliderData.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="ba-wrapper">
//               <img src={slide.after} alt="After" className="ba-img" />
//               <div className="ba-overlay">
//                 <img src={slide.before} alt="Before" className="ba-img" />
//               </div>
//               <div className="ba-handle"><span>⇔</span></div>
//               <div className="ba-label before-label">BEFORE</div>
//               <div className="ba-label after-label">AFTER</div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
