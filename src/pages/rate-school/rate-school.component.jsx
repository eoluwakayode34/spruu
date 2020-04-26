import React, { useState } from "react";

import RatingButton from "../../component/button/button.component";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { Link } from "react-router-dom";

import "./rate-school.styles.scss";

const RateSchool = (props) => {
  const name = {
    career: "Career Prospects",
    extraCur: "Extracurricular Activities",
    safety: "Safety and Location",
    learningMat: "Learning and materials",
    foodAndHealth: "Food and Health",
    behaviourMoral: "behaviour and Morals",
    learningEnv: "Learning Environment",
    PersonalDiv: "Personal Development",
    
  };

  return (
    <div as="form" className="review-container">
      <div className="rating-name-container">
        <h3>
          IT YOUR TURN TO RATE <br />
          <span className="name">{props.match.params.slug}</span>
        </h3>
      </div>

      <form action="">
        <div className="rating-container">
          <div className="rating-box">
            <h4 className="rating-heading"> {name.career}</h4>
            <RatingButton name={name.career} />
          </div>

          <div className="rating-box">
          <h4 className="rating-heading"> {name.extraCur}</h4>
            <RatingButton name={name.extraCur} />
          </div>          

          <div className="rating-box">
            <h4 className="rating-heading">{name.safety}</h4>
            <RatingButton name={name.safety} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> {name.learningMat}</h4>
            <RatingButton name={name.learningMat} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> {name.foodAndHealth}</h4>
            <RatingButton name={name.foodAndHealth} />
          </div>
        
          <div className="rating-box">
            <h4 className="rating-heading"> {name.behaviourMoral}</h4>
            <RatingButton name={name.behaviourMoral} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> {name.learningEnv}</h4>
            <RatingButton name={name.learningEnv} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> {name.PersonalDiv} </h4>
            <RatingButton name={name.PersonalDiv} />
          </div>

       

          <div className="rating-box">
            <h4 className="rating-heading">
              Would you take this <br /> School Again ?{" "}
            </h4>
            <div className="form-button__group">
              <div>
                <div className="form-radio__group">
                  <label>
                    <input
                      type="radio"
                      name='question'
                      id="good"
                      className="form-radio__input"
                      value="poor"
                    />
                    <span className="button lemon w">YES</span>
                  </label>
                </div>{" "}
              </div>
              <div>
                <div className="form-radio__group">
                  <label>
                    <input
                      type="radio"
                      name='question'
                      id="good"
                      className="form-radio__input"
                      value="poor"
                    />
                    <span className="button red w">NO</span>
                  </label>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">Review</h4>
            <textarea placeholder="write your review"></textarea>
          </div>
        </div>

        <div>
          <p className="anonymous-text">
            Remember, you'll always be anonymous when posting ratings, so
            there's no downside!
          </p>

          <div>
            <FormInput
              type="email"
              name="email"
              placeholder="EMAIL (Optional)"
              required
            />
            <FormInput
              type="password"
              name="password"
              placeholder="PASSWORD (Optional)"
              required
            />
            <FormInput
              type="password"
              name="password"
              placeholder="CONFIRM PASSWORD (Optional)"
              required
            />
          </div>

          <div className="terms">
            <input type="checkbox" name="terms" id="agree" />
            <label htmlFor="agree">
              I agree to the Terms of Use and Privacy Policy.
            </label>
          </div>
        </div>

        <CustomButton type="submit">SUBMIT</CustomButton>
        <Link to="/review" className="cancelBtn">
          CANCEL
        </Link>
      </form>
    </div>
  );
};
export default RateSchool;
