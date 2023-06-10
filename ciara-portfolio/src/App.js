import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import { ReactComponent as Logo } from './logo.svg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
