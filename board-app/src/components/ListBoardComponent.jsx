import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component {
    constructor(props){
        super(props)

        //페이지에 표시될 글 목록 데이터를 넣기위한 변수 'boards'를 this.state에 선언
        this.state = {
            boards: []
        }

        //글작성 버튼을 클릭했을 때 동작하는 'createBoard'함수를 바인드
        this.createBoard = this.createBoard.bind(this);
    }

    //리액트의 생명주기 메소드인 'componentDidMount'에서 'BoardService'의 메소드를 호출해서 데이터를 가져온다.
    // -> this.state에 선언한 변수의 값을 변경하기 위해선 setState를 사용해야함.
    componentDidMount(){
        BoardService.getBoards().then((res) =>{
            this.setState({boards : res.data});
        });
    }

    //글작성 버튼 클릭시, 글 작성 페이지로 이동하게 해주는 함수를 정의
    createBoard(){
        this.props.history.push('/create-board/_create');
    }

    readBoard(no){
        this.props.history.push('/read-board/${no}');
    }
    
    //render()함수의 내용이 실제 웹페이지에 표시된다.
    //maps()함수를 사용해서 'board'의 데이터를 출력한다.
    render() {
        return (
        <div>
            {/* 타이틀 */}
            <h2 className="text-center">Boards List</h2>
            
            {/* 글작성 버튼 */}
            <div className = "row">
                <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
            </div>

            {/* 게시물 목록 */}
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>타이틀</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>갱신일</th>
                            <th>좋아요 수</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.boards.map(
                                board=>
                                <tr key={board.no}>
                                    <td>{board.no}</td>
                                    <td> <a onClick = { () => this.readBoard(board.no)}>{board.title}</a></td>
                                    <td>{board.title}</td>
                                    <td>{board.memberNo}</td>
                                    <td>{board.createdTime}</td>
                                    <td>{board.updatedTime}</td>
                                    <td>{board.likes}</td>
                                    <td>{board.counts}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default ListBoardComponent;
