import axios from 'axios'; //axios 사용

//spring boot api의 URL을 정의
const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {

    //글목록 데이터를 가져오는 함수
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    //글 작성 함수를 추가, axios의 post함수를 사용해서 통신한다.
    createBoard(board){
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(no){
        return axios.get(BOARD_API_BASE_URL + "/" + no);
    }

    update(no, board){
        return axios.put(BOARD_API_BASE_URL + "/" + no, board);
    }
}

export default new BoardService();