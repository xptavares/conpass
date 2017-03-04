import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import Img from '../components/Img'
import ProjectTypeform from '../components/ProjectTypeform'

export default React.createClass({
  render() {
    return <div>
      <Container>
        <Row>
          <Col>
            <h3>Meus Projetos</h3>
          </Col>
          <Col className="text-right">
            <h3>
              Criar Novo
              <Img to="svg/bnt-float-create.svg" />
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectTypeform />
          </Col>
        </Row>
      </Container>
    </div>
  }
})
