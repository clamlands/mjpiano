import { useEffect } from "react";
import map from "../media/images/final/map-1000.webp";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact">
      <h1 className="margin-section-bottom">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-cta">
          To schedule a lesson:
          <div>
            • email mattjordanmusic@gmail.com
            <br />
            or
            <br />• call (608) 850-1030
          </div>
        </div>
        <div>
          Matt Jordan's Piano Studio
          <br />
          Wisconsin Center for Music Education
          <br />
          1005 Quinn Drive, Room 155
          <br />
          Waunakee, WI, 53597
        </div>
      </div>

      <div className="divider"></div>
      <h2 className="map-heading">Map of My Studio</h2>
      <iframe
        className="map shadow margin-top"
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.437041586666!2d-89.4299025!3d43.1793398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807007bc7feb71b%3A0x167ab27f384164fd!2s1005%20Quinn%20Dr%20%23155%2C%20Waunakee%2C%20WI%2053597!5e0!3m2!1sen!2sus!4v1696879785125!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <img
        src={map}
        alt=""
        className="shadow margin-top"
        width="1000"
        height="701"
      />
    </main>
  );
}
