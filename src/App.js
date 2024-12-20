import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Oup1 from './comp/inp/output01'
import Ref from './comp/inp/Ref01'

import T1J241203 from './comp/test/241203test1/241203join'
import T1M241203 from './comp/test/241203test1/241203mypage'

import Ax1 from './comp/ax/ax01'

import ProJoin from './comp/pro/Join'
import ProLogin from './comp/pro/Login'
import ProMypage from './comp/pro/Mypage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cal1"} element={<Calc1 />} />

          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/oup1"} element={<Oup1 />} />
          <Route path={"/ref1"} element={<Ref />} />

          <Route path={"/T1J241203"} element={<T1J241203 />} />
          <Route path={"/T1M241203"} element={<T1M241203 />} />

          <Route path={"/ax1"} element={<Ax1 />} />

          <Route path={"/pro1"} element={<ProJoin />} />
          <Route path={"/pro2"} element={<ProLogin />} />
          <Route path={"/pro3"} element={<ProMypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return (
    <div style={{border: '2px blue solid'}}>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link><br/>
      <Link to="/cal1">Cal1로 이동하기</Link><br/>

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link><br/>
      <Link to="/oup1">데이터 출력</Link><br/>
      <Link to='/ref1'>Ref 사용하기</Link><br/>
      <Link to="/pro1">회원가입 창</Link><br/>
      <Link to="/pro2">로그인 창</Link>

      <h4>Axios</h4>
      <Link to="/ax1">AXIOS 사용</Link><br/>

      <h4>241203과제1</h4>
      <Link to="/T1J241203">회원가입</Link><br/>

      
    </div>
  )
}

export default App;
