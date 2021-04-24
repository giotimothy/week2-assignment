import React, { Component } from 'react';

class ForYouArticle extends Component {
  render() {
    return (
      <div className="OneForYouArticle">
        <img className="ArticleImage"
          src={this.props.data.image}
          alt="Description of this article"
        />
        <div className="RightOfImage">
          <h1>{this.props.data.title}</h1>
          <p className="ForYouArticleDesc">
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
      </div>
    );
  }
}

export default ForYouArticle;
