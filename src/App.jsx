import ToggleMobileMenu from "./components/ToggleMobileMenu"

function App() {
  return (
    <>
      <header>

        <div className="container wrapper">
         
            <div className="logoTitleContainer__logo">
              <a href="/" className="title__link">
                <img src="/logo.svg" alt="logo" />
              </a>
            </div>

            <div className="logoTitleContainer__title">
              <a href="/" className="title__link">
                <h1>Travelling <em>Projectified</em></h1>
              </a>
            </div>

          <div className="nav">

            <nav>

              <ul className="nav__links">
                <li>
                  <a href="/"><i className="fa-solid fa-house-flag"></i> Home</a>
                </li>
                <li>
                  <a href="/addlocation"><i className="fa-solid fa-map-location-dot"></i> Travel to...</a>
                </li>
                <li>
                  <a href="/about"><i className="fa-solid fa-user-astronaut"></i> About the Tourist</a>
                </li>
              </ul>

            </nav>

          </div>


          <div className="nav__mobile">
            <button onClick={ToggleMobileMenu} className="nav__mobile--btn"><i className="burguerIcon fa-solid fa-bars"></i></button>
          </div>

        </div>

        <div>
          <ul className="nav__mobile--links">
            <li>
              <a href="/"><i className="fa-solid fa-house-flag"></i> Home</a>
            </li>
            <li>
              <a href="/addlocation"><i className="fa-solid fa-map-location-dot"></i> Travel to...</a>
            </li>
            <li>
              <a href="/about"><i className="fa-solid fa-user-astronaut"></i> About the Tourist</a>
            </li>
          </ul>
        </div>

      </header>
    </>
  )
}

export default App
