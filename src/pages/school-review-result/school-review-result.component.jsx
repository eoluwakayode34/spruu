import React, { useState, useEffect } from "react";
import "./review-result.styles.scss";
import { Link } from "react-router-dom";
import StarRatings from "../../component/star-ratings/star-ratings.component";
import ProgressBar from "../../component/progress-bar/progress-bar.component";
import Pagination from "react-js-pagination";
import Filter from "../../component/filter/filter.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import axios from "axios";
// import ReviewList from '../../component/review-list/review-list.component';
// import Select from "react-select";
// import {
//   overalRating,
//   Date,
//   Difficulty,
//   takeAgain,
// } from "../../component/select-dropdown-data/select-dropdown.component";

// suggestions={suggestions}
// onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
// onSuggestionsClearRequested={this.onSuggestionsClearRequested}
// getSuggestionValue={getSuggestionValue}
// renderSuggestion={renderSuggestion}
// renderSectionTitle={renderSectionTitle}
// getSectionSuggestions={getSectionSuggestions}
// inputProps={inputProps}

const SchoolReviewResult = (props) => {
  const id = props.match.params.slug;
  // const filterUrl = '13.244.171.145:4000/spruu/api/v1/user/filter/institution/'

  let currPage = 1;
  let reviewURL = `http://13.244.171.145:4000/spruu/api/v1/user/institution/review/${id}/${currPage}`;

  // const [next, setNext] = useState(1)
  const [viewData, setViewData] = useState(null);
  const [distribution, setDistribution] = useState(null);
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [url, setUrl] = useState(reviewURL);
  const [filterResult, setFilterResult] = useState({
    name: "",
    category: "",
  });

  // const handleFilter = (by, option) => {
  //   setFilterResult({name: by, category: option})
  //   setUrl(`http://13.244.171.145:4000/spruu/api/v1/user/filter/institution/${id}/${filterResult.name}/${filterResult.category}/${currPage}` )
  //   alert(url)

  // }

  const handleNext = () => {
    currPage = currPage + 1;

    if (currPage < 1) {
      currPage = 1;
    }

    setUrl(
      `http://13.244.171.145:4000/spruu/api/v1/user/institution/review/${id}/${currPage}`
    );
  };

  const handlePrev = () => {
    currPage = currPage - 1;

    if (currPage < 1) {
      currPage = 1;
    }

    setUrl(
      `http://13.244.171.145:4000/spruu/api/v1/user/institution/review/${id}/${currPage}`
    );
  };

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    async function getData() {
      const response = await axios
        .get(`http://13.244.171.145:4000/spruu/api/v1/user/institution/${id}`)
        .then((response) => {
          setSchoolInfo(response.data.data);
        });
    }

    async function disData() {
      const response = await axios.get(
          `http://13.244.171.145:4000/spruu/api/v1/user/institution/review/${id}/${currPage}`
        )
        .then((response) => {
          console.log("distribution");
          setDistribution(response.data.data);
        });
    }   

    disData();
    getData();
  }, [currPage]);

  useEffect(() => {
    // let _id = "5eb0ba69580e3d1d458a724b";
    async function reviewFilter() {
      const response = await axios.get(`${url}`).then((response) => {
        console.log("distribution");
        setViewData(response.data.data);
      });
    }

    reviewFilter();
  }, [url]);

  // function reviewDate(d){
  //   let sDate = new Date(d);
  //   return sDate;
  // }
  const reviewDifficulty = (diff) => {
    if (diff === 1) {
      return "Very Easy";
    } else if (diff === 2) {
      return "Easy";
    } else if (diff === 3) {
      return "Neutral";
    } else if (diff === 4) {
      return "Difficult";
    } else {
      return "Very Difficult";
    }
  };

  const displayDate = (datetime) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(datetime));
  };

  return viewData && schoolInfo && distribution ? (
    <div className="review-result-container">
      <div className="review-person-box">
        <div className="review-image-school-container">
          <img src={viewData.imgUrl} alt="" className="review-image" />
        </div>
        <div className="name-and-attr">
          <h3 className="result-name">{schoolInfo.name}</h3>
          <h4 className="result-description">
            {schoolInfo.state + "," + " " + schoolInfo.country}
          </h4>
          <div className="overall-s-r-b">
            <p className="text-medium">Overall Quality </p>
            <StarRatings
              rating={viewData.overallQuality}
              starDimension="2rem"
              starSpacing=".5rem"
              starRatedColor="#CA8831"
            />
          </div>
          <Link exact to={"/school-review/" + id} className="review-btn">
            REVIEW {schoolInfo.name}
          </Link>
        </div>
      </div>

      <div className="review-bar"> HIGHLIGHTS </div>
      <div className="review-category-box">
        <div className="rating-category">
          <div className="rating-category-item">
            <div className="rating-category-item-text">Career Prospects</div>
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
            <div className="rating-category-item-text">
              Extracurricular Activities
            </div>
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
            <div className="rating-category-item-text">
              Learning Environment
            </div>
            <StarRatings
              rating={schoolInfo.learningEnvironment}
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
              rating={schoolInfo.learningEnvironment}
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
              percentage={
                distribution.reviewDistribution.fiveStar
                  ? Math.floor(distribution.reviewDistribution.fiveStar)
                  : 0
              }
            />
            <div className="distribution-progress__percentage">
              {distribution.reviewDistribution.fiveStar
                ? Math.floor(distribution.reviewDistribution.fiveStar)
                : 0}
              %
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">4 Star</div>
            <ProgressBar
              percentage={
                distribution.reviewDistribution.fourStar
                  ? Math.floor(distribution.reviewDistribution.fourStar)
                  : 0
              }
            />
            <div className="distribution-progress__percentage">
              {distribution.reviewDistribution.fourStar
                ? Math.floor(distribution.reviewDistribution.fourStar)
                : 0}
              %
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">3 Star</div>
            <ProgressBar
              percentage={
                distribution.reviewDistribution.threeStar
                  ? Math.floor(distribution.reviewDistribution.threeStar)
                  : 0
              }
            />
            <div className="distribution-progress__percentage">
              {distribution.reviewDistribution.threeStar
                ? Math.floor(distribution.reviewDistribution.threeStar)
                : 0}
              %
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">2 Star</div>
            <ProgressBar
              percentage={
                distribution.reviewDistribution.twoStar
                  ? Math.floor(distribution.reviewDistribution.twoStar)
                  : 0
              }
            />
            <div className="distribution-progress__percentage">
              {distribution.reviewDistribution.twoStar
                ? Math.floor(distribution.reviewDistribution.twoStar)
                : 0}
              %
            </div>
          </div>

          <div className="distribution-progress">
            <div className="distribution-progress-text">1 Star</div>
            <ProgressBar
              percentage={
                distribution.reviewDistribution.oneStar
                  ? Math.floor(distribution.reviewDistribution.oneStar)
                  : 0
              }
            />
            <div className="distribution-progress__percentage">
              {distribution.reviewDistribution.oneStar
                ? Math.floor(distribution.reviewDistribution.oneStar)
                : 0}
              %
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
                Math.round(distribution.hightlights.difficulty) === 1
                  ? "diff-level-selected-item very-easy"
                  : "diff-level-selected-item"
              }
            >
              very Easy
            </div>
            <div
              className={
                Math.round(distribution.hightlights.difficulty) === 2
                  ? "diff-level-selected-item easy"
                  : "diff-level-selected-item"
              }
            >
              Easy
            </div>
            <div
              className={
                Math.round(distribution.hightlights.difficulty) === 3
                  ? "diff-level-selected-item neutral"
                  : "diff-level-selected-item"
              }
            >
              neutral
            </div>
            <div
              className={
                Math.round(distribution.hightlights.difficulty) === 4
                  ? "diff-level-selected-item difficult"
                  : "diff-level-selected-item"
              }
            >
              difficult
            </div>
            <div
              className={
                Math.round(distribution.hightlights.difficulty) === 5
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
            {distribution.reviewDistribution.schoolAgain
              ? Math.floor(distribution.reviewDistribution.schoolAgain)
              : 0}
            %
          </h3>
          <p>
            {" "}
            Would Take This <br />
            Lecturer Again
          </p>
        </div>
      </div>

      <div className="review-bar"> {viewData.totalReviews} Review(s) </div>

        {/* <select
          value={filterResult.category}
          name="overall"
          onChange={(e) => {
            setFilterResult({ name: e.target.name, category: e.target.value });
            setUrl(
              `http://13.244.171.145:4000/spruu/api/v1/user/filter/institution/${id}/difficulty/2/1`
            );
            console.log(filterResult.name + filterResult.category);
          }}
        >
          <option value="1">1 star</option>
          <option value="2">2 star</option>
          <option value="3">3 star</option>
          <option value="4">4 star</option>
          <option value="5">5 star</option>
        </select> */}

      {/* <div>
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
      </div> */}

      {viewData.review.map((review, index) => (
        <div className="review-result-list-container " key={index}>
          <div className="flex mb-3 br-5">
            <div className="rating-category-item-text pd3">
              <StarRatings
                rating={review.overallQuality}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>
            <div className="rating-category-item-text pd3">
              {/* { reviewDate(review.createdAt) } */}
              {displayDate(review.createdAt)}
            </div>
            <div className="rating-category-item-text pd3">
              {reviewDifficulty(review.difficulty)}
            </div>
            <div className="rating-category-item-text pd3">
              {review.takeAgain ? "Yes" : "No"}
            </div>
          </div>
          <div className="review-category-box">
            <div className="rating-distribution" id="align-center">
              <h4 className="rating-distribution-header">
                STUDENT {index + 1}
              </h4>
            </div>
            <div className="rating-category" id="bg-none">
              <div className="rating-category-item">
                <div className="rating-category-item-text">
                  Career Prospects
                </div>
                <StarRatings
                  rating={review.careerProspect}
                  starDimension="1.3rem"
                  starSpacing=".2rem"
                  starRatedColor="#CA8831"
                />
              </div>

              <div className="rating-category-item">
                <div className="rating-category-item-text">Food and Health</div>
                <StarRatings
                  rating={review.foodAndHealth}
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
                  rating={review.extraCurricularActivities}
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
                  rating={review.behaviourAndMorals}
                  starDimension="1.3rem"
                  starSpacing=".2rem"
                  starRatedColor="#CA8831"
                />
              </div>

              <div className="rating-category-item">
                <div className="rating-category-item-text">
                  Safety and Location
                </div>
                <StarRatings
                  rating={review.safetyAndLocation}
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
                  rating={review.learningEnvironment}
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
                  rating={review.learningAndMaterials}
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
                  rating={review.personalDevelopment}
                  starDimension="1.3rem"
                  starSpacing=".2rem"
                  starRatedColor="#CA8831"
                />
              </div>
            </div>
          </div>
          <div className="user-review"> {"Review:" + " " + review.review}</div>
        </div>
      ))}

      <div className="pagination">
        <button className="review-btn" onClick={handlePrev}>
          {" "}
          &#8810; Prev Page
        </button>
        <button className="review-btn" onClick={handleNext}>
          {" "}
          Next Page &#8811;
        </button>
      </div>
    </div>
  ) : null;
};

export default SchoolReviewResult;
