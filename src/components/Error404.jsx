import { Link } from "wouter";

function Error404() {
  return (
    <>
      <section className="container mx-auto flex flex-col place-items-center lg:flex-row">
        <div className="p-4">
          <img
            src="https://media0.giphy.com/media/SVCSsoKU5v6ZJLk07n/giphy.gif"
            alt="an animated black hole"
            className="h-[500px] w-full rounded shadow-xl"
          />
        </div>
        <div className="flex flex-col p-4 text-center">
          <h2 className="pb-4 text-2xl text-accent">
            Uh-oh! It seems you've stumbled into a cosmic void.
          </h2>
          <p className="pb-4 text-xl text-textcolor">
            The page you're searching for has been swallowed by a black hole.
          </p>
          <p className="pb-4 text-xl text-textcolor">
            But don't worry, I'll help you escape this gravitational pull.
          </p>
          <p className="pb-4 text-xl text-textcolor">
            Navigate safely, space traveler, and remember: not all who wander
            are lost — even in space!
          </p>
          <Link href="/">
            <button className="mx-auto w-fit rounded border-2 border-accent p-2 text-xl text-accent transition hover:bg-accent hover:text-primary hover:scale-105">
              Travel home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error404;
