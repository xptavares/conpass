import React, { Component } from 'react';
import './App.css';
import Menu from './modules/components/Menu'
import Topnavbar from './modules/components/Topnavbar'
import { Container, Row, Col, Button } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        email: "xptavares@gmail.com",
        name: "Alexandre Tavares"
      }
    }
  }
  render() {
    return (
      <div className="contentarea">
        <Menu path={this.props.location.pathname} currentUser={this.state.currentUser}>
          <Topnavbar />
          <Container>
            <Row>
              <Col>
                {this.props.children}
              </Col>
              <Col md={1}>
                &nbsp;
              </Col>
            </Row>
            <Row>
              <Col>
                &nbsp;
              </Col>
              <Col md={1}>
                <Button outline color="primary">Ajuda?</Button>{' '}
              </Col>
            </Row>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default App;
