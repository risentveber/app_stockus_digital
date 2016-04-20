import React, { Component, PropTypes } from 'react'
import {Col, ProgressBar } from 'react-bootstrap/lib'

export default class Hero extends Component {
  static propTypes = {
    full_hp: PropTypes.number.isRequired,
    hp: PropTypes.number.isRequired
  }
  render() {
    let {hp, full_hp} = this.props;
    return (
      <Col md={2}>
        <h3>Hero</h3>
        <ProgressBar
          bsStyle='success'
          now={hp/full_hp * 100}
          label={hp} />
      </Col>
    );
  }
}
