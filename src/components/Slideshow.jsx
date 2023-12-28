import { useEffect, useState } from "react";
import data from "./apiobjs/gallery.json";

function Slideshow({ images, alt }) {
  const [gallery, setGallery] = useState([]);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  useEffect(
    function () {
      (async function () {
        /* const url = "";
      const response = await fetch(url);
      const result = await response.json();
      console.log(response) */
        setGallery(images);
      })();
    },
    [images],
  );

  function slideshowPrevious() {
    const isFirstSlide = slideshowIndex === 0;
    const newSlide = isFirstSlide ? gallery.length - 1 : slideshowIndex - 1;
    setSlideshowIndex(newSlide);
  }

  function slideshowNext() {
    const isLastSlide = slideshowIndex === gallery.length - 1;
    const newSlide = isLastSlide ? 0 : slideshowIndex + 1;
    setSlideshowIndex(newSlide);
  }

  return (
    <>
      <div className="relative mx-auto mb-4">
        <div
          className="absolute left-3 top-1/2 cursor-pointer p-4 text-4xl text-white hover:scale-125 hover:transition-all active:text-blue-600 active:transition-all active:duration-75 md:text-6xl lg:left-6 lg:p-8 lg:text-8xl"
          onClick={slideshowPrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="absolute right-3 top-1/2 cursor-pointer p-4 text-4xl text-white hover:scale-125 hover:transition-all active:text-blue-600 active:duration-75 md:text-6xl lg:right-6 lg:p-8 lg:text-8xl"
          onClick={slideshowNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <img
          src={gallery?.[slideshowIndex]}
          alt={alt}
          className="mx-auto rounded-3xl shadow-lg "
        />
      </div>
      {/* <div className="relative mx-auto mb-4">
        <div
          className="absolute left-3 top-1/2 cursor-pointer p-4 text-4xl text-white md:text-6xl lg:left-6 lg:p-8 lg:text-8xl"
          onClick={slideshowPrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="absolute right-3 top-1/2 cursor-pointer p-4 text-4xl text-white md:text-6xl lg:right-6 lg:p-8 lg:text-8xl"
          onClick={slideshowNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <img
          src={gallery?.[slideshowIndex]}
          alt={alt}
          className="mx-auto rounded-3xl shadow-lg"
        />
      </div> */}
    </>
  );
}
export default Slideshow;
