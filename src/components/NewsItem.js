import './NewsItem.css';



//props 같은 통째로 props.article 로 들어갈 경우 중괄호를 안써도 된다
//중괄호를 써야 하는 경우는 구조분해한 값만 들어갈 경우 중괄호를 써야한다.
const NewsItem = ({article}) => {
    //NewsList로 부터 한개의 기사 단위로 컴포넌트를 호출 받음.
	const { title, description, url, urlToImage } = article;
	return (
        // 위에서 만들어진 css스타일이 적용됨.
        // div 태그 대신에 만든 styled components를 씀
		<div className="contain">
            {/* urlToimage 가 있으면 랜더링을 하겠다. */}
			{urlToImage && (
				<div className='thumbnail'>
                    {/* 하이퍼 링크를 눌렀을 때 아무것도 안하게 하는 커맨드 */}
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt="thumbnail" />
					</a>
				</div>
			)}
			<div className='contents'>
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default NewsItem;