import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import matt from "../media/images/final/matt-5-500.webp";
import matt2 from "../media/images/final/matt-3-400.webp";
import piano from "../media/images/final/piano-400.webp";
import student19 from "../media/images/final/student-19-400.webp";
import student1 from "../media/images/final/student-1-1000.webp";
import student2 from "../media/images/final/student-2-1000.webp";
import student3 from "../media/images/final/student-3-1000.webp";
import student4 from "../media/images/final/student-6-1000.webp";
import student5 from "../media/images/final/student-16-1000.webp";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideImages = [
    {
      url: student1,
    },
    {
      url: student2,
    },
    {
      url: student3,
    },
    {
      url: student4,
    },
    {
      url: student5,
    },
  ];

  const spanStyle = {
    padding: "20px",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "100%",
    aspectRatio: "3 / 2",
  };

  return (
    <main>
      <h1 className="center margin-section-bottom">
        Matt Jordan's Piano Studio
      </h1>
      <div className="home-about">
        <img
          src={matt}
          alt="Matt Jordan"
          className="home-pic shadow"
          width="500"
          height="500"
        />
        <div className="home-text">
          <h2 className="center mobile-margin-top">Welcome to my studio!</h2>
          <p>
            Greetings music lovers! I am a piano teacher in the beautiful town
            of Waunakee, just north of Madison. I have a Bachelor of Arts degree
            in Music from Lawrence University, and have been playing piano for
            over 30 years, and teaching for over 15 years. Teaching is my
            passion, and I enjoy working with aspiring musicians of all ages and
            levels!
          </p>
          <br />
          <div className="center home-lessons">
            To schedule a lesson:
            <div>
              • email mattjordanmusic@gmail.com
              <br />
              or
              <br />• call (608) 850-1030
            </div>
          </div>
        </div>
      </div>
      <div className="divider-small"></div>
      <div className="home-cards margin-section-top">
        <Link to="/about" className="no-underline home-card">
          <img
            src={matt2}
            alt=""
            className="home-card-img shadow"
            width="400"
            height="267"
          />
          <h3 className="home-card-text">About Me</h3>
        </Link>
        <Link to="/studio" className="no-underline home-card">
          <img
            src={piano}
            alt=""
            className="home-card-img shadow"
            width="400"
            height="266"
          />
          <h3 className="home-card-text">My Studio</h3>
        </Link>
        <Link to="/contact" className="no-underline home-card">
          <img
            src={student19}
            alt=""
            className="home-card-img shadow"
            width="400"
            height="267"
          />
          <h3 className="home-card-text">Contact Me</h3>
        </Link>
      </div>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </main>
  );
}
