import { Link } from "react-router-dom";

const Setting = () =>{

    return(
        <>
        <div>세팅 지점입니다.</div>
        <Link to="/">홈</Link><br />
        <Link to="/About">소개</Link>
        </>
    )
}
export default Setting;