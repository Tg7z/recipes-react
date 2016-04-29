'use strict';
import React, { PropTypes } from 'react';
// import UI from '../components/UI';

class protectedContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>Protected content</div>
    )
  }
}

// protectedContainer.contextTypes = {};

export default protectedContainer;
