import React from "react";
import "./review-list.style.scss";
import StarRatings from "../../component/star-ratings/star-ratings.component";
const ReviewList = (props) => {
  return (
    <>
      <div className="review-list-container">
        <div className="filter-list">
          <div className="filter-list-item">
          <StarRatings
                rating={3}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
          </div>
          <div className="filter-list-item">24-08-2020</div>
          <div className="filter-list-item">Very Easy</div>
          <div className="filter-list-item">No</div>
        </div>

        <div className="review-list-category-box">
          <div className="review-list-category-name">STUDENT A</div>
          <div>
          <div className='review-list-result-box'>
            <div className="review-list-category">
              <div className="review-list-category-text">Career Prospects</div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
                Extracurricular Activities
              </div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
                Safety and Location
              </div>
              <StarRatings
                rating={3}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
                Learning and materials
              </div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">Food and Health</div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
                behaviour and Morals
              </div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
                Learning Environment
              </div>
              <StarRatings
                rating={2.403}
                starDimension="1.3rem"
                starSpacing=".2rem"
                starRatedColor="#CA8831"
              />
            </div>

            <div className="review-list-category">
              <div className="review-list-category-text">
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
          
          <div className="review-list-result">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla assumenda iste libero vitae accusantium nam quis rem velit ex commodi dolorem nihil, corporis atque ipsum. Alias necessitatibus minus unde id.
          </div>
          
          </div>


          
        </div>
      </div>
    </>
  );
};

export default ReviewList;
