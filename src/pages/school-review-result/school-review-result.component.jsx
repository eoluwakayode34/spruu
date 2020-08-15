import React, { useState, useEffect } from "react";
import "./review-result.styles.scss";
import { Link } from "react-router-dom";
import StarRatings from "../../component/star-ratings/star-ratings.component";
import ProgressBar from "../../component/progress-bar/progress-bar.component";
import Filter from '../../component/filter/filter.component'
import ReviewList from '../../component/review-list/review-list.component';
import Select from "react-select";
import {
  overalRating,
  Date,
  Difficulty,
  takeAgain,
} from "../../component/select-dropdown-data/select-dropdown.component";

// suggestions={suggestions}
// onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
// onSuggestionsClearRequested={this.onSuggestionsClearRequested}
// getSuggestionValue={getSuggestionValue}
// renderSuggestion={renderSuggestion}
// renderSectionTitle={renderSectionTitle}
// getSectionSuggestions={getSectionSuggestions}
// inputProps={inputProps}

const SchoolReviewResult = (props) => {
  const [viewData, setViewData] = useState(null);
  const [schoolInfo, setSchoolInfo] = useState(null);

  const id = props.match.params.slug;

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    fetch(`http://13.244.78.114:4000/spruu/api/v1/user/institution/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data;
        console.log(result);

        setSchoolInfo(result);
      });
  }, [id]);

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    fetch(`http://13.244.78.114:4000/spruu/api/v1/user/institution/review/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data;
        console.log(result);

        setViewData(result);
      });
  }, [id]);

  // function reviewDate(d){
  //   let sDate = new Date(d);
  //   return sDate;
  // }

  return viewData ? (
    <div className="review-result-container">
      <div className="review-person-box">
        <div className="review-image-school-container">
          <img src={viewData.imgUrl} alt="" className="review-image" />
        </div>
        <div className="name-and-attr">
          <h3 className="result-name">{schoolInfo.name}</h3>
          <h4 className="result-description">{schoolInfo.state +','+ schoolInfo.country}</h4>
          <div className="overall-s-r-b">
            <p className="text-medium">Overall Quality </p>
            <StarRatings
              rating={2.403}
              starDimension="2rem"
              starSpacing=".5rem"
              starRatedColor="#CA8831"
            />
          </div>
          <Link
            exact
            to={"/school-review/" + id}
            className="review-btn"
          >
            REVIEW {schoolInfo.name}
          </Link>
        </div>
      </div>

      <div className="review-bar"> HIGHLIGHTS </div>
      <div className="review-category-box">
        <div className="rating-category">
          <div className="rating-category-item">
            <div className="rating-category-item-text">
            Career Prospects
            </div>
            <StarRatings
              rating={schoolInfo.careerProspect}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Food and Health</div>
            <StarRatings
              rating={schoolInfo.foodAndHealth}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Extracurricular Activities</div>
            <StarRatings
              rating={schoolInfo.extraCurricularActivities}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Behaviour and Morals
            </div>
            <StarRatings
              rating={schoolInfo.behaviourAndMorals}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Safety and Location</div>
            <StarRatings
              rating={schoolInfo.safetyAndLocation}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Learning Environment</div>
            <StarRatings
              rating={schoolInfo.learningEnvironment}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Learning and materials</div>
            <StarRatings
              rating={schoolInfo.learningEnvironment}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Personal Development</div>
            <StarRatings
              rating={schoolInfo.personalDevelopment}
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
            <ProgressBar
              percentage={viewData.reviewDistribution.fiveStar ? Math.floor(viewData.reviewDistribution.fiveStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.fiveStar ? Math.floor(viewData.reviewDistribution.fiveStar) : 0}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">4 Star</div>
            <ProgressBar
              percentage={viewData.reviewDistribution.fourStar ? Math.floor(viewData.reviewDistribution.fourStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.fourStar ? Math.floor(viewData.reviewDistribution.fourStar): 0}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">3 Star</div>
            <ProgressBar
              percentage={viewData.reviewDistribution.threeStar ? Math.floor(viewData.reviewDistribution.threeStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.threeStar ? Math.floor(viewData.reviewDistribution.threeStar) : 0}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">2 Star</div>
            <ProgressBar
              percentage={viewData.reviewDistribution.twoStar ? Math.floor(viewData.reviewDistribution.twoStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.twoStar ? Math.floor(viewData.reviewDistribution.twoStar) : 0}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">1 Star</div>
            <ProgressBar
              percentage={viewData.reviewDistribution.oneStar ? Math.floor(viewData.reviewDistribution.oneStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.oneStar ? Math.floor(viewData.reviewDistribution.oneStar): 0}%
            </div>
          </div>
        </div>
      </div>

      <div className="diff-level">
        <div className="level-box">
          <div className="diff-level-text">DIFFICULTY LEVEL</div>
          <div className="diff-level-selected">
            <div
              className={
                viewData.hightlights.difficulty === 1
                  ? "diff-level-selected-item very-easy"
                  : "diff-level-selected-item"
              }
            >
              very Easy
            </div>
            <div
              className={
                viewData.hightlights.difficulty === 2
                  ? "diff-level-selected-item easy"
                  : "diff-level-selected-item"
              }
            >
              Easy
            </div>
            <div
              className={
                viewData.hightlights.difficulty === 3
                  ? "diff-level-selected-item neutral"
                  : "diff-level-selected-item"
              }
            >
              neutral
            </div>
            <div
              className={
                viewData.hightlights.difficulty === 4
                  ? "diff-level-selected-item difficult"
                  : "diff-level-selected-item"
              }
            >
              difficult
            </div>
            <div
              className={
                viewData.hightlights.difficulty === 5
                  ? "diff-level-selected-item very-difficult"
                  : "diff-level-selected-item"
              }
            >
              very difficult
            </div>
          </div>
        </div>

        <div className="would-take-again">
          <h3 className="would-take-again-per">
            {Math.floor(viewData.reviewDistribution.schoolAgain)}%
          </h3>
          <p>
            {" "}
            Would take this <br />
            lecturer a Again
          </p>
        </div>
      </div>

      <div className="review-bar"> {viewData.totalReviews} Review </div>

      <div>
        <Select
          defaultValue={overalRating[0]}
          label="Single select"
          options={overalRating}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#E4E3DD",
              primary: "#CA8831",
            },
          })}
        />

        <Select
          defaultValue={Date[0]}
          label="Single select"
          options={Date}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#E4E3DD",
              primary: "#CA8831",
            },
          })}
        />

        <Select
          defaultValue={Difficulty[0]}
          label="Single select"
          options={Difficulty}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#E4E3DD",
              primary: "#CA8831",
            },
          })}
        />

        <Select
          defaultValue={takeAgain[0]}
          label="Single select"
          options={takeAgain}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#E4E3DD",
              primary: "#CA8831",
            },
          })}
        />
      </div>

     { viewData.review.map( review => <div className="review-result-list-container ">
        <div className="flex mb-3 br-5">
          <div className="rating-category-item-text pd3">  <StarRatings
                rating={review.classroomInteraction}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              /></div>
        <div className="rating-category-item-text pd3">
          {/* { reviewDate(review.createdAt) } */}
                    {review.createdAt}

          </div>
          <div className="rating-category-item-text pd3">{
          'Very Difficulty'
          }</div>
          <div className="rating-category-item-text pd3">{review.takeAgain ? 'Yes' : 'No'}</div>
        </div>
        <div className="review-category-box">
          <div className="rating-distribution" id='align-center'>
            <h4 className="rating-distribution-header" >STUDENT A</h4>
          </div>
          <div className="rating-category" id="bg-none">
            <div className="rating-category-item">
              <div className="rating-category-item-text">
                Classroom Interaction
              </div>
              <StarRatings
                rating={review.classroomInteraction}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Patience</div>
              <StarRatings
                rating={review.patience}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Communication</div>
              <StarRatings
                rating={review.communication}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">
                Knowledge of Material
              </div>
              <StarRatings
                rating={review.knowledgeOfMaterial}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Organization</div>
              <StarRatings
                rating={review.organization}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Compassion</div>
              <StarRatings
                rating={review.compassion}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Authority</div>
              <StarRatings
                rating={review.authority}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="rating-category-item">
              <div className="rating-category-item-text">Rapport</div>
              <StarRatings
                rating={review.rapport}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>
            
          </div>  

        </div>
        <div className='user-review'> { 'Review:'  + ' ' + review.review}</div>
      </div>)}
    </div>
  ) : null;
};

export default SchoolReviewResult;
