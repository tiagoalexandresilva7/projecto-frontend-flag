function Error404() {
  return (
    <>
      <div className="p-4">
        <h2 className="text-center text-2xl text-blue-600">
          Uh oh...
        </h2>
        <h2 className="pb-4 text-center text-2xl text-blue-600">
          That's a black hole!
        </h2>
        <p className="text-xl sm:text-center">
          I would turn around if I were you. No one in their right mind would
          want to go into a black hole and return.
        </p>
        <br />
        <p className="text-xl sm:text-center">Except Matthew McConaughey.</p>
        <p className="pb-6 text-xl sm:text-center">
          And more importantly... his camera man.
        </p>
      </div>
      <div className="p-4">
        <img
          src="https://media0.giphy.com/media/SVCSsoKU5v6ZJLk07n/giphy.gif"
          alt="black hole"
          className="mx-auto w-96 rounded-full shadow-2xl"
        />
      </div>
    </>
  );
}

export default Error404;
