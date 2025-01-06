import { useEffect } from "react";
import chopin1 from "../media/audio/Nocturne+in+D-flat+major.mp3";
import bach1 from "../media/audio/bach_fantasia_in_c_minor.mp3";
import beethoven1 from "../media/audio/beethoven_sonata_op_10-3_I.mp3";
import beethoven2 from "../media/audio/beethoven_sonata_op_10-3_II.mp3";
import beethoven3 from "../media/audio/beethoven_sonata_op_10-3_III.mp3";
import beethoven4 from "../media/audio/beethoven_sonata_op_10-3_IV.mp3";
import brahms from "../media/audio/brahms-intermezzo-in-a-major.mp3";
import debussy from "../media/audio/debussy_la_terrase_des_audiences_du_clair_de_lune.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import matt from "../media/images/final/matt-1-500.webp";
import matt2 from "../media/images/final/matt-2-500.webp";
import note from "../media/images/final/note1-500.webp";
import student16 from "../media/images/final/student-16-500.webp";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <h1 className="center margin-section-bottom">About Me</h1>
      <div className="about">
        <img
          src={matt}
          alt="Matt Jordan"
          className="shadow"
          width="500"
          height="375"
        />
        <p className="mobile-margin-top">
          Born and raised in Chicago, I began piano lessons relatively late, at
          the age of thirteen. (Remember, it's never too late!) My first
          instrument was the upright bass, which I played in our grade school
          orchestra. Although I loved playing music - after several years I
          found I wanted an instrument that was more challenging and had more
          possibilities. So I began piano lessons, and before long I knew I
          wanted it to be my lifelong pursuit. After graduating high school I
          attended Lawrence University, in Appleton, Wisconsin, a college with a
          nationally-recognized music conservatory. In 2003, I earned my
          bachelor's degree in music. That same year I moved to Madison, where I
          have lived ever since. After several years of working in music retail,
          I began teaching piano, and I immediately knew I had found my other
          passion in life. Today my piano studio is thriving, and I am more
          dedicated than ever to helping people bring music into their lives!
        </p>
      </div>

      <h1 className="center margin-section-top margin-section-bottom">
        Hear Me Play
      </h1>
      <div className="play">
        <p>
          I firmly believe that to be a great piano teacher, one must be a
          proficient pianist. But I also believe it's important never to lose
          sight of one's own musical and artistic growth. I am as determined as
          ever to continue learning new music, and to grow and improve as a
          pianist myself. Below, you will find some samples of my playing. I
          hope you enjoy them!
        </p>
        <img
          src={matt2}
          alt=""
          className="shadow mobile-margin-top"
          width="500"
          height="375"
        />
      </div>
      <iframe
        src="https://www.youtube.com/embed/vUNbg7NZHgQ?si=XczaH4nCa7pg_9x1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="youtube margin-section-top shadow"
      ></iframe>
      <div className="audio margin-section-top">
        <div className="track">
          <div>Chopin - Nocturne Op. 27 No. 2</div>
          <AudioPlayer src={chopin1} />
        </div>
        <div className="track">
          <div>Bach - Fantasia in C minor</div>
          <AudioPlayer src={bach1} />
        </div>
        <div className="track">
          <div>Beethoven - Sonata Op. 10 No. 3 Mvt. I</div>
          <AudioPlayer src={beethoven1} />
        </div>
        <div className="track">
          <div>Beethoven - Sonata Op. 10 No. 3 Mvt. II</div>
          <AudioPlayer src={beethoven2} />
        </div>
        <div className="track">
          <div>Beethoven - Sonata Op. 10 No. 3 Mvt. III</div>
          <AudioPlayer src={beethoven3} />
        </div>
        <div className="track">
          <div>Beethoven - Sonata Op. 10 No. 3 Mvt. IV</div>
          <AudioPlayer src={beethoven4} />
        </div>
        <div className="track">
          <div>Debussy - La terrasse des audiences du clair de lune</div>
          <AudioPlayer src={debussy} />
        </div>
        <div className="track">
          <div>Brahms- Intermezzo in A major</div>
          <AudioPlayer src={brahms} />
        </div>
      </div>
      <h1 className="center margin-section-top margin-section-bottom">
        Testimonials
      </h1>
      <div className="testimonials">
        <div className="testimonial-column">
          <img
            src={note}
            alt="Handwritten testimonial from kid"
            className="shadow"
            width="500"
            height="325"
          />
          <div className="testimonial mobile-margin-top">
            <em>
              “Matt is an excellent teacher. I took lessons from him for about 6
              months and learned more about the piano than in my previous 3
              years of lessons! Matt is an amazing pianist himself, but this is
              not what makes him a good teacher. I instructs you how to learn,
              how to practice, and actually makes it enjoyable. Learning how to
              practice and how to understand something quickly is valuable not
              just in piano, but in any discipline in life. Highly recommended.
              ”
            </em>
            <div className="right">
              — Jeremy A., from review on Google Places
            </div>
          </div>
          <div className="testimonial">
            <em>
              “Matt is a fantastic piano teacher! My 9-year-old daughter and
              8-year-old son have been students of Matt for the past 2 years.
              They have very different learning styles and Matt knows exactly
              what to do to get each of them excited about their music and
              understanding what they are doing. Practice is not a chore at our
              house - they are excited to show Matt how much they have improved
              each week. Matt is extremely patient - a truly extraordinary piano
              teacher!!”
            </em>
            <div className="right">
              — Brenda L., from review on Google Places
            </div>
          </div>
          <div className="testimonial">
            <em>
              “I am a 15 year-old piano student of Matt Jordan's. I am
              interested in a future career in music and I think Matt is
              preparing me for the tasks that lie ahead. He makes my studies fun
              and interesting while still teaching me how to be a better
              pianist. I can tell that Matt really enjoys teaching.”
            </em>
            <div className="right">— Ethan R.</div>
          </div>
          <div className="testimonial">
            <em>
              “Unlike the stereotypical piano teacher, Matt is a mentor. He
              helps his students - children and adults alike - reach their goals
              and then keeps reaching. Trustworthy, professional and fun.”
            </em>
            <div className="right">
              — Grant B., from review on Google Places
            </div>
          </div>
        </div>
        <div className="testimonial-column">
          <div className="testimonial">
            <em>
              “Matt is a great teacher. He is patient and always seems to know a
              new technique to try when I am having problems learning a
              particular section of a piece of music. I too appreciate his
              flexibility with scheduling. I am a working adult and sometimes
              need to travel. Matt always works to accommodate my schedule. I
              have and will continue to recommend Matt to others.”
            </em>
            <div className="right">
              — Marty M., from review on Google Places
            </div>
          </div>
          <div className="testimonial">
            <em>
              “Matt Jordan is an outstanding piano teacher! He is actively
              involved with the students, is always coming up with new ways to
              motivate them, and is very patient. He is also very flexible when
              scheduling lessons, which is a tremendous help to parents. If you
              are looking for a piano teacher, you can't go wrong with Matt!”
            </em>
            <div className="right">— Kate D., from review on Google Places</div>
          </div>
          <img
            src={student16}
            alt=""
            className="margin-bottom-25 shadow"
            width="500"
            height="333"
          />
          <div className="testimonial mobile-margin-top">
            <em>
              “Matt does a great job with the kids! Both my son and daughter
              actually ENJOY going to piano lessons because Matt does an awesome
              job keeping them motivated and making lessons FUN!”
            </em>
            <div className="right">— Shelley F.</div>
          </div>
          <div className="testimonial">
            <em>
              “Matt has done an excellent job working with my 5 year old son to
              play the piano. My son looks forward to piano lessons because of
              Matt's patient and interactive teaching style. He is always
              looking for opportunities for the kids to showcase their talent
              with recitals, even at a local coffee shop! We appreciate Matt -
              he is punctual with lesson times, organized and flexible to work
              with!”
            </em>
            <div className="right">— Jennifer P.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
