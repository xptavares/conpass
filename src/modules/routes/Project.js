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

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTypes: [
        {
          id: 1,
          title: "Typeform Tutorial",
          url: "www.typeform.com",
          buttonCreated: "04 balões criados",
          isInstalled: true
        },
        {
          id: 2,
          title: "Typeform Teste",
          url: "www.typeform.com",
          buttonCreated: "05 balões criados",
          isInstalled: false
        }
      ]
    }
  }
  render() {
    return <div>
      <Container>
        <Row>
          <Col>
            <h3><spam className="notbold">Meus</spam>Projetos</h3>
          </Col>
          <Col className="text-right">
            <h3>
              Criar <spam>Novo</spam>
              <Img to="svg/bnt-float-create.svg" />
            </h3>
          </Col>
        </Row>
        {this.state.projectTypes.map((project, i) => {
          return <ProjectTypeform project={project} key={project.id} />;
        })}
      </Container>
    </div>
  }
}
export default Project;
