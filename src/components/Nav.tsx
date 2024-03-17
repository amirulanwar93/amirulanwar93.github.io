import "../style/index.css";

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="./page/workingExperience">
              Working Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="./page/skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="./page/education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="./page/otherExperience">
              Other Experience
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
