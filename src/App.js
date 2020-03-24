import React from 'react';
import './App.scss';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import FindALecturer from './pages/find-a-lecturer/find-a-lecturer.compoent';
import RateALecturer from './pages/rate-a-lecturer/rate-a-lecturer.component';
import RateASchool from './pages/rate-a-school/rate-a-school.component';

function App() {
  return (
    <div className="App">
        <Header/>
          <Switch>
            <Route  exact path='/' component={Homepage}  />
            <Route path='/signin' component={SignInSignUp} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/find-a-lecturer' component={FindALecturer} />
            <Route path='/rate-a-lecturer' component={RateALecturer} />
            <Route path='/rate-a-school' component={RateASchool} />

          </Switch>
        <Footer/>
    </div>
  );
}

export default App;
