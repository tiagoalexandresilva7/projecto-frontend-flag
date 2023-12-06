function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="title">
            <a href="/" className="title__link">
              <img src="../public/logo.svg" alt="logo" />
              <h1>Travelling <em>Projectified</em></h1>
            </a>
          </div>
          <nav className="nav">
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
      </header>
    </>
  )
}

export default App
