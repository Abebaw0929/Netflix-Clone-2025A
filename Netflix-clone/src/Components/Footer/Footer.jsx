import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner_container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li>
                <a href="/" alt="">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="/" alt="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="/" alt="">
                  Account
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <a href="/" alt="">
                  Media Center
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write"> &copy; 1997-2025 Netflix,Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="footer_outer_container">
       <div className="footer_inner_container">
         <div className="footer_icons">
           <FacebookOutlinedIcon />
           <InstagramIcon />
          <YouTubeIcon />
        </div>
         <div className="footer_data">
          <div>
            <ul>
              <li>
                 <a href="/" alt="">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Investor Relations
              </a>
            </li>
              <li>
                 <a href="/" alt="">
                   Privacy
                 </a>
               </li>
              <li>
               <a href="/" alt="">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
           <div>
             <ul>
              <li>
                 <a href="/" alt="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/" alt="">
                   Jobs
                 </a>
              </li>
              <li>
                <a href="/" alt="">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="/" alt="">
                  Legal Notices
               </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
             <li>
               <a href="/" alt="">
                   Account
                </a>
              </li>
              <li>
                <a href="/" alt="">
                   Ways to Watch
                 </a>
              </li>
               <li>
                 <a href="/" alt="">
                   Corporate Information
                </a>
              </li>
               <li>
                 <a href="/" alt="">
                   Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="/" alt="">
                 Media Center
               </a>
              </li>
              <li>
               <a href="/" alt="">
                  Terms of Use
                </a>
              </li>
              <li>
              <a href="/" alt="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
         <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-write"> &copy; 1997-2024 Netflix,Inc.</div>
       </div>
    </div> */
}
