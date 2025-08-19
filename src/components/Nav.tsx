function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand nav-link nav-link-custom active" href="/">
            My Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom active"
                  href="./experience"
                >
                  Working Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom active" href="./skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom active"
                  href="./education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom active" href="./other">
                  Other Experience
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link nav-link-custom disabled"
                  href="./project"
                >
                  Personal Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
