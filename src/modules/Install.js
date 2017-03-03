import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBlock,
  Button,
  CardFooter,
  Container,
  Row,
  Col
} from 'reactstrap';
import Img from './components/Img'

export default React.createClass({
  render() {
    return <div>
      <Container>
        <Row>
          <Col>
            Instalar Conpass
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Card className="round">
              <CardBlock>
                <Img to="png/cloud-computing.png"></Img>
                <CardTitle>1. Baixe e instale a conpass em um clique!</CardTitle>
                <CardText>Baixe o Editor, para poder criar tutoriais e ver o preview do seu site.</CardText>
                <Button className="round btn-no-border" size="lg"> INSTALAR COMPASS </Button>
                <CardText>É nescessário a utilização da ferramenta no <Img to="ico/chrome.ico" height={25} width={25}></Img><b>Chrome</b></CardText>
              </CardBlock>
            </Card>
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
    </div>
  }
})
