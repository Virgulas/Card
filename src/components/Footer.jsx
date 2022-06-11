import "./Footer.css";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRedditSquare,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="arrow">
        <p>
          <RiArrowUpSFill />
        </p>
      </div>
      <div className="footer-container">
        <a href="#" className="icon">
          <FaFacebookSquare />
        </a>
        <a href="#" className="icon">
          <FaTwitterSquare />
        </a>
        <a href="#" className="icon">
          <FaInstagramSquare />
        </a>
        <a href="#" className="icon">
          <FaRedditSquare />
        </a>
      </div>
    </div>
  );
}
