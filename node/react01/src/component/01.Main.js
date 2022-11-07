import { Link } from "react-router-dom";
 

function Main() {
  return (
    <>
      <div>
        <header className="mainheader">
          <h3>Welcom to SHworld</h3>
          <Link to="/Datapull">
           풀 로
          </Link>
        </header>
      </div>
    </>
  );
}
export default Main;
