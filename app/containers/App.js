import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {/* https://github.com/reactjs/react-router/tree/master/examples/animations */}
        <ReactCSSTransitionGroup
          component="div"
          transitionName="routing"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
        {/* {this.props.children} */}

        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
