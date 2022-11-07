import { Link } from "react-router-dom";
import axios from "axios";

 
 


function Datapull() {

 

 

const ck = () => {
    axios.get('http://localhost:3001/getData')
      .then((res) => { console.log('res', res.data) })
      .catch((err) => { console.log('err', err) });
  }
 

  return (
    <>
 풀<br></br>
 <button onClick={ck}>데이터 가져오기</button>
    </>
  );
}
export default Datapull;
