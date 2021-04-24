import React, { Component } from 'react';
import './BlogHomepage.css';
import ForYouArticle from './ForYouArticle';
import MissedArticle from './MissedArticle';
import missedArticles from './missed-articles.json';
import forYouArticles from './your-articles.json';


class BlogHome extends Component {
  render() {
    return (
      <div className="BlogHomepage">
        <h1>For you</h1>
        <hr></hr>
        <div id="ForYouArticlesBox">
          <ForYouArticle data={forYouArticles[0]} />
          <ForYouArticle data={forYouArticles[1]} />
          <ForYouArticle data={forYouArticles[2]} />
          <ForYouArticle data={forYouArticles[3]} />
        </div>
        <br></br>
        <h2>In case you missed it</h2>
        <hr></hr>
        <div id="MissedArticlesBox">
          <MissedArticle data={missedArticles[0]} />
          <MissedArticle data={missedArticles[1]} />
          <MissedArticle data={missedArticles[2]} />
        </div>
      </div>
    );
  }
}

export default BlogHome;
