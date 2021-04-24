import React, { Component } from 'react';

class MissedArticle extends Component {
  render() {
    return (
      <div className="OneMissedArticle">
        <img className="MissedArticleImage"
          src={this.props.data.image}
          alt="Description of this article"
        />
        <h1>{this.props.data.title}</h1>
        <p className="missedArticleDesc">
          {this.props.data.description}
        </p>
        <div className="AuthorSection">
            <img className="AuthorPhoto"
              src={this.props.data.author.image}
              alt="Author"
            />
            <div>
              <p>{this.props.data.author.name}</p>
              <p>
                {new Date(this.props.data.postedDate).toLocaleString('default', { month: 'short', day: 'numeric' })} . {this.props.data.minutesToRead} mins read
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default MissedArticle;
