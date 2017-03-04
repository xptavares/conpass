import React from 'react'
import { Row, Col } from 'reactstrap';
import Img from './Img'

class ProjectTypeform extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card round">
        <Row>
          <div className="col-md-4 two-round project-green">
            <div className="">
            </div>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <Row>
                <Col>
                  <h4 className="card-title">Typeform Tutorial</h4>
                  <p className="card-text">www.typeform.com</p>
                  <p className="card-text">04 balões criados</p>
                  <p className="card-text">instalado</p>
                </Col>
                <Col className="text-right project-padding-right">
                  <Row>
                    <Col>
                      &nbsp;
                    </Col>
                    <Col sm={1}>
                      <a href="#"><Img to="svg/ic-edit.svg"/></a>
                    </Col>
                    <Col sm={1}>
                      <a href="#"><Img to="svg/trash.svg"/></a>
                    </Col>
                    <Col sm={1}>
                      &nbsp;
                    </Col>
                  </Row>
                  <Row className="project-last-row">
                    <Col>
                      <a href="#" className="btn btn-outline-primary round">ANALYTICS</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
export default ProjectTypeform;
