import React from 'react'
import { Row, Col } from 'reactstrap';

class EmailText extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          {this.props.email}
        </Col>
      </Row>
    )
  }
}
export default EmailText;
