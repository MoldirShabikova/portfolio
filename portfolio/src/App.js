import logo from './logo.svg'
import './App.css'
import As from './assets/1.jpg'
import HtmlCss from './assets/html_css.png'
import Js from './assets/js.png'
import ReactImg from './assets/react.png'
import Node from './assets/node_js.png'
import Ruby from './assets/ruby.png'
import MondoDB from './assets/mangodb.png'
import Express from './assets/express.png'
import Sql from './assets/sql.png'
import Boot from './assets/bootstrap.png'
import Jira from './assets/download.png'

import Github from './assets/github.png'
import Tailwind from './assets/tailwind.png'

import Qline from './assets/q-line.png'
import Little from './assets/LittleExp.png'
import Meals from './assets/meals.png'
import Music from './assets/music.png'
import Sound from './assets/Sound.png'
import ToDo from './assets/toDo.png'
import React from 'react'

function App() {
  return (
    <div className='main-container'>
      {/* FIRST */}
 
      <div className='first-box'>
        <h3>MOLDIR SHABIKOVA</h3>
        <h3>Frontend Developer</h3>
        <p>
        "Make complex ideas simple"

</p>

        <img
          className='scroll-down'
          src='https://static.thenounproject.com/png/54414-200.png'
        />
      </div>

      {/* SECOND */}

      <div className='second-box'>
        <div className='second-left'>
          <img src={As} />
        </div>
        <div className='second-right'>
          <h2 className='title'>About Me</h2>
          
       
          <p>
            Hi there! I'm Moldir. I believe in technological solutions and am eager to build products
            that can solve social issues to make a positive impact on the world.
          </p>
    
          <p>
            Working for different projects, it helped me to adapt to the changes
            quickly and made me a mature team worker. A fast learner with strong
            time management and multi-tasking skills. I specialize in front and
            back ends. I deeply care about the product I build and make sure
            it’s usable and pleasant for the most number of people. I practice
            to write well-tested and high-quality code.
          </p>

          <div className='second-footer'>
       
     
              <h2>Education</h2>
             
              <a target='_blank' href='https://enu.kz/en/'>  <p>L. N. Gumilyov Eurasian National University - Bachelor </p>  </a>
            
              <p>Psychology</p>
       
     
             <a target='_blank' href='https://generalassemb.ly/'>   <p>General Assembly - Coding Bootcamp Grad  </p>    </a>
           
             
              <p>Full-Stack Developer</p>
      
          </div>   

          <div className='second-sidebar'>
    
         <a
           target='_blank'
           href='https://www.linkedin.com/in/moldir-shabikova-559b8b222/'
         >
           {' '}
           <img src='https://img.icons8.com/ios/50/000000/linkedin.png' />
         </a>
         <a target='_blank' href='https://github.com/MoldirShabikova'>
           {' '}
           <img src='https://img.icons8.com/ios/50/000000/github--v1.png' />
         </a>
         <a target='_blank' href='https://www.facebook.com/mulya.zhan'>
           <img src='https://img.icons8.com/ios/50/000000/facebook--v1.png' />
         </a>

         <a target='_blank' href='https://www.instagram.com/karpe_diem_m/'>
           <img src='https://img.icons8.com/ios/50/000000/instagram.png' />
         </a>
       </div>
      

          
        </div>
      
      </div>

 

      <h1 className='center'>PROJECTS</h1>
      <div className='forth-box'>

        <div className='forth-project-box'>
          <a
            href='https://q-line.us/'
            target='_blank'
          >
            <img src={Qline} />
            <div className='forth-project-text'>
              <h2>Q Line</h2>
              <p className='forth-middle'>
              At Q Line Logistics, we provide best services throughout the entire shipping from begenning for Reefer and DryVan. Our drivers have 5+ years of driving experiance, which means they can deliver safely and on time. Our unique combination of experience, service and technology allows us to provide professional services that has a high degree of reliability and more affordable solutions.
              </p>
              <p>React | JavaScript | Ruby on Rails | BootStrap | AWS</p>
            </div>
          </a>
        </div>


        <div className='forth-project-box'>
          <a href='https://go4pets.netlify.app/additem' target='_blank'>
            <img src={Music} />
            <div className='forth-project-text'>
              <h2>Music Lyrics App</h2>
              <p className='forth-middle'>
              Improved version of Spotify with a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application
              </p>
              <p>HTML | CSS | JavaScript | React | Redux | Redux Toolkit | API | Tailwind </p>
            </div>
          </a>
        </div>


        <div className='forth-project-box'>
          <a href='https://sound-2021.netlify.app/' target='_blank'>
            <img src={Sound} />
            <div className='forth-project-text'>
              <h2>Sound</h2>
              <p className='forth-middle'>
                Sound is a app where the user can sell or purchase audio tech.
                The user will be able to see available products and their
                details. Once the user creates an account, they can sell their
                own audio products by adding them to the app.
              </p>
              <p>React | JavaScript | Node.js | Express | MangoDB </p>
            </div>
          </a>
        </div>
        <div className='forth-project-box'>
          <a href='https://zealous-hypatia-567fe2.netlify.app/' target='_blank'>
            <img src={Little} />
            <div className='forth-project-text'>
              <h2>Little Explorer</h2>
              <p className='forth-middle'>
              More than just event listings: For parents who love to seek out the coolest, off-the-beaten-track things to do with kids,Little Explorer shares activities that aren't just pleasant time passers, but promise enriching experiences for your family. At large, it should grow as a communication medium and resource sharing channel for all people.
              </p>
              <p>React| Ruby on Rails | Cors| Bcrypt| Axios | AWS</p>
            </div>
          </a>
        </div>
        <div className='forth-project-box'>
          <a href='https://moldirshabikova.github.io/Find-Meals-For-Your-Ingredients/' target='_blank'>
            <img src={Meals} />
            <div className='forth-project-text'>
              <h2>Recipe App</h2>
              <p className='forth-middle'>
                Users can get any recipe of food entering ingredient name. Can
                upload new recipe .
              </p>
              <p>HTML | CSS | JavaScript | API (John Hopkins University)</p>
            </div>
          </a>
        </div>
        <div className='forth-project-box'>
          <a href='https://sad-goldberg-fdd17e.netlify.app/' target='_blank'>
            <img src={ToDo} />
            <div className='forth-project-text'>
              <h2>ToDO</h2>
              <p className='forth-middle'>
                ToDo List App is a kind of app that generally used to maintain
                our day-to-day tasks or list everything that we have to do, with
                the most important tasks at the top of the list, and the least
                important tasks at the bottom. ... We can add more tasks at any
                time and delete a task that is completed.
              </p>
              <p>React | JavaScript | Node.js | AirTable </p>
            </div>
          </a>
        </div>
      </div>
      <h1 className='center'>SKILLS</h1>
      <div className='third-box'>
        <div className='third-small-boxes'>
          <h4>HTML & (S) CSS</h4>
          <img src={HtmlCss} alt='html/css' />
        </div>
        <div className='third-small-boxes'>
          <h4>JavaScript (ES6+)</h4>
          <img src={Js} alt='JS' />
        </div>
        <div className='third-small-boxes'>
          <h4>React</h4>
          <img src={ReactImg} alt='react' />
        </div>
        <div className='third-small-boxes'>
          <h4>Node.js</h4>
          <img src={Node} alt='node.js' />
        </div>
        <div className='third-small-boxes'>
          <h4>Ruby on Rails</h4>
          <img src={Ruby} alt='ruby' />
        </div>
        <div className='third-small-boxes'>
          <h4>MangoDB </h4>
          <img src={MondoDB} alt='MangoDB' />
        </div>
        <div className='third-small-boxes'>
          <h4>Express</h4>
          <img src={Express} alt='Express' />
        </div>
        <div className='third-small-boxes'>
          <h4>SQL</h4>
          <img src={Sql} alt='sql' />
        </div>
        <div className='third-small-boxes'>
          <h4>BootStrap</h4>
          <img src={Boot} alt='sql' />
        </div>  <div className='third-small-boxes'>
          <h4>Jira</h4>
          <img src={Jira} alt='sql' />
        </div>
        <div className='third-small-boxes'>
          <h4>GitHub</h4>
          <img src={Github} alt='sql' />
        </div>

        <div className='third-small-boxes'>
          <h4>Tailwind CSS</h4>
          <img src={Tailwind} alt='sql' />
        </div>
      </div>
      {/* FIFTH */}
      <div className='fifth-box'>
<div>
  
  <h2>Contact me</h2>
  <p>Email : moldirtech@gmail.com</p>
  <p>Phone : +13477775921</p>
</div>


        <h4>
         
        <a
            target='_blank'
            href='https://docs.google.com/document/d/1SlOknMCl7vI_dipPfhmoDGHcyjI1NCjjXOOUjwZsiSg/edit?usp=sharing'
          >
            <button className='resume'>Full Resume</button>
          </a>
        </h4>
      </div>
    </div>
  )
}

export default App
