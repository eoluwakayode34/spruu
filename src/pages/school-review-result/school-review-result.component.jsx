import React, { useState, useEffect } from "react";
import "./review-result.styles.scss";
import { Link } from "react-router-dom";
import StarRatings from "../../component/star-ratings/star-ratings.component";
import ProgressBar from "../../component/progress-bar/progress-bar.component";
import SchoolData from "../../data/data";
import Filter from '../../component/filter/filter.component'
import ReviewList from '../../component/review-list/review-list.component'

// suggestions={suggestions}
// onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
// onSuggestionsClearRequested={this.onSuggestionsClearRequested}
// getSuggestionValue={getSuggestionValue}
// renderSuggestion={renderSuggestion}
// renderSectionTitle={renderSectionTitle}
// getSectionSuggestions={getSectionSuggestions}
// inputProps={inputProps}

const SchoolReviewResult = (props) => {
  const [percentage, setPercentage] = useState(60);
  const [viewData, setViewData] = useState(null);

  const id = props.match.params.slug;

  useEffect(() => {
    const data = SchoolData.find(
      (element) => element.title === "school"
    ).schoolData.find((element) => element.id === id);

    setViewData(data);
    console.log(data, id);
  }, [id]);

  return viewData ? (
    <div className="review-result-container">
      <div className="review-person-box">
        <div className="review-image-container">
          <img src={viewData.imgUrl} alt="" className="review-image" />
        </div>
        <div className="name-and-attr">
          <h3 className="result-name">{viewData.name}</h3>
          <h4 className="result-description">{viewData.subData}</h4>
          <div className="overall-s-r-b">
            <p className="text-medium">Overall Quality </p>
            <StarRatings
              rating={2.403}
              starDimension="2rem"
              starSpacing=".5rem"
              starRatedColor="#CA8831"
            />
          </div>
          <Link exact to={"/review/" + viewData.name} className="review-btn">
            REVIEW {viewData.name}
          </Link>
        </div>
      </div>

      <div className="review-bar"> HIGHLIGHTS </div>
      <div className="review-category-box">
        <div className="rating-category">
          <div className="rating-category-item">
            <div className="rating-category-item-text">Career Prospects</div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Extracurricular Activities
            </div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Safety and Location</div>
            <StarRatings
              rating={3}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Learning and materials
            </div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Food and Health</div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              behaviour and Morals
            </div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Learning Environment
            </div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Personal Development
            </div>
            <StarRatings
              rating={2.403}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>
        </div>
        <div className="rating-distribution">
          <h4 className="rating-distribution-header">REVIEW DISTRIBUTION</h4>

          <div className="distribution-progress">
            <div className="distribution-progress-text">5 Star</div>
            <ProgressBar percentage={percentage} />
            <div className="distribution-progress__percentage">
              {percentage}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">4 Star</div>
            <ProgressBar percentage={percentage} />
            <div className="distribution-progress__percentage">
              {percentage}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">3 Star</div>
            <ProgressBar percentage={percentage} />
            <div className="distribution-progress__percentage">
              {percentage}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">2 Star</div>
            <ProgressBar percentage={percentage} />
            <div className="distribution-progress__percentage">
              {percentage}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">1 Star</div>
            <ProgressBar percentage={percentage} />
            <div className="distribution-progress__percentage">
              {percentage}%
            </div>
          </div>
        </div>
      </div>

      <div className="diff-level">
        <div className="level-box">
          <div className="diff-level-text">DIFFICULTY LEVEL</div>
          <div className="diff-level-selected">
            <div className="diff-level-selected-item">very Easy</div>
            <div className="diff-level-selected-item">Easy</div>
            <div className="diff-level-selected-item">neutral</div>
            <div className="diff-level-selected-item">difficult</div>
            <div className="diff-level-selected-item">very difficult</div>
          </div>
        </div>

        <div className="would-take-again">
          <h3 className="would-take-again-per">75%</h3>
          <p>
            
            Would take this 
            lecturer a Again
          </p>
        </div>
      </div>

      <div className="review-bar"> 274 Review </div>

      <div>
        <Filter/>

        <ReviewList/>
      </div>
    </div>
  ) : null;
};

export default SchoolReviewResult;
