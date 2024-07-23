import React from 'react'

const NewsItem =(props)=> {
        let {title, description, imageUrl, newsUrl, author, date} = props
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl?imageUrl:"https://www.shutterstock.com/image-vector/microblog-platform-abstract-concept-vector-600w-1852998859.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"unknown": author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem