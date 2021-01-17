import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {GlobalStyle} from './global.styles';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ScrollToTop from './scrollToTop';

import TopNav from './components/top-nav/top-nav.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import Footer from './components/footer/footer.component';

import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions';

//Code Splitting - React Lazy and Suspense - Different chunks for every import, so we improved performance
const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));
const AboutusPage = lazy(() => import('./pages/aboutus/aboutus.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({checkUserSession, currentUser}) => {

  // We include the checkUserSession in the array because it is a property function that is being passed in from mapDispatchToProps and
  // because we are at the higher component (App) and checkUserSession does not need to be updated
  // (Behaves like a componentDidMount)
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle/>
        <TopNav />
        <Header />
        <ScrollToTop />

        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/about' component={AboutusPage}/>
              <Route exact path='/signin' 
              render = {() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) } />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
      </div>
    ); 
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
