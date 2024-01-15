function Footer() {
  return (
    <>
      {/* <hr className="mx-auto my-8 h-1 w-48 rounded border-0 bg-blue-100 md:my-10" /> */}
      <footer className="py-8 text-center bg-midnight-blue">
        <ul className="flex place-content-center gap-4 pb-8 text-3xl text-shadow-grey">
          <li className="cursor-pointer transition-all hover:scale-125">
            <a href="mailto:email@example.com">
              <i className="fa-regular fa-envelope drop-shadow"></i>
            </a>
          </li>
          <li className="cursor-pointer transition-all hover:scale-125">
            <a href="https://www.linkedin.com/in/tiagoalexandresilva7/">
              <i className="fa-brands fa-linkedin drop-shadow"></i>
            </a>
          </li>
          <li className="cursor-pointer transition-all hover:scale-125">
            <a href="https://github.com/tiagoalexandresilva7">
              <i className="fa-brands fa-github drop-shadow"></i>
            </a>
          </li>
        </ul>
        <div className="text-lg text-charcoal">
          <i className="fa-regular fa-copyright mr-2 pb-2 drop-shadow"></i>
          {`Tiago
          Silva ${new Date().getFullYear()}`}
          <p>All information and images are illustrative</p>
          <p>Credits go to their respective owners</p>
          <a href="#" className="text-shadow-grey">[Back to top]</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
