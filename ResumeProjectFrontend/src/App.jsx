import "./App.css";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation/>
        {/* Page Content*/}
        <div className="container-fluid p-0">
          {/* About*/}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Clarence
                <span className="text-primary">Taylor</span>
              </h1>
              <div className="subheading mb-5">
                3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                <a href="mailto:name@email.com">name@email.com</a>
              </div>
              <p className="lead mb-5">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high level overviews. Iterative approaches
                to corporate strategy foster collaborative thinking to further
                the overall value proposition.
              </p>
              <div className="social-icons">
                <a className="social-icon" href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-github" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-twitter" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Experience*/}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Senior Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">March 2013 - Present</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Intelitec Solutions</div>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    December 2011 - March 2013
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Junior Web Designer</h3>
                  <div className="subheading mb-3">
                    Shout! Media Productions
                  </div>
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail. Keeping your
                    eye on the ball while performing a deep dive on the start-up
                    mentality to derive convergence on cross-platform
                    integration.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    July 2010 - December 2011
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Web Design Intern</h3>
                  <div className="subheading mb-3">
                    Shout! Media Productions
                  </div>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary ROI.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    September 2008 - June 2010
                  </span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Education*/}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">University of Colorado Boulder</h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science - Web Development Track</div>
                  <p>GPA: 3.23</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">August 2006 - May 2010</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">James Buchanan High School</h3>
                  <div className="subheading mb-3">
                    Technology Magnet Program
                  </div>
                  <p>GPA: 3.56</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">August 2002 - May 2006</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Skills*/}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-angular" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-sass" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-less" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-wordpress" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-gulp" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-grunt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm" />
                </li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Functional Teams
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Agile Development &amp; Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* Interests*/}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
              <p>
                Apart from being a web developer, I enjoy most of my time being
                outdoors. In the winter, I am an avid skier and novice ice
                climber. During the warmer months here in Colorado, I enjoy
                mountain biking, free climbing, and kayaking.
              </p>
              <p className="mb-0">
                When forced indoors, I follow a number of sci-fi and fantasy
                genre movies and television shows, I am an aspiring chef, and I
                spend a large amount of my free time exploring the latest
                technology advancements in the front-end web development world.
              </p>
            </div>
          </section>
          <hr className="m-0" />
          {/* Awards*/}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  Google Analytics Certified Developer
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  Mobile Web Specialist - Google Certification
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2009
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Adobe Creative Jam
                  2008 (UI Design Category)
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  2<sup>nd</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2008
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - James Buchanan High School - Hackathon 2006
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  3<sup>rd</sup>
                  Place - James Buchanan High School - Hackathon 2005
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
