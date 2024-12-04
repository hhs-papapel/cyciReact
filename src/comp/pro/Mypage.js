import { useEffect, useState } from "react";

function Mypage() {

    const [id, setId] = useState(''); 
 

    function start() {

        const id1 = localStorage.getItem('id');
        if(id1) {
            setId(id1);
        }
    }
    useEffect(() => {
        start();
    }, [])


  return (
    <div className="App">
        <h1>{id}님 안녕하세요!!</h1>

       
    </div>



  );
}

export default Mypage;