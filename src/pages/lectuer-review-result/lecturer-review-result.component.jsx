import React, { useState, useEffect } from "react";
import "../school-review-result/review-result.styles.scss";
import { Link } from "react-router-dom";
import StarRatings from "../../component/star-ratings/star-ratings.component";
import ProgressBar from "../../component/progress-bar/progress-bar.component";
import Select from "react-select";
import CheckBox from '../../component/filter/filter.component'
import {
  overalRating,
  Date,
  Difficulty,
  takeAgain,
} from "../../component/select-dropdown-data/select-dropdown.component";

import {ReactComponent as Gender} from '../../asset/gender.png'

const SchoolReviewResult = (props) => {
  const [viewData, setViewData] = useState(null);
  const [lecturerInfo, setLecturerInfo] = useState(null);

  const id = props.match.params.slug;

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    fetch(`http://13.244.78.114:4000/spruu/api/v1/user/lecturer/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data;
        console.log(result);

        setLecturerInfo(result);
      });
  }, [id]);

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    fetch(`http://13.244.78.114:4000/spruu/api/v1/user/lecturer/review/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data;
        console.log(result);

        setViewData(result);
      });
  }, [id]);



  const [reviewFilter, setReviewFilter] = useState([viewData])
  const handleFilter = () => {

  }
  // function reviewDate(d){
  //   let sDate = new Date(d);
  //   return sDate;
  // }

  return viewData ? (
    <div className="review-result-container">
      <div className="review-person-box">
        <div className="review-image-container">
          <img src={Gender} alt="" className="review-image" />
        </div>
        <div className="name-and-attr">
          <h3 className="result-name">{lecturerInfo.fullName}</h3>
          <h4 className="result-description">{lecturerInfo.institution}</h4>
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
            to={"/review/" + id}
            className="review-btn"
          >
            REVIEW {lecturerInfo.fullName}
          </Link>
        </div>
      </div>

      <div className="review-bar"> HIGHLIGHTS </div>
      <div className="review-category-box">
        <div className="rating-category">
          <div className="rating-category-item">
            <div className="rating-category-item-text">
              Classroom Interaction
            </div>
            <StarRatings
              rating={viewData.hightlights.classroomInteraction}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Patience</div>
            <StarRatings
              rating={viewData.hightlights.patience}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Communication</div>
            <StarRatings
              rating={viewData.hightlights.communication}
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
              rating={viewData.hightlights.knowledgeOfMaterial}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Organization</div>
            <StarRatings
              rating={viewData.hightlights.organization}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Compassion</div>
            <StarRatings
              rating={viewData.hightlights.compassion}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Authority</div>
            <StarRatings
              rating={viewData.hightlights.authority}
              starDimension="1.3rem"
              starSpacing=".2rem"
              starRatedColor="#CA8831"
            />
          </div>

          <div className="rating-category-item">
            <div className="rating-category-item-text">Rapport</div>
            <StarRatings
              rating={viewData.hightlights.rapport}
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
              {viewData.reviewDistribution.fiveStar ? Math.floor(viewData.reviewDistribution.fiveStar) :  0}%
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">4 Star</div>
            <ProgressBar
              percentage={viewData.reviewDistribution.fourStar ? Math.floor(viewData.reviewDistribution.fourStar) : 0}
            />
            <div className="distribution-progress__percentage">
              {viewData.reviewDistribution.fourStar ? Math.floor(viewData.reviewDistribution.fourStar) : 0}%
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
              {viewData.reviewDistribution.oneStar ? Math.floor(viewData.reviewDistribution.oneStar) : 0}%
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
            {viewData.reviewDistribution.takeAgain ? Math.floor(viewData.reviewDistribution.takeAgain) : 0}%
          </h3>
          <p>
            {" "}
            Would take this <br />
            lecturer a Again
          </p>
        </div>
      </div>

      <div className="review-bar"> {viewData.totalReviews} Review </div>
              <CheckBox/>
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
      </div>
      
      
      )
      
      }

      
    </div>
  ) : null;
};

export default SchoolReviewResult;
