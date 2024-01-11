function Footer() {
  return (
    <>
      <hr className="mx-auto my-8 h-1 w-48 rounded border-0 bg-blue-100 md:my-10" />
      <footer className="pb-8 text-center">
        <div className="pb-8">
          <ul className="flex place-content-center gap-4 text-3xl text-blue-600">
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
        </div>
        <div className="text-lg text-blue-600">
          <i className="fa-regular fa-copyright pb-2 drop-shadow"></i> Tiago
          Silva {new Date().getFullYear()}
          <p>All information and images are illustrative</p>
          <p>Credits go to their respective owners</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
