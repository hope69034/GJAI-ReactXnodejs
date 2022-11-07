import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div>
   <Link className='HeaderLink' to="/"> Main </Link>  
        <Link className='HeaderLink' to="/Datapull"> Datapull </Link>
        <Link className='HeaderLink' to="/Datapush"> Datapush </Link>
        <Link className='HeaderLink' to="/Login"> Login </Link>
        <Link className='HeaderLink' to="/Join"> Join </Link>
      </div>
    </>
  );
}
export default Header;
