import { useEffect, useState } from 'react';
import { memberLoginCheck, areaList } from '../api/member'
import { useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //화면이 처음 출력 되었을 때, list에 어떻게 표현 시킬 것인가?
  

  return (
    <div className="App">
      

        <h4>아이디</h4>
      <input 
        type='text'
        placeholder='아이디 입력'
        value={id}
        onChange={e=> {
          setId(e.target.value);
        }}
      />

<h4>비밀번호</h4>
      <input 
        type='text'
        placeholder='비밀번호 입력'
        value={pw}
        onChange={e=> {
          setPw(e.target.value);
        }}
      />

        <br/><br/>
    <input type='button' value='로그인' onClick={
        () => {
          let obj = new  Object();
          obj.userId = id;
          obj.userPw = pw;

          const check = memberLoginCheck(obj);

          //성공!
          check.then(res => {
            console.log('===== 성공!!!');
            console.log(res);
            if(res.data.data == 'Y'){
                localStorage.setItem('id', id);
                navigate('/pro3');
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다.");
            }
          })

          //실패
          check.catch(err => {
            console.log(err);
          })
        }
      }/>

    </div>



  );
}

export default Login;