function Footer() {
  return (
    <>
      <div className="h-16 whitespace-nowrap text-xl text-blue-600 md:text-2xl">
        <ul className="flex place-content-center items-center gap-1 ">
          <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
            <a className="p-4" href="">
              <i class="fa-solid fa-copyright"></i> Copyright
            </a>
          </li>
          <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
            <a className="p-4" href="">
              <i class="fa-solid fa-square-phone"></i> Contacts
            </a>
          </li>
          <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
            <a className="p-4" href="">
              <i class="fa-solid fa-square-share-nodes"></i> Social Media
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
