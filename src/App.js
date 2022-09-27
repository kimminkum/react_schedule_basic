import logo from './logo.svg';
import './App.css';
import Button from "./Button/Button";
// import Sbutton from "./Button/Sbutton";
import Board from "./Board";
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
// import { BsFillPencilFill, BsTable } from 'react-icons/bs';


function App() {
  return (
    <div>
      {/* 제목과 트위치 유튜브등 자주보는 곳 링크 */}
      <div className="header">

        {/* 제목 */}
        <div className="header_title">
          <h3><b>일과 스케줄 표</b></h3>
        </div>

        {/* 링크 */}
        <div className='header_links'>
          <ul className="header_links_icons">
            <li><a href="https://www.twitch.tv/" target='_blank'><FaTwitch/></a></li>
            <li><a href="https://www.youtube.com/" target='_blank'><FaYoutube/></a></li>
          </ul>
        </div>
      </div>

      <div className='main'>
        {/* 스케쥴 표 버튼과 생성, 수정, 삭제 버튼  */}
        {/* <div className="optionbar">
          <Button>1</Button>
          <Button>+</Button>
        </div> */}
      </div>

      <div className='schedule'>
        {/* 스케쥴 표 */}
        <div className='schedule_table'>
          <Board className='table'/>
        </div>

        {/* 스케쥴 표 관련 버튼 */}
        {/* <div className='schedule_option'>
          <Sbutton>+</Sbutton>
          <Sbutton>-</Sbutton>
          <Sbutton><BsFillPencilFill/></Sbutton>
        </div> */}
      </div>
    </div>
  );
}

export default App;
