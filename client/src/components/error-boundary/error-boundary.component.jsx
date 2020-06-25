import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    // LifeCycle method - If any children of ErrorBoundary throw an error, ErrorBoundary is going to catch that error.  
    static getDerivedStateFromError(error){

        return {hasErrored: true};
    }

    // LifeCycle method
    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return (
              <ErrorImageOverlay>
                  <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png'/>
                  <ErrorImageText>Sorry this page is broken</ErrorImageText>
              </ErrorImageOverlay>  
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;