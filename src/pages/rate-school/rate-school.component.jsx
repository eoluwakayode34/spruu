import React, { useState, useEffect } from "react";

import RatingButton from "../../component/button/button.component";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';

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

  const [review, setReview] = useState({
    institutionid: props.match.params.slug,
    careerProspect:"",
    extraCurricularActivities:"",
    safetyAndLocation:"",
    learningAndMaterials:"",
    foodAndHealth:"",
    behaviourAndMorals:"",
    learningEnvironment:"",
    personalDevelopment:"",
    difficulty:"",
    schoolAgain:"",
    review:""
    })

    const [fireRedirect, setFireRedirect] = useState(false)

  
      
  
    const handleChange = (field, value) => {
      setReview({...review, [field]: value})
  
      if(
        review.institutionid === null ||
        review.careerProspect === ""||
        review.extraCurricularActivities === "" ||
        review.safetyAndLocation === "" ||
        review.learningAndMaterials === "" ||
        review.foodAndHealth === "" ||
        review.behaviourAndMorals === "" ||
        review.learningEnvironment === "" ||
        review.personalDevelopment === "" ||
        review.difficulty === "" ||
        review.schoolAgain === "" ||
        review.review === ""
    ){
      return true
    }else{
      setToggleDisabled(false)
    }
    }
  
  
    const handleReview = (e) => {
      setReview({...review, review: e.target.value})
      if(
        review.lecturerid === null ||
        review.classroomInteraction === ""||
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
    ){
      return true
    }else{
      setToggleDisabled(false)
    }
    }
  
    const  handletakeAgain = (e) => {
      setReview({...review, takeAgain: e.target.value})
      if(
        review.lecturerid === null ||
        review.classroomInteraction === ""||
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
    ){
      return true
    }else{
      setToggleDisabled(false)
    }
    }
  
    const [lecturerName, setLecturerName] = useState(null)
    const id = props.match.params.slug;
  
    useEffect(() => {
      fetch(`http://13.244.78.114:4000/spruu/api/v1/user/institution/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const result = data.data;
          
          setLecturerName(result.name);
        });
    }, [id]);
  
    const [toggleDisabled, setToggleDisabled] = useState(true)
      
  

  
    const submitHandler = async (e) => {
      e.preventDefault()
      setFireRedirect(true)
      alert('Review Submitted')

  
      
    
    axios.post('http://13.244.78.114:4000/spruu/api/v1/user/institution/review', review)
    .then((res) => {console.log(res.data)})
    .catch(err => {console.log(err)})
  
    setReview({
      institutionid: props.match.params.slug,
      careerProspect:"",
      extraCurricularActivities:"",
      safetyAndLocation:"",
      learningAndMaterials:"",
      foodAndHealth:"",
      behaviourAndMorals:"",
      learningEnvironment:"",
      personalDevelopment:"",
      difficulty:"",
      schoolAgain:"",
      review:""
    })  
    
    }
    
   
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
              <h4 className="rating-heading"> {name.career} </h4>
              <RatingButton 
              name='careerProspect'
              selected={review.careerProspect}
              handleChange={handleChange} 
                />
            </div>
  
            <div className="rating-box">
              <h4 className="rating-heading"> {name.extraCur}</h4>
              <RatingButton 
              name='extraCurricularActivities'
              selected={review.extraCurricularActivities}
              handleChange={handleChange}   />
            </div>
  
            <div className="rating-box">
            <h4 className="rating-heading">{name.safety}</h4>
              <RatingButton 
              name='safetyAndLocation'
              selected={review.safetyAndLocation}
              handleChange={handleChange}  />
            </div>
  
            <div className="rating-box">
              <h4 className="rating-heading">{name.learningMat}</h4>
              <RatingButton 
              name='learningAndMaterials'
              selected={review.learningAndMaterials}
              handleChange={handleChange}  />
            </div>
  
            <div className="rating-box">
              <h4 className="rating-heading"
              > {name.foodAndHealth}</h4>
              <RatingButton 
              name='foodAndHealth'
              selected={review.foodAndHealth}
              handleChange={handleChange}  />
            </div>
  
            <div className="rating-box">
            <h4 className="rating-heading"> {name.behaviourMoral}</h4>
              <RatingButton 
              name='behaviourAndMorals'
              selected={review.behaviourAndMorals}
              handleChange={handleChange}  />
            </div>
  
            <div className="rating-box">
        <h4 className="rating-heading"> {name.learningEnv}</h4>
              <RatingButton 
              name='learningEnvironment'
              selected={review.learningEnvironment} 
              handleChange={handleChange} />
            </div>
  
            <div className="rating-box">
    <h4 className="rating-heading"> {name.PersonalDiv}</h4>
              <RatingButton
               name='rapport'
               selected={review.rapport}
               handleChange={handleChange}  />
            </div>
  
            <div className="rating-box">
              <h4 className="rating-heading"> Difficulty</h4>
              <RatingButton 
              name='difficulty' 
              selected={review.difficulty}
              handleChange={handleChange}/>
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
                        name='takeAgain'
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
                        name='takeAgain'
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
              <textarea placeholder="write your review"
              name={review.review}
              onChange={handleReview} ></textarea>
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
  
          <CustomButton 
          type="submit" 
          onClick={submitHandler} 
          disabled={toggleDisabled}> {toggleDisabled ? 'Fill all to Submit' : 'Submit Now'}</CustomButton>
          <Link to="/find-a-school" className="cancelBtn">
            CANCEL
          </Link>
          {fireRedirect && (
                <Redirect to={from || `/rate-a-school`}/>)}
        </form>

      </div>
  );
};
export default RateSchool;
