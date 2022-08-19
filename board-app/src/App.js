import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';


//App()함수에 최상위 컴포넌트들을 정의함
function App() {
  return (
    <div> 
      <Router>
        <HeaderComponent/> 
          <div className="container">
            <Switch>     
              <Route path = "/" exact element = {<ListBoardComponent />}></Route>
              <Route path = "/board" element = {<ListBoardComponent />}></Route>
              <Route path = "/create-board/:no" element = {<CreateBoardComponent />}></Route>
              <Route path = "/read-board/:no" element = {<ReadBoardComponent />}></Route>
            </Switch>
          </div>
        <FooterComponent/>  
      </Router>
    </div>
  );
}

//이 문제는 구성 요소가 라우터에서 렌더링한 구성 요소의 중첩된 자식이거나 
//라우터 소품을 전달하지 않았거나 구성 요소가 라우터에 전혀 연결되어 있지 않고 경로와 별도의 구성 요소로 렌더링되는 경우
//오류가 발생할 수 있습니다.
// -> withRouter(App)으로 전달하여 해결 -> 라우트 컴포넌트가 아닌곳(일반 컴포넌트)에서 match, location, history를 사용해야할 때 쓰였다
// 버전 업데이트 이후 withRouter 사라짐
//  ->
// export default withRouter(App);
export default App;

/* 1. <Router> ==>  react-router의 적용대상의 컴포넌트를 <Router>로 감싼다. 
    2. <HeaderComponent/> ==> 웹페이지의 헤더부분을 표시하는 컴포넌트들을 정의
    3. <Routes>  ==> URL별로 페이지를 전환하기 위한 최상위 컴포넌트들을 <Routes>로 감싼다.
    4. <FooterComponent/>  ==> 웹페이지의 푸터부분을 표시하는 컴포넌트를 정의
    5.
  */


