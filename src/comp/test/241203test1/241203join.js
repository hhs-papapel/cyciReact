import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Testjoin241203() {

    const navigate = useNavigate();

    const [userId, setuserId] = useState('');
    const [userPw, setuserPw] = useState('');
    const [area, setArea] = useState(''); //빈 공백
    const [sel, setSel] = useState('1학년'); //selectBox 기본값 

    const users ={
        id: '아이디',
        pw: '비밀번호',
        gender: '성별',
        hobby: '취미',
        gread: '학년'
    }
    const [user,setuser] = useState(users);

    const stuList = [
        {
          name: '공부'
        },
        {
          name: '운동'
        },
        {
          name: '독서'
        },
        {
          name: '여행'
        }
      ]
    const [hobby, setHobby] = useState([]);

    //라디오 버튼 변경시 동작
    function changeArea(e) {
        setArea(e.target.value);
    }

    //hobby 체크 확인하기
    function handleHobby(e) {
        //이미 체크가 되어있을 경우
        if(hobby.includes(e.target.value)) {
        //2. 1번에서 제외된 리스트를 다시 hobby에 저장.
        setHobby(
            //1. 체크된 결과값과 똑같은 값은 제외 처리
            hobby.filter(item => item !== e.target.value)
        )
        }
        //체크가 안 되어 있을 경우
        else {
        //마지막에 입력된 값을 추가 한다.
        setHobby([...hobby, e.target.value]);
        }
    }


    useEffect(() => {
        localStorage.setItem('userlist', user);
        

    }, [user]);

    function send() {

        const userlist ={
            id: userId,
            pw: userPw,
            gender: area,
            hobby: hobby,
            gread: sel
        }
        setuser(userlist);
        
        localStorage.setItem('id', userId);
        localStorage.setItem('pw', userPw);
        localStorage.setItem('gender', area);
        localStorage.setItem('hobby', hobby);
        localStorage.setItem('gread', sel);
        
        navigate('/T1M241203');
    }

    return (
        <div>

        <h1>회원가입</h1>
        <h4>아이디</h4>
        <input
            type='text'
            placeholder='text'
            value={userId}
            onChange={
            e=> setuserId(e.target.value)
            }/>
            <h4>비밀번호</h4>
        <input
            type='text'
            placeholder='text'
            value={userPw}
            onChange={
            e=> setuserPw(e.target.value)
            }/>
            
            <h4>성별</h4>
            <input
            type='radio'
            name='area'
            value='남자'
            onChange={
                e => changeArea(e)
            } />남자
            <input
            type='radio'
            name='area'
            value='여자'
            onChange={
                e => changeArea(e)
            } />여자

            <h4>취미</h4>
            {stuList.map((item, index) =>  (
                <div key={index}>
                    <input
                    type='checkbox'
                    value={item.name}
                    checked={hobby.includes(item.name)}
                    onChange={handleHobby}
                    />{item.name}
                </div>
                ))

            }

            <h4>학년</h4>
            <select onChange={
                e=> { setSel(e.target.value) }
            }>
                <option value='1학년'>1학년</option>
                <option value='2학년'>2학년</option>
                <option value='3학년'>3학년</option>
            </select>

            <br></br>
            <input
                type="button"
                value="등록"
                onClick={send}
                />

            </div>
        )
}