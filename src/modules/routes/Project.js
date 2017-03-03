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
              <Button color="primary" className="btn-circle">+</Button>{' '}
              <Img to="svg/bnt-float-create.svg" />
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="card">
              <Row>
                <div className="col-md-4">
                  <Img to="svg/tooltip-bottom-light.svg" className="w-100" />
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-block px-3">
                    <h4 className="card-title">Lorem ipsum dolor sit amet</h4>
                    <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  }
})
