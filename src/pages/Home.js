import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>여기가 홈 입니다.</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
            <Link to="/about">소개</Link><br />
            <Link to="/Setting">세팅</Link><br />
            <Link to="/News">뉴스</Link><br />
            <Link to="/NewsList">뉴스리스트</Link>
        </div>
    )
}
export default Home;