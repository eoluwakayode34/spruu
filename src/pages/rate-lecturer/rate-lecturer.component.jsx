import React, { useState, useEffect } from "react";

import RatingButton from "../../component/button/button.component";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { Link, Redirect} from "react-router-dom";
import "../rate-school/rate-school.styles.scss";
import axios from "axios";

const RateLecturer = (props) => {
  const [review, setReview] = useState({
    lecturerid: props.match.params.slug,
    classroomInteraction: "",
    patience: "",
    knowledgeOfMaterial: "",
    organization: "",
    communication: "",
    authority: "",
    compassion: "",
    rapport: "",
    difficulty: "",
    takeAgain: "",
    review: "",
  });

  const handleChange = (field, value) => {
    setReview({ ...review, [field]: value });

    if (
      review.lecturerid === null ||
      review.classroomInteraction === "" ||
      review.patience === "" ||
      review.knowledgeOfMaterial === "" ||
      review.organization === "" ||
      review.communication === "" ||
      review.authority === "" ||
      review.compassion === "" ||
      review.rapport === "" ||
      review.difficulty === "" ||
      review.takeAgain === "" ||
      review.review === ""
    ) {
      return true;
    } else {
      setToggleDisabled(false);
    }
  };

  const handleReview = (e) => {
    setReview({ ...review, review: e.target.value });
    if (
      review.lecturerid === null ||
      review.classroomInteraction === "" ||
      review.patience === "" ||
      review.knowledgeOfMaterial === "" ||
      review.organization === "" ||
      review.communication === "" ||
      review.authority === "" ||
      review.compassion === "" ||
      review.rapport === "" ||
      review.difficulty === "" ||
      review.takeAgain === "" ||
      review.review === ""
    ) {
      return true;
    } else {
      setToggleDisabled(false);
    }
  };

  const handletakeAgain = (e) => {
    setReview({ ...review, takeAgain: e.target.value });
    if (
      review.lecturerid === null ||
      review.classroomInteraction === "" ||
      review.patience === "" ||
      review.knowledgeOfMaterial === "" ||
      review.organization === "" ||
      review.communication === "" ||
      review.authority === "" ||
      review.compassion === "" ||
      review.rapport === "" ||
      review.difficulty === "" ||
      review.takeAgain === "" ||
      review.review === ""
    ) {
      return true;
    } else {
      setToggleDisabled(false);
    }
  };

  const [lecturerName, setLecturerName] = useState(null);
  const id = props.match.params.slug;

  useEffect(() => {
    fetch(`http://13.244.78.114:4000/spruu/api/v1/user/lecturer/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.data;

        setLecturerName(result.fullName);
      });
  }, [id]);

  const [toggleDisabled, setToggleDisabled] = useState(true);
  const [fireRedirect, setFireRedirect] = useState(false)


  const submitHandler = async (e) => {
    e.preventDefault();
    setFireRedirect(true)
    alert('Review Submitted')

     axios
      .post(
        "http://13.244.78.114:4000/spruu/api/v1/user/lecturer/review",
        review
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      setReview({
        lecturerid: props.match.params.slug,
        classroomInteraction: "",
        patience: "",
        knowledgeOfMaterial: "",
        organization: "",
        communication: "",
        authority: "",
        compassion: "",
        rapport: "",
        difficulty: "",
        takeAgain: "",
        review: "",
      });
  };

  const { from } = props.location.fireRedirect || '/'


  return (
    <div as="form" className="review-container">
      <div className="rating-name-container">
        <h3>
          IT YOUR TURN TO RATE <br />
          <span className="name">{lecturerName}</span>
        </h3>
      </div>

      <form>
        <div className="rating-container">
          <div className="rating-box">
            <h4 className="rating-heading"> Classroom Interaction</h4>
            <RatingButton
              name="classroomInteraction"
              selected={review.classroomInteraction}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Communication</h4>
            <RatingButton
              name="communication"
              selected={review.classroomInteraction}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">Patience</h4>
            <RatingButton
              name="patience"
              selected={review.patience}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Knowledge of Medical</h4>
            <RatingButton
              name="knowledgeOfMaterial"
              selected={review.knowledgeOfMaterial}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Organization</h4>
            <RatingButton
              name="organization"
              selected={review.organization}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Authority</h4>
            <RatingButton
              name="authority"
              selected={review.authority}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Compassion</h4>
            <RatingButton
              name="compassion"
              selected={review.compassion}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Rapport</h4>
            <RatingButton
              name="rapport"
              selected={review.rapport}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading"> Difficulty</h4>
            <RatingButton
              name="difficulty"
              selected={review.difficulty}
              handleChange={handleChange}
            />
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">
              Would you take this Lecturer Again ?
            </h4>
            <div className="form-button__group">
              <div>
                <div className="form-radio__group">
                  <label>
                    <input
                      type="radio"
                      name="takeAgain"
                      className="form-radio__input"
                      value="true"
                      onChange={handletakeAgain}
                    />
                    <span className="button lemon w">YES</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="form-radio__group">
                  <label>
                    <input
                      type="radio"
                      name="takeAgain"
                      className="form-radio__input"
                      value="false"
                      onChange={handletakeAgain}
                    />
                    <span className="button red w">NO</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="rating-box">
            <h4 className="rating-heading">Review</h4>
            <textarea
              placeholder="write your review"
              name={review.review}
              onChange={handleReview}
            ></textarea>
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
        <div>Hello</div>
        {toggleDisabled ? "You must fill all section to submit the form" : ''}
        <CustomButton
          type="submit"
          onClick={submitHandler}
          disabled={toggleDisabled}
          
        >
          {toggleDisabled ? 'Fill all to Submit' : 'Submit Now'}
        </CustomButton>
        <Link to="/review" className="cancelBtn">
          CANCEL
        </Link>

        {fireRedirect && (
                <Redirect to={from || `/find-a-lecturer`}/>)}
      </form>
    </div>
  );
};
export default RateLecturer;
