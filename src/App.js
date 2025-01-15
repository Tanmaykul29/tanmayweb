import React, { useEffect } from 'react';
import './App.css'; // Styles for the app
import ParticlesComponent from './components/particles'; // Particles component
import myImage from './images/profile.jpg'; // Your profile image
import anime from 'animejs/lib/anime.es.js'; // Anime.js for animations
import IDFC from './images/idfc.png';
import FRACTAL from './images/fractal.jpg';
import SPIT from './images/spit.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const experience_cards = [
  {
    id: 1,
    title: 'IDFC First Bank',
    description: 'Software Engineer Intern',
    image: IDFC
  },
  {
    id: 2,
    title: 'Fractal',
    description: 'Software Engineer Intern',
    image: FRACTAL
  }
];

const education_cards = [
  {
    id: 1,
    title: 'Sardar Patel Institute of Technology',
    description: 'Computer Science and Engineering',
    image: SPIT
  }
];


function App() {


  useEffect(() => {
    // Anime.js animation for the intro section
    anime.timeline({ easing: 'easeOutExpo', duration: 1500 })
      .add({
        targets: '.profile-image',
        opacity: [0, 1],
        translateY: [-50, 0],
      })
      .add({
        targets: '.profile-title',
        opacity: [0, 1],
        translateY: [-30, 0],
      }, '-=500')
      .add({
        targets: '.profile-subtitle',
        opacity: [0, 1],
        translateY: [-20, 0],
      }, '-=500')
      .add({
        targets: '.profile_about_me',
        opacity: [0, 1],
        translateY: [-20, 0],
      }, '-=500')
      .add({
        targets: '.profile_experience',
        opacity: [0, 1],
        translateY: [-20, 0],
      }, '-=500')
      .add({
        targets: '.profile_education',
        opacity: [0, 1],
        translateY: [-20, 0],
      }, '-=500');

      anime({
        targets: '.sphere-container',
        rotateY: '+=36', // Rotate sphere infinitely profile_education
        easing: 'linear',
        duration: 5000,
        loop: true,
      });
      // Animation for the experience section
    let container = document.querySelector(".container");
    
    // Create the dots dynamically
    for (let i = 1; i <= 45; i++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let grid = [30, 30];
    let dotAll = document.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
    });

    animation.add({
      rotate: function () { return anime.random(-18, 18); },
      translateY: function () { return anime.random(-10, 10); },
      translateX: function () { return anime.random(-10, 10); },
      delay: anime.stagger(100, { grid: grid, from: "" }),
      keyframes: [
        { background: "#f00" },
        { background: "#0f0" },
        { background: "#f0f" },
        { background: "#ff0" },
        { background: "#0ff" },
        { background: "#333" },
      ]
    })
    .add({
      rotate: function () { return anime.random(-18, 18); },
      translateY: function () { return anime.random(-10, 10); },
      translateX: function () { return anime.random(-10, 10); },
      delay: anime.stagger(100, { grid: grid, from: "center" }),
      keyframes: [
        { background: "#f00" },
        { background: "#0f0" },
        { background: "#f0f" },
        { background: "#ff0" },
        { background: "#0ff" },
        { background: "#333" },
      ]
    })
    .add({
      rotate: function () { return anime.random(0, 0); },
      translateY: function () { return anime.random(0, 0); },
      translateX: function () { return anime.random(0, 0); },
      delay: anime.stagger(100, { grid: grid, from: "last" }),
      keyframes: [
        { background: "#f00" },
        { background: "#333" },
      ]
    });

  }, []);

  const handleIconHover = (event) => {
    anime({
      targets: event.target,
      scale: 1.3, // Zoom in
      easing: 'easeOutExpo',
      duration: 300,
    });
  };

  const handleIconLeave = (event) => {
    anime({
      targets: event.target,
      scale: 1, // Zoom out to original size
      easing: 'easeOutExpo',
      duration: 300,
    });
  };

  return (
    <div className="app">
      <ParticlesComponent id="particles" />
      
      {/* Intro Section */}
      <div className="intro">
        <img src={myImage} alt="Tanmay Kulkarni" className="profile-image" />
        <Typography className="profile-title" variant="h3" style={{ color: '#76331c', fontFamily: 'Pacifico, cursive', marginTop: '20px', marginBottom:'20px' }}>Tanmay Kulkarni</Typography>
        <Typography className="profile-subtitle" variant="h5" style={{ color: '#76331c', fontFamily: 'Pacifico, cursive', marginBottom:'10px' }}>Software Engineer</Typography>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <a 
            href="https://drive.google.com/file/d/11I9gCRmVEhig-k7D3LbOeoJx5hpXegr3/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Resume"
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
            style={{marginRight: '20px'}}
          >
            <FontAwesomeIcon icon={faLink} size="x" style={{color: '#76331c'}}/>
          </a>
          <a 
            href="mailto:tanmaykulk29@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Resume"
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
          >
            <FontAwesomeIcon icon={faEnvelope} size="x" style={{color: '#76331c'}}/>
          </a>
        </div>
      </div>

      <Container style={{marginBottom: '50px'}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="profile_about_me">
          <Item>
            <h1 style={{ color: '#76331c',fontFamily: 'Pacifico' }}>About Me</h1>
            <p style={{ textAlign: 'justify' }}>Hi, I am Tanmay Kulkarni, a final-year Computer Science and Engineering undergraduate at Sardar Patel Institute of Technology, Mumbai. My areas of interest are backend development, databases, networks, and distributed systems. I am proficient in object-oriented programming languages such as C++ and Python, and I enjoy solving complex problems while building efficient, scalable systems.</p>
          </Item>
        </Grid>


        <Grid size={6} className="profile_experience">
          <Item>
            <h1 style={{ color: '#76331c',fontFamily: 'Pacifico, cursive' }}>Experience</h1>
            <Grid container spacing={2}>
              {experience_cards.map((card) => (
                <Grid item xs={12} sm={6} key={card.id}>
                  <Grid container spacing={2} alignItems="center">
                    {/* Image on the left */}
                    <Grid item xs={4}>
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        style={{ width: '50px', borderRadius: '8px', objectFit: 'cover' }} 
                      />
                    </Grid>
                    {/* Text on the right */}
                    <Grid item xs={8}>
                      <Typography variant="h6" align="left">{card.title}</Typography>
                      <Typography variant="body2" color="text.secondary" align="left">{card.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
        <Grid size={6} style={{background:'#fff', borderRadius: '5px'}} className="profile_experience">
          <div className="container"></div>
        </Grid>

              
        <Grid size={6} className="profile_education">
          <Item>
            <h1 style={{ color: '#76331c',fontFamily: 'Pacifico, cursive' }}>Education</h1>
            <Grid container spacing={2}>
              {education_cards.map((card) => (
                <Grid item xs={12} sm={6} key={card.id}>
                  <Grid container spacing={2} alignItems="center">
                    {/* Image on the left */}
                    <Grid item xs={4}>
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        style={{ width: '50px', borderRadius: '8px', objectFit: 'cover' }} 
                      />
                    </Grid>
                    {/* Text on the right */}
                    <Grid item xs={8}>
                      <Typography variant="h6" align="left">{card.title}</Typography>
                      <Typography variant="body2" color="text.secondary" align="left">{card.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
        <Grid size={6} style={{background:'#fff', borderRadius: '5px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} className="profile_education">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' , height: '100%'}}>
            {/* Social Media Icons */}
            <a 
                  href="https://leetcode.com/u/tanmay_kulkarni/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Leetcode"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconLeave}
                >
                  <FontAwesomeIcon icon={faCode} size="2x" style={{color: '#76331c'}}/>
                </a>
                <a 
                  href="https://github.com/Tanmaykul29" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconLeave}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" style={{color: '#76331c'}}/>
                </a>
                <a 
                  href="https://www.linkedin.com/in/tanmay-kulkarni-2b5793146/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconLeave}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#76331c'}} />
                </a>
        </div>  
        </Grid>

      </Grid>

      

    </Box>
      </Container>
      
    </div>
  );
}

export default App;
