import React from 'react'
import { Row, Col } from 'reactstrap';
import Img from './Img'
import ProjectTypeformInstall from './ProjectTypeformInstall'

class ProjectTypeform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project
    }
  }

  render() {
    let isInstalled = this.state.project.isInstalled
    return (
      <Row>
        <Col className="project-row">
          <div className="card round">
            <Row>
              <div className={isInstalled ? 'col-md-4 two-round project-green' : 'col-md-4 two-round project-disable' }>
                <div className="vertical-center">
                    <Img to="png/combined-shape-branco.png"/>
                </div>
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <Row>
                    <Col>
                      <h4 className="card-title">{this.state.project.title}</h4>
                      <p className="card-text">{this.state.project.url}</p>
                      <p className="card-text">{this.state.project.buttonCreated}</p>
                      <ProjectTypeformInstall isInstalled={isInstalled} />
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
                          <a href="#" className={isInstalled ? 'btn round btn-outline-primary' : 'btn round btn-outline-secondary' }>{isInstalled ? 'ANALYTICS' : 'INSTALAR' }</a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }
}
export default ProjectTypeform;
