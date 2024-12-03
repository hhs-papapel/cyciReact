import { useEffect, useState } from "react";

export default function Testmypage241203() {
    const userlist1 ={
        id1: '',
        pw1: '',
        gender1: '',
        hobby1: '',
        gread1: ''
    }
    const [user, setUser] = useState(userlist1); 


    function start() {

        const id = localStorage.getItem('id');
        const pw = localStorage.getItem('pw');
        const gender = localStorage.getItem('gender');
        const hobby = localStorage.getItem('hobby');
        const gread = localStorage.getItem('gread');

        //const data = localStorage.getItem('userlist');
        // if(data !== '' && data !== 'null') {
        //     setUser(data);
        //     console.log(user)
        // }

        if(id && pw && gender && hobby && gread) {
            const userlist ={
                id1: id,
                pw1: pw,
                gender1: gender,
                hobby1: hobby,
                gread1: gread
            }

            setUser(userlist);
        }
    }


    //처음 화면이 마운트 되었을 때 ( java 이벤트 헨들러: onLoad하고 비슷하다. )
    useEffect(() => {
        start();
    }, [])

    return (
        <div>
            <h1>회원 정보</h1>
            <div>
                <p>아이디: {user.id1}</p>
                <p>비밀번호: {user.pw1}</p>
                <p>성별: {user.gender1}</p>
                <p>취미: {user.hobby1}</p> {/* 배열은 문자열로 결합 */}
                <p>학년: {user.gread1}</p>
            </div>
        </div>
    )
}