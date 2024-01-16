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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideshowIndex(slideshowIndex + 1);
      if (slideshowIndex == gallery.length - 1) {
        setSlideshowIndex(0);
      }
    }, 7500);
    return () => clearInterval(interval);
  }, [slideshowIndex]);

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
      <div className="relative mb-4 h-96 overflow-hidden rounded-3xl shadow-md xl:h-[600px] 2xl:h-[800px] text-textcolor">
        <button
          className="absolute left-6 top-1/2 z-20 cursor-pointer text-6xl transition hover:scale-125 hover:text-accent hover:ease-out xl:left-12 xl:text-8xl"
          onClick={slideshowPrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="absolute right-6 top-1/2 z-20 cursor-pointer text-6xl transition hover:scale-125 hover:text-accent hover:ease-out xl:right-12 xl:text-8xl"
          onClick={slideshowNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <img
          src={gallery?.[slideshowIndex]}
          alt={alt}
          className="zoom z-10 h-full w-full shadow-lg"
        />
      </div>
    </>
  );
}
export default Slideshow;
