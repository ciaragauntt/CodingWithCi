import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { ReactComponent as Logo } from './logo.svg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


function App() {
  return (
    <div className="App" id="outer-container">
  
     <Logo id="logo"/>
  
     <div id="page-wrap">
     </div>
     <ScrollContainer>
      <ScrollPage page={0}>
        <div id="page-0">
        <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
          <div id="name-logo">Hello World!</div>
        </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut())}>
          <box>About Me</box>
          <h2>Hello and welcome to my portfolio. I am a recent graduate from the University of Utah
            full stack web development bootcamp. Throughout the certification process I have gained 
            many front end and back end skills that will allow me to be an asset to any dev team.
          </h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut())}>
          <box>Skills</box>
        </Animator>
      </ScrollPage>

        <ScrollPage page={3}>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut())}>
          <box>Projects</box>
        </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
          <box>Contact</box>
        </Animator>
      </ScrollPage>
  
     </ScrollContainer>
    </div>
  );
}

export default App;
