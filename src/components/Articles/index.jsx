import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./ArticleCard";
import ArticleData from "./ArticleData";
import "./article.css";

const Articles = () => {
  return (
    <>
      <div className="mb-5">
        {" "}
        <h1 className="text-center">Some of Our Work</h1>
      </div>

      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-12 mx-auto px-4">
            <div className="row gy-4 gx-3">
              {ArticleData.map((val, ind) => {
                return (
                  <ArticleCard
                    className="display-1"
                    id="cards"
                    key={ind}
                    imgsrc={val.imgsrc}
                    article_headline={val.article_headline}
                    summary={val.summary}
                    publisher={val.publisher}
                    link={val.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
