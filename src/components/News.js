import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {

    const [articles, setArticles] = useState([])
    // const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    


    const capitalizeFirstLetter =(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
        // setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let res = await data.json()
        props.setProgress(70)
        setArticles(res.articles)
        setTotalResults(res.totalResults)
        // setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
        updateNews()
        // eslint-disable-next-line
    },[])
    
    // const handlePreviousClick = async () => {
    //     setPage(page -1)
    //     updateNews()
    // }

    // const handleNextClick = async () => {
    //     setPage(page +1)
    //     updateNews()s
    // }

    const fetchMoreData = async ()=>{
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1 }&pagesize=${props.pageSize}`
        let data = await fetch(url);
        let res = await data.json()
        console.log(res);
        setArticles(articles.concat(res.articles))
        setTotalResults(res.totalResults)
    }

        return (
            <div className='container my-3 '>
                <h2 style={{marginTop: '90px', marginBottom:'35px'}} className='text-center'>NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)} </h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div key={element.url} className="col-md-4 my-3">
                                    <NewsItem title={element.title && element.title.slice(0, 45)} description={element.description && element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News