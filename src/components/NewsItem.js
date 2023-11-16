import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, source, author, date} = this.props;
    return (
      <>
      <div className='my-3 m-3'>
      <div className="card bg-dark text-light" style={{minHeight: '30rem', maxHeight: '30rem', overflow: 'auto'}}>
      <div className='position-absolute' style={{'justifyContent': 'flex-end', 'display':'flex','right': '0'}}><span className="badge rounded-pill bg-danger"> {source} </span></div>
        <img src={!imageUrl?"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg":imageUrl} onError={(e)=>{e.target.onerror = null; e.target.src="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"}} className="card-img-top" alt="Speed News"/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{!description?"In a stunning turn of events, breaking news just in. Stay tuned for the latest updates on this rapidly developing story, as our team works to bring you the most up-to-date information.":description}...</p>
          <p className="card-text"><small className="text-white-50">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default NewsItem
