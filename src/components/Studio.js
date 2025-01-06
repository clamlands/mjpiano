import { useEffect } from "react";
import quickbooks from "../media/images/final/quickbooks-400.webp";
import building from "../media/images/final/music-building-500.webp";
import student2 from "../media/images/final/student-2-500.webp";
import student8 from "../media/images/final/student-8-500.webp";
import student18 from "../media/images/final/student-18-500.webp";
import student20 from "../media/images/final/student-20-500.webp";
export default function Studio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1 className="center margin-section-bottom">My Studio</h1>
      <div className="lessons">
        <div>
          <section>
            <h2>In-person Lessons</h2>
            <div>Nothing beats live one-on-one instruction!</div>
            <ul>
              <li>Professional studio with a 6’1” grand piano.</li>
              <li>Comfortable waiting room.</li>
              <li>Free & easy parking.</li>
              <li>I supply all necessary lesson materials for purchase.</li>
            </ul>
          </section>
          <img
            src={student8}
            alt=""
            className="shadow margin-top-75"
            width="500"
            height="333"
          />
          <section className="margin-top">
            <div className="divider-small"></div>
            <h2>How I Teach</h2>
            <p>
              <b>Teach music, not just piano! </b>I believe my job is not just
              to teach piano, but to cultivate in my students a general love and
              appreciation for music. This means not just teaching them to read
              music or wiggle their fingers - but exposing them to a wide
              variety of music, discussing its history and heritage, and of
              course introducing them to the great masters.
            </p>
            <ul className="margin-top-25">
              <li>
                <b>Each student requires a unique approach. </b>I do not
                subscribe to a "method" or "school" of piano playing. Each
                student is different, so each student requires a different
                approach. My job is to ascertain each student's particular
                strengths and weaknesses, and teach them accordingly.
              </li>
              <li>
                <b>Patience! </b>
                In my years of teaching piano, I have never once berated a
                student for not understanding something, or being unable to play
                something. The reason is very simple: that's my fault, not
                theirs! There is always another way to explain something so the
                student will understand it. As the teacher, it's my job to find
                it!
              </li>
              <li>
                <b>Teach skills, not songs! </b>
                My job is to help my students acquire all the skills they need
                to be able to achieve their musical goals on their own. I hope
                that each of my students can one day say to me, "Thanks for all
                your help, but I don't need you anymore!"
              </li>
            </ul>
          </section>
          <div className="divider-small"></div>
          <section>
            <h2>Virtual Lessons</h2>
            <p>
              Since the pandemic, we have all had to adapt to changing times. In
              April 2020, I began offering virtual lessons. Today, even with the
              worst of the pandemic behind us, many people still prefer the
              convenience of learning piano virtually.
            </p>
            <h4 className="margin-top-25">Features</h4>
            <ul>
              <li>Uses Zoom - no account required!</li>
              <li>Easy to use: just open a link to start the lesson!</li>
              <li>3-camera setup for maximum versatility.</li>
              <li>HD video & professional-quality audio.</li>
              <li>Electronic billing makes payment safe and easy.</li>
              <li>100% safe - no masks, no worries!</li>
            </ul>
            <h4 className="margin-top-25">What You Need</h4>
            <ul>
              <li>A piano or keyboard.</li>
              <li>A reliable Internet connection.</li>
              <li>
                A device with a webcam (computer, tablet, smartphone, etc.).
              </li>
            </ul>
          </section>
          <div className="divider-small desktop-hide"></div>
        </div>
        <div>
          <img
            src={building}
            alt="Wisconsin Center for Music Education"
            className="shadow"
            width="500"
            height="139"
          />
          <div className="margin-top-25">
            My studio is located at the{" "}
            <a href="https://center.wsmamusic.org/">
              Wisconsin Center for Music Education
            </a>
            .
          </div>
          <p className="margin-top-25">
            {" "}
            <em>
              "As first of its kind in the nation, the Wisconsin Center for
              Music Education, located in Waunakee, WI (just north of Madison)
              serves music teachers, students, and community members with
              diverse music education programs and resources. The center is a
              catalyst for innovation and growth of music and arts education
              throughout the state."
            </em>
          </p>

          <div className="divider-small"></div>

          <section>
            <h2>Skills I Teach</h2>
            <ul>
              <li>
                <b>Music reading. </b>
                Teaching students to read music is the most important part of my
                job, because it can be applied not just to piano, but to any
                instrument and any musical goals the student wishes to pursue.
              </li>
              <li>
                <b>Proper piano technique. </b>
                Once my students have learned the basics of music reading, we
                turn our attention to building finger strength and dexterity,
                using finger exercises such as Hanon or Fingerpower. We begin
                each lesson with a few of these exercises.
              </li>
              <li>
                <b>Scales, arpeggios & chord progressions. </b>
                By about the second year of lessons, I require all my students
                to learn all the major and minor scales and arpeggios, as well
                as the standard chord progressions. Once a student has begun
                these, they are an integral part of every lesson, no matter how
                advanced the student.
              </li>
              <li>
                <b>Ear Training. </b>
                To be a good musician, one must have a good ear! My students
                work on their ear training in the Music Lab, a computer located
                in my waiting room.
              </li>
              <li>
                <b>Sight reading. </b>
                An essential skill, yet difficult to teach and often neglected.
                Once my students have acquired a rudimentary grasp of scales and
                arpeggios, we will begin spending a few minutes in each lesson
                working on sight reading.
              </li>
              <li>
                <b>Chord charts. </b>
                As part of our work on chord progressions, I teach all my
                students how to read chord charts. This is an invaluable skill
                if a student wishes to play in a band, or accompany a singer.
              </li>
              <li>
                <b>Music Theory. </b>
                My students work on music theory using the Music Lab. In
                addition, I try to incorporate as much theory into each lesson
                as possible, applying it to the music we are working on.
              </li>
              <li>
                <b>Good practice habits. </b>
                Practicing the piano means more than just putting in a certain
                number of minutes or repetitions. It means using one's time as
                efficiently as possible. Learning the piano involves an enormous
                variety of technical challenges, and each challenge requires a
                different approach, a different practice method, to master. I
                emphasize this very strongly to my students.
              </li>
              <li>
                <b>
                  Demonstrate how learning music applies to other areas of life.
                </b>{" "}
                When you learn music, you're actually learning an art form, a
                foreign language, time management, a sport involving enormous
                physical coordination, and a slew of other skills! I try to show
                how learning piano develops skills that can be applied nearly
                everywhere in life, whether it's public speaking, studying for
                an exam, or learning a new language.
              </li>
            </ul>
          </section>
          <img
            src={student18}
            alt=""
            className="margin-top-75 shadow"
            width="500"
            height="334"
          />
        </div>
      </div>
      <div className="payment margin-section-top">
        <h1 className="center margin-section-bottom">Payment Options</h1>
        <h2 className="center ">
          Write a check, pay securely online by credit or debit - or set up
          automatic payments and never worry about it again!
        </h2>
        <div className="payments margin-section-top">
          <div>
            <p>
              <b>Pay by check. </b>
              Tried and true! Simply bring a check to your first lesson of the
              month.
            </p>
            <p>
              <b>Pay online by debit or credit card. </b>I use Quickbooks
              Payment Processing to handle credit and debit card transactions.
              Your monthly invoice will include a link to pay online. Simply
              click the link and follow the instructions. Simple and secure!
            </p>
          </div>
          <img
            src={quickbooks}
            alt=""
            width="400"
            height="308"
            className="shadow"
          />
          <p>
            <b>Set up automatic payments. </b>
            The easiest payment method of all! Simply choose a debit or credit
            card, allow me to enter it into Quickbooks - and your monthly
            payments will be processed automatically!
          </p>
        </div>
        <h2 className="center margin-section-top">
          I use Quickbooks Payment Processing to handle all online transactions.
          Simple and secure!
        </h2>
      </div>
      <h1 className="center margin-section-top margin-section-bottom">
        Studio Policies
      </h1>
      <div className="policies ">
        <div>
          <section>
            <h2>Calendar and Scheduling</h2>
            <ul>
              <li>
                <b>Holidays. </b>
                The studio will be closed for all federal holidays, and no
                lessons will be billed. However, the studio does not follow the
                local public school calendar, so please do not assume that
                because the schools are closed, the studio is closed as well.
                However, if the schools are closed and you will be unable to
                attend a lesson, please give me appropriate notice and you will
                be credited for the lesson.
              </li>
              <li>
                <b>Events. </b>
                Recitals and other special events will be posted to this
                website, and you will be notified about them, no less than a
                month in advance.
              </li>
              <li>
                <b>Inclement weather. </b>
                If the studio will be closed due to inclement weather, I will
                notify you via phone and email by 1:00 p.m. that day, or 2 hours
                before your lesson, whichever is earlier. Please do not assume
                that because the schools are closed due to weather, that the
                studio will be closed as well. If you have not received
                notification from me and you feel the weather is too dangerous
                to travel, please contact me and we will make alternate
                arrangements.
              </li>
            </ul>
          </section>
          <div className="divider-small"></div>
          <section>
            <h2>Absences and Cancelations</h2>
            <ul>
              <li>
                If a lesson is canceled due to a planned vacation, and I am
                given at least 7 days notice, you will be credited for the
                lesson. Limit twice per semester.
              </li>
              <li>
                If a lesson is canceled due to an emergency, either a make-up
                lesson will be offered or you will be credited for the lesson.
                Emergencies include: Illness or injury to the student or an
                immediate family member, a death in the family, or car trouble.
              </li>
              <li>
                If a lesson is canceled due to a non-emergency and no make-up
                lesson can be scheduled, you will be charged for the lesson.
                Non-emergencies include: sporting events, social occasions,
                family outings, or lack of practice.
              </li>
              <li>
                If the student is absent from the lesson and I am not notified
                ahead of time, you will be charged for the lesson.
              </li>
              <li>
                If I am absent from a lesson for any reason, you will be
                credited for the lesson.
              </li>
            </ul>
          </section>
          <img
            src={student2}
            alt=""
            className="margin-top-75 shadow"
            width="500"
            height="281"
          />
          <div className="divider-small desktop-hide"></div>
        </div>
        <div>
          <section>
            <h2>Billing and Payment</h2>
            <ul>
              <li>Lessons are billed monthly.</li>
              <li>Invoices are sent on the 27th of the preceding month.</li>
              <li>
                You will receive a separate credit memo for any canceled lessons
                you have been credited for.
              </li>
              <li>Payment is due by the 10th of the month.</li>
              <li>
                Invoices may be sent via regular mail, or via email as PDF
                attachments.
              </li>
            </ul>
          </section>
          <div className="divider-small"></div>
          <section>
            <h2>Lesson Books and Materials</h2>
            <ul>
              <li>
                I will provide all necessary lesson books and supplemental
                materials for purchase.
              </li>
              <li>
                Books and other materials purchased will be included in the
                following month's invoice.
              </li>
            </ul>
          </section>
          <img
            src={student20}
            alt=""
            className="margin-top-75 shadow"
            width="500"
            height="333"
          />
          <div className="divider-small"></div>
          <section>
            <h2>Prolonged Absences</h2>
            <ul>
              <li>
                If the student suffers a serious injury or illness (such as a
                broken bone), or a major family emergency, I will credit up to
                one month of lessons, and the student will be guaranteed the
                same lesson time upon returning.
              </li>
              <li>
                Under no circumstances can I guarantee to hold a student's
                lesson time for longer than one month.
              </li>
            </ul>
          </section>

          <div className="divider-small"></div>
          <section>
            <h2>Discontinuing Lessons</h2>
            <ul>
              <li>
                Student may discontinue lessons at any time, and I will credit
                the balance of the account. Advance notice would be appreciated,
                but is not required.
              </li>
              <li>
                I reserve the right to discontinue lessons with any student due
                to lack of interest or practice, bad behavior, or delinquent
                payments.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <h1 className="center margin-section-top margin-section-bottom">
        Lesson Rates
      </h1>
      <h3 className="margin-bottom-25">
        Rates listed below are effective January 1, 2024.
      </h3>
      <em>
        All lessons are weekly. Rates are per household. To make some other
        arrangement, please contact me.
      </em>
      <div>
        <b>30-minute piano lessons:</b> $32 each
      </div>
      <div>
        <b>60-minute piano lessons:</b> $56 each
      </div>
      <div>
        <b>Two 30-minute piano lessons (family members only):</b> $30 each
      </div>
      <div>
        <b>Other arrangements:</b> Contact me
      </div>
    </main>
  );
}
