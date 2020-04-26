import React, { useState } from "react";

import RatingButton from "../../component/button/button.component";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { Link } from "react-router-dom";

import "./review.styles.scss";

const RateLecturer = (props) => {
  const name = {
    classroom: "classroom",
    communication: "communication",
    patience: "patience",
    kom: "knowledge of medical",
    org: "organization",
    authority: "authority",
    compassion: "compassion",
    rapport: "rapport",
    difficulty: "difficulty",
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
            <h4 className="rating-heading"> Classroom Interaction</h4>
            <RatingButton name={name.classroom} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Communication</h4>
            <RatingButton name={name.communication} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">Patience</h4>
            <RatingButton name={name.patience} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Knowledge of Medical</h4>
            <RatingButton name={name.kom} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Organization</h4>
            <RatingButton name={name.org} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Authority</h4>
            <RatingButton name={name.authority} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Compassion</h4>
            <RatingButton name={name.compassion} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Rapport</h4>
            <RatingButton name={name.rapport} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Difficulty</h4>
            <RatingButton name={name.difficulty} />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">
              Would you take this <br /> Lecturer Again ?{" "}
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
export default RateLecturer;
