import "./Container.css";
import Main from "./Main";
import Footer from "./Footer";
export default function Container(props) {
  return (
    <div className="container">
      <div className="img-container">
        <img className="img" src={props.img}></img>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
