import { Link } from "wouter";

function Error404() {
  return (
    <>
      <div className="flex flex-col place-items-center">
        <div className="p-4">
          <img
            src="https://media0.giphy.com/media/SVCSsoKU5v6ZJLk07n/giphy.gif"
            alt="black hole"
            className="h-[500px] w-screen rounded shadow-xl"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="pb-4 text-2xl text-blue-600">
            Oh no... That's a black hole!
          </h2>
          <p className="text-xl">
            No one in their right mind would want to go in there!
          </p>
          <br />
          <p className="text-xl">Except Matthew McConaughey.</p>
          <p className="pb-6 text-xl">And... his camera man.</p>
        </div>
        <Link href="/">
          <button className="w-fit rounded border-2 border-blue-600 p-2 text-xl text-blue-600 hover:scale-105 hover:bg-blue-600 hover:text-white hover:transition-all">
            Send me back!
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error404;
