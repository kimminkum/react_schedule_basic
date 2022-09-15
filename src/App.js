import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Button from "./Button"
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { useState } from 'react';


function App() {
  return (
    <div>
      <div className="header">
        <div className="header_title">
          <h3> 일과 스케줄 표 </h3>
        </div>
        <div className='header_links'>
          <ul className="header_links_icons">
            <li><a href="https://www.twitch.tv/"><FaTwitch/></a></li>
            <li><a href="https://www.youtube.com/"><FaYoutube/></a></li>
          </ul>
        </div>
      </div>

      <div className='main'>
        <div className="optionbar">
          <Button>2</Button>
        </div>
      </div>
    </div>
  );
}

//버튼생성 만들어보기
// 버튼 컴포넌트 에러남

export default App;