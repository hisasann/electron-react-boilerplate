import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Error from '../components/Error';
import * as CounterActions from '../actions/counter';
import * as ErrorActions from '../actions/error';
import assign from 'lodash/assign';

const CounterPage = (props) => {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props;
  const { errorMessage, resetErrorMessage, showErrorMessage, showErrorMessageDelayed } = props;
  const { loadUser, request } = props;

  return (
    <div>
      <Counter
        increment={increment}
        incrementIfOdd={incrementIfOdd}
        incrementAsync={incrementAsync}
        decrement={decrement}
        counter={counter}
        loadUser={loadUser}
        request={request}
        />
      <Error
        errorMessage={errorMessage}
        resetErrorMessage={resetErrorMessage}
        showErrorMessage={showErrorMessage}
        showErrorMessageDelayed={showErrorMessageDelayed}
        />
    </div>
  );
};

CounterPage.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  request: PropTypes.object.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter,
    request: state.request,
    errorMessage: state.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(assign(CounterActions, ErrorActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
