import { useEffect, useState } from "react";

function Slideshow({ images, alt }) {
  const [gallery, setGallery] = useState([]);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  useEffect(
    function () {
      (async function () {
        setGallery(images);
      })();
    },
    [images],
  );

  function slideshowPrevious() {
    const isFirstSlide = slideshowIndex == 0;
    const newSlide = isFirstSlide ? gallery.length - 1 : slideshowIndex - 1;
    setSlideshowIndex(newSlide);
  }

  function slideshowNext() {
    const isLastSlide = slideshowIndex == gallery.length - 1;
    const newSlide = isLastSlide ? 0 : slideshowIndex + 1;
    setSlideshowIndex(newSlide);
  }

  return (
    <>
      <div className="relative mx-auto mb-4 h-96 overflow-hidden rounded-3xl shadow-md xl:h-[600px] 2xl:h-[800px]">
        <div
          className="absolute left-6 top-1/2 z-20 cursor-pointer text-6xl text-white hover:scale-125 hover:text-blue-600 hover:transition-all active:transition-all active:duration-75 xl:left-12 xl:text-8xl"
          onClick={slideshowPrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="absolute right-6 top-1/2 z-20 cursor-pointer text-6xl text-white hover:scale-125 hover:text-blue-600 hover:transition-all active:duration-75 xl:right-12 xl:text-8xl"
          onClick={slideshowNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
          <img
            src={gallery?.[slideshowIndex]}
            alt={alt}
            className="zoom z-10 mx-auto h-full w-full shadow-lg"
          />
      </div>
    </>
  );
}
export default Slideshow;
