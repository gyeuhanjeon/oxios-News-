import { useState } from "react";
import axios from "axios";


const News = () => {
    const [data, setData] = useState('');
    //onClick 이 일어났을때 useState 로 랜더링이 일어난다. 즉 통신이 일어날 때 랜더링이 발생함.
    //그래서 통신에 좀더 자연스러운건 useState가 아니라 useEffect 이다. didMoount 되자마자 통신가능.
    const onClick = () => {
        // jasonplaceholder 라고 해서 jason으로 데이터를 주고 받을 수 잇는 가상의 서버 제공
        // onClick이 발생했을때 서버에다가 get방식으로 데이터를 요청한다.
        axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=1189402c98c14d028743322c2666449d ")
            // 요청의 결과로 then에 응답이 온다. 응답에 대한 값을 받아온다.
            // 보통은 이 resposn 에 대해 .을 찍고 부분적인 데이터만을 요청하기도 한다.
            // then은 서버가 데이터를 날려줬을때 자동으로 응답이 옴(비동기식으로 작동.)
            // 응답 시간을 정해줄 수 없어 몇초까지만 응답을 받는 예외처리 등을 걸어 줄 수 있다.
            .then(response => {
                setData(response.data);
            });
    }

    return (
        <div>

            <div>
                <button onClick={onClick}>서버 정보 불러 오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    );
};

export default News;
