import React from 'react'
import { Row, Col } from 'reactstrap';

class EmailText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          edward@green.com
        </Col>
      </Row>
    )
  }
}
export default EmailText;
