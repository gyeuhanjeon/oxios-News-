import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import './NewsList.css';


const NewsList = () => {
    const [articles, setArticles] = useState(null);
    // 로딩을 안걸어 놓으면 통신이 멈춘건지 아닌지 확인이 안됨
    const [loading, setLoading] = useState(false);



    // useEffect에다가 axios 를 async/await로 등장하게 하려면 함수를 만들어서
    // async/await를 걸고 함수를 한번 호출 해줘야 작동한다
    
    useEffect(() => {//화면이 랜더링 될때 해야할 일을 여기서 구현함

        const fetchData = async () => {//useEffect Hook에서 async/await를 사용하기 위해서는
            // 함수가 필요하다. 왜 그러냐면 useEffect에 async를 못붙힌다. react가 못붙이게 해놓음
            // 그래서 내부에서 useEffect 내부에서 함수를 감싸고 한번 더 호출 해 준다.

            setLoading(true);//화면이 로딩중임을 표시함

            try {//서버에 대한 요청을 시도함
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=1189402c98c14d028743322c2666449d",
                );//원래 여기에 .then을 찍어서 사용했었음

                // 반응온 response데이터 중에서 articles 만 가져옴.
                //동기처럼 보이지만 비동기로 받음. 즉 통신의 결과가 안들어 오더라도 다음 코드는 실행됨.
                // 요청을 해놓고 다른 코드를 먼저 행하고 있음.(->비동기) 결과가 도착후 업데이트됨.
                setArticles(response.data.articles);
                //이때 setArticles 는 useState 함수이기 때문에 리랜더링이 된다.
                //즉 데이터를 받고 나서 setArticles 하고 나서 랜더링이 발생한다.
                //하지만 useEffect 함수는 또 작동안한다->의존성 배열에 아무것도 없기 때문에

            } catch (e) {//서버 요청이 실패함(실패하면 catch 구문으로 발생.)
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();//만든 함수를 호출해줘야 기능이 작동하기에 useEffect 내부에서 호출함(세트임)

    }, []);//[]의존성 배열의 의미, 
    //배열을 비워두면 값이 변경된 상태를 체크하지 않기 때문에 처음에만 해당 함수실행.

    if(loading) {
        return (
        <div className='NewsListBlock'>대기 중...</div>
    )}
    // article이 정보가 없으면 return null을 해줌.
    if(!articles) return null;

    return(
        <div className='NewsListBlock'>
            {/* 서버로 부터 데이터가 들어오면 map으로 새로운 데이터를 가공함 
            article 기사의 갯수만큼 url 은 유일할테니까 key값으로 줌*/}
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
}
export default NewsList;