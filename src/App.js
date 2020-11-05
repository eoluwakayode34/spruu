import React from 'react';
import './App.scss';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import FindALecturer from './pages/find-a-lecturer-page/find-a-lecturer.compoent';
import RateALecturer from './pages/rate-a-lecturer-page/rate-a-lecturer.component';
import RateSchool from './pages/rate-school/rate-school.component';
import RateASchool from './pages/rate-a-school-page/rate-a-school.component';
import RateLecturer from './pages/rate-lecturer/rate-lecturer.component';
import SchoolReviewResult from './pages/school-review-result/school-review-result.component';
import  LecturerReviewResult from "./pages/lectuer-review-result/lecturer-review-result.component";
import { ThemeProvider } from "@chakra-ui/core";


function App() {
  return (
    <ThemeProvider>
    <div className="App">
        <Header/>
          <Switch>
            <Route  exact path='/' component={Homepage}  />
            <Route path='/signin' component={SignInSignUp} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/find-a-lecturer' component={FindALecturer} />
            <Route path='/rate-a-lecturer' component={RateALecturer} />
            <Route path='/rate-a-school' component={RateASchool} />
            <Route path='/review/:slug' component={RateLecturer}/>
            <Route path='/school-review/:slug' component={RateSchool}/>


            <Route path='/school-review-result/:slug' component={SchoolReviewResult}/>
            <Route path='/lecturer-review-result/:slug' component={LecturerReviewResult}/>

          </Switch>
        <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
