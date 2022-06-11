import "./Main.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
export default function Main() {
  return (
    <div className="main">
      <div className="main-1">
        <h1>
          <span className="name">Vash The Stamped</span>
          <span className="desc">Wanted: $ 60.000.000,00</span>
        </h1>
        <div className="main-buttons">
          <a href="#" className="btn btn-white">
            {" "}
            <div className="icon">
              <MdEmail />
            </div>
            Email
          </a>
          <a href="#" className="btn btn-blue">
            {" "}
            <div className="icon">
              <BsLinkedin />
            </div>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="main-2">
        <h3>About</h3>
        <p>
          Vash the Stampede is the main protagonist of the anime and manga
          series of Trigun. Vash is also known as The Humanoid Typhoon due to
          the destruction and chaos that often surrounds him.
        </p>
        <h3>Interests</h3>
        <p>Love and peace. Pretty chicks and guns.</p>
      </div>
    </div>
  );
}
