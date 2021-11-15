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

import Github from './assets/github.png'
import Tailwind from './assets/tailwind.png'

import Little from './assets/LittleExp.png'
import Meals from './assets/meals.png'
import Sound from './assets/Sound.png'
import ToDo from './assets/toDo.png'
import React from 'react'

function App() {
  return (
    <div className='main-container'>
      {/* FIRST */}
      <div className='first-box'>
        <h1>I AM MOLDIR SHABIKOVA</h1>
        <p>an engineer, a creative, an innovator, a leader</p>
        <img
          className='scroll-down'
          src='https://static.thenounproject.com/png/54414-200.png'
        />
      </div>

      {/* SECOND */}
      <h1 className='center'>ABOUT</h1>
      <div className='second-box'>
        <div className='second-left'>
          <img src={As} />
        </div>
        <div className='second-right'>
          <h2 className='title'>Software Engineer \ Full Stack Developer</h2>
          <h4>Based in NYC but open to relocate.</h4>
          <img src='https://img.icons8.com/emoji/48/000000/statue-of-liberty-emoji.png' />
          <p>
            I believe in technological solutions and am eager to build products
            that can solve social issues to make a positive impact on the world.
          </p>
          <hr></hr>
          <p>
            Working for different projects, it helped me to adapt to the changes
            quickly and made me a mature team worker. A fast learner with strong
            time management and multi-tasking skills. I specialize in front and
            back ends. I deeply care about the product I build and make sure
            it’s usable and pleasant for the most number of people. I practice
            to write well-tested and high-quality code.
          </p>

          <div className='second-footer'>
            <h3>
              <p>BMCC - Associate</p>
              <a target='_blank' href='https://www.bmcc.cuny.edu/'></a>
              <img src='https://img.icons8.com/small/16/000000/long-arrow-down.png' />
              <p> "Comp. Network Tech"</p>
            </h3>
            <h3>
              <p>L. N. Gumilyov Eurasian National University - Bachelor</p>
              <a target='_blank' href='https://enu.kz/en/'></a>
              <img src='https://img.icons8.com/small/16/000000/long-arrow-down.png' />
              <p>"Psychology"</p>
            </h3>
            <h3>
              <p>GA - Coding Bootcamp Grad</p>
              <a target='_blank' href='https://generalassemb.ly/'></a>
              <img src='https://img.icons8.com/small/16/000000/long-arrow-down.png' />
              <p> "Full-Stack Developer"</p>
            </h3>
          </div>
          <a
            target='_blank'
            href='https://docs.google.com/document/d/1DJAPYSx7Vb_UoC4B3ATOw1Yt6-xCPqB71I9Rlmjitto/edit?usp=sharing'
          >
            <button className='resume'>Full Resume</button>
          </a>
        </div>
        <div className='second-sidebar'>
          <a target='_blank' href='mailto:moldirshb@gmail.com'>
            <img src='https://img.icons8.com/ios/50/000000/new-post.png' />{' '}
          </a>
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

      {/* THIRD */}
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
          <h4>GitHub</h4>
          <img src={Github} alt='sql' />
        </div>

        <div className='third-small-boxes'>
          <h4>Tailwind CSS</h4>
          <img src={Tailwind} alt='sql' />
        </div>
      </div>

      {/* FORTH */}
      <h1 className='center'>PROJECTS</h1>

      <div className='forth-box'>
        <div className='forth-project-box'>
          <a
            href='https://github.com/aslanshaken/KZImmigrantGuide'
            target='_blank'
          >
            <img src={Little} />
            <div className='forth-project-text'>
              <h2>Little Explorer</h2>
              <p className='forth-middle'>
                More than just event listings: For parents who love to seek out
                the coolest, off-the-beaten-track things to do with kids,Little
                Explorer shares activities that aren't just pleasant time
                passers, but promise enriching experiences for your family. At
                large, it should grow as a communication medium and resource
                sharing channel for all people.
              </p>
              <p>React | JavaScript | PostgreSQL | Ruby on Rails | AWS</p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/covid-19' target='_blank'>
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
          <a href='https://github.com/aslanshaken/cycleshop' target='_blank'>
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
          <a href='https://github.com/MoldirShabikova/toDo-App' target='_blank'>
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

      {/* FIFTH */}
      <div className='fifth-box'>
        <h4>
          © Copyright 2021 | All Rights Reserved | Made with{' '}
          <img src='https://img.icons8.com/office/16/000000/filled-like--v1.png' />{' '}
          from NYC
        </h4>
      </div>
    </div>
  )
}

export default App
