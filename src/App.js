import './App.css';
import { useEffect, useState, useRef } from 'react';
import {  FaStar, FaGraduationCap, FaTools, FaDatabase, FaChartLine, FaMobileAlt, FaBriefcase, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { GiFalconMoon } from 'react-icons/gi';

const professions = [
  'Data Scientist',
  'Machine Learning & AI Enthusiast',
  'Python | R | Tableau | Power BI | SQL',
  'Generative AI & Deep Learning Specialist'
];

function useSectionAnimation() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return refs;
}

function App() {
  const [professionIdx, setProfessionIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRefs = useSectionAnimation();
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setProfessionIdx((i) => (i + 1) % professions.length);
        setFade(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Scroll spy for active nav
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'skills', 'education', 'projects', 'certificates', 'interests'];
      let found = 'about';
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          found = id;
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo"><GiFalconMoon size={28} color="#FFD700" style={{verticalAlign:'middle',marginRight:10}} />REVANTH TEJA GUNDABATTINA</div>
        <button className="navbar-toggle" onClick={() => setNavOpen(v => !v)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links${navOpen ? ' open' : ''}`}>
          <li><a href="#about" className={activeSection==='about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection==='skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#education" className={activeSection==='education' ? 'active' : ''}>Education</a></li>
          <li><a href="#projects" className={activeSection==='projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#certificates" className={activeSection==='certificates' ? 'active' : ''}>Certificates</a></li>
          <li><a href="#interests" className={activeSection==='interests' ? 'active' : ''}>Interests</a></li>
        </ul>
        <div className="navbar-actions">
          <a href="https://www.linkedin.com/in/revanth-teja-gundabattina/" target="_blank" rel="noopener noreferrer"><button className="login-btn">LinkedIn</button></a>
          <a href="mailto:rewanthteja@gmail.com"><button className="download-btn">Email</button></a>
        </div>
      </nav>
      <header className="hero-section">
        <div className="hero-bg-animated"></div>
        <h1 className="hero-name">Hi, I'm <span className="hero-highlight">Revanth Teja Gundabattina</span></h1>
        <p className="hero-location">Hyderabad &nbsp;|&nbsp; +91 6305490580 &nbsp;|&nbsp; <a href="mailto:rewanthteja@gmail.com" className="hero-email">rewanthteja@gmail.com</a></p>
        <p className={`hero-subtitle animated-text ${fade ? 'fade-in' : 'fade-out'}`}>{professions[professionIdx]}</p>
        <div className="hero-actions stylish-btn-group">
          <a href="#projects"><button className="cta-btn primary">View Projects</button></a>
          <a href="#contact"><button className="cta-btn secondary">Contact Me</button></a>
        </div>
      </header>
      <main>
        <section id="about" className="section-animated prof-summary-animated" ref={el => sectionRefs.current[0] = el} style={{marginTop:40}}>
          <div className="prof-summary-header">
            <FaUserTie size={28} color="#00d8ff" style={{marginRight: 10, verticalAlign: 'middle'}} />
            <h2 className="gradient-heading">Professional Summary</h2>
          </div>
          <div className="prof-summary-content">
            <div className="prof-summary-line" style={{animationDelay: '0.1s'}}>Data Scientist with strong hands-on expertise in Python, R, Tableau, Power BI, SQL, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Generative AI.</div>
            <div className="prof-summary-line" style={{animationDelay: '0.4s'}}>Adept at transforming complex data into actionable insights and building scalable AI solutions for business impact.</div>
            <div className="prof-summary-line" style={{animationDelay: '0.7s'}}>Experienced in leading and collaborating on cross-functional teams, delivering end-to-end data science projects from ideation to deployment.</div>
            <div className="prof-summary-line" style={{animationDelay: '1.0s'}}>Passionate about continuous learning, innovation, and leveraging the latest advancements in AI to solve real-world problems.</div>
            <div className="prof-summary-line" style={{animationDelay: '1.3s'}}>My educational background includes a Master-level specialization at Simplilearn, and I am recognized for my ability to communicate technical concepts to diverse audiences.</div>
          </div>
        </section>
        <section id="skills" className="section-animated" ref={el => sectionRefs.current[1] = el}>
          <div className="skills-header">
            <FaTools size={26} color="#00d8ff" style={{marginRight: 10, verticalAlign: 'middle'}} />
            <h2 className="gradient-heading">Technical Skills</h2>
          </div>
          <div className="skills-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">R</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">Power BI</span>
            <span className="skill-tag">Tableau</span>
            <span className="skill-tag">Excel</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Data Science with Python</span>
            <span className="skill-tag">Data Analysis</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Deep Learning</span>
            <span className="skill-tag">Computer Vision</span>
            <span className="skill-tag">Natural Language Processing</span>
            <span className="skill-tag">Generative AI</span>
          </div>
        </section>
        <section id="education" className="section-animated" ref={el => sectionRefs.current[2] = el}>
          <div className="education-header">
            <FaGraduationCap size={26} color="#FFD700" style={{marginRight: 10, verticalAlign: 'middle'}} />
            <h2 className="gradient-heading">Education</h2>
          </div>
          <div className="education-cards">
            <div className="education-card">
              <div className="edu-degree">Bachelor of Engineering, CSE</div>
              <div className="edu-school">Geetanjali College of Engineering, Hyderabad</div>
              <div className="edu-details">Percentage: 70%</div>
            </div>
            <div className="education-card">
              <div className="edu-degree">Intermediate, MPC</div>
              <div className="edu-school">Narayana Educational Institute, Hyderabad</div>
              <div className="edu-details">Percentage: 86%</div>
            </div>
            <div className="education-card">
              <div className="edu-degree">Secondary School</div>
              <div className="edu-school">Kakatiya High School, Hyderabad</div>
              <div className="edu-details">Percentage: 92%</div>
            </div>
          </div>
        </section>
        <section id="projects" className="section-animated" ref={el => sectionRefs.current[3] = el}>
          <h2 className="gradient-heading" style={{display:'flex',alignItems:'center',gap:8}}><FaChartLine size={24} color="#FFD700" style={{marginBottom: -4}}/> Projects</h2>
          <div className="projects-grid">
            <div className="project-card enhanced-card innovative-card">
              <div className="project-card-floaticon"><FaChartLine size={36} color="#FFD700" /></div>
              <div className="project-card-content">
                <h3>AI Interview Model using ML, DL, NLP, Gen AI - LLMs, Flask</h3>
                <div className="project-desc">Developed a comprehensive B2C and B2B interview platform where users can record their answers to top interview questions. The system uses advanced ML, DL, and Gen AI models to automatically evaluate responses, provide instant feedback, and display performance analytics on a dashboard. Integrated an interactive interview bot for personalized interview preparation, helping users improve their skills and confidence. Successfully deployed for both individual users and enterprise clients.</div>
              </div>
            </div>
            <div className="project-card enhanced-card innovative-card">
              <div className="project-card-floaticon"><FaDatabase size={36} color="#FFD700" /></div>
              <div className="project-card-content">
                <h3>Water Quality Prediction using ML, Tableau, and Flask</h3>
                <div className="project-desc">Built an end-to-end ML solution for predicting water quality, leveraging data preprocessing, feature engineering, and model selection. The results are visualized in a dynamic Tableau dashboard and made accessible through a Flask web application, enabling real-time monitoring and actionable insights for stakeholders. The project improved water safety awareness and decision-making for local authorities.</div>
              </div>
            </div>
            <div className="project-card enhanced-card innovative-card">
              <div className="project-card-floaticon"><FaMobileAlt size={36} color="#FFD700" /></div>
              <div className="project-card-content">
                <h3>Fake News Detection using Machine Learning and NLP</h3>
                <div className="project-desc">Designed and implemented a robust fake news detection system using NLP and machine learning techniques. The model analyzes news articles from Google, classifies them as real or fake, and is deployed via a Flask web interface for easy access. This project helps users and organizations quickly identify misinformation and maintain information integrity.</div>
              </div>
            </div>
            <div className="project-card enhanced-card innovative-card">
              <div className="project-card-floaticon"><FaStar size={36} color="#FFD700" /></div>
              <div className="project-card-content">
                <h3>Other Projects & Achievements</h3>
                <div className="project-desc">Worked with over 100 datasets, performed advanced analyses, and built models across multiple domains including healthcare, finance, and social media. Participated in national-level hackathons and competitions, consistently ranking among the top performers. Recognized as a top performer in Kaggle competitions for innovative solutions and technical excellence.</div>
              </div>
            </div>
          </div>
        </section>
        <section id="certificates" className="section-animated" ref={el => sectionRefs.current[4] = el}>
          <h2 className="gradient-heading" style={{display:'flex',alignItems:'center',gap:8}}><FaBriefcase size={22} color="#FFD700" style={{marginBottom: -4}}/> Work Experience & Internship</h2>
          <div className="timeline">
            {/* Work Experience: Virinchi Private Limited */}
            <div className="timeline-item fade-in-timeline">
              <div className="timeline-icon"><FaBriefcase size={24} color="#FFD700" /></div>
              <div className="timeline-content">
                <div className="timeline-title">Data Scientist <span className="timeline-company">| Virinchi Private Limited | Hyderabad</span></div>
                <div className="timeline-date">July 2023 – Present</div>
                <div className="work-projects-grid">
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaDatabase size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">Loan Approval System</div>
                      <div className="work-project-desc">Developed a machine learning model for loan approval with 87% accuracy, deployed in production and integrated with a web application.</div>
                    </div>
                  </div>
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaMobileAlt size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">Face Attendance System</div>
                      <div className="work-project-desc">Developed a facial recognition attendance system using deep learning and computer vision.</div>
                    </div>
                  </div>
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaStar size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">Help Manual AI Assistance</div>
                      <div className="work-project-desc">Created AI tools for project management using Gen AI, Llama2, Llama3, Mistral AI, OpenAI, and custom document integration.</div>
                    </div>
                  </div>
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaChartLine size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">ECG AI</div>
                      <div className="work-project-desc">Introduced a hybrid model for cardiac diagnostics using deep learning and machine learning.</div>
                    </div>
                  </div>
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaDatabase size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">SEPSIS AI</div>
                      <div className="work-project-desc">Led work on early detection of sepsis in ICU data using machine learning.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Internship: NSIC */}
            <div className="timeline-item fade-in-timeline">
              <div className="timeline-icon"><FaUserGraduate size={24} color="#FFD700" /></div>
              <div className="timeline-content">
                <div className="timeline-title">Internship: Data Science <span className="timeline-company">| NSIC, Hyderabad</span></div>
                <div className="timeline-date">Internship</div>
                <div className="work-projects-grid">
                  <div className="work-project-card">
                    <div className="work-project-icon"><FaTools size={22} color="#FFD700" /></div>
                    <div>
                      <div className="work-project-title">Data Science Internship</div>
                      <div className="work-project-desc">Assisted in data collection and preprocessing, conducted EDA, and developed machine learning models for specific tasks using Python and relevant libraries.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="interests" className="section-animated" ref={el => sectionRefs.current[5] = el}>
          <div className="interests-header">
            <FaStar size={28} color="#FFD700" style={{marginRight: 10, verticalAlign: 'middle'}} />
            <h2 className="gradient-heading">Core Competencies & Interests</h2>
          </div>
          <div className="interests-tags">
            <span className="interest-tag">Machine Learning & Deep Learning</span>
            <span className="interest-tag">Computer Vision</span>
            <span className="interest-tag">Natural Language Processing</span>
            <span className="interest-tag">Generative AI</span>
            <span className="interest-tag">Data Visualization</span>
            <span className="interest-tag">Hackathons & Competitions</span>
            <span className="interest-tag">Continuous Learning</span>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-name">REVANTH TEJA GUNDABATTINA</div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/revanth-teja-gundabattina/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>|</span>
            <a href="mailto:rewanthteja@gmail.com">Email</a>
            <span>|</span>
            <a href="https://github.com/revanthteja" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-copy">&copy; {new Date().getFullYear()} Revanth Teja Gundabattina. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
