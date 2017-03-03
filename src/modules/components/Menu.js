import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import Gravatar from 'react-circle-gravatar';
import Img from './Img'

const ComponentLink = (props) => {
  let name = props.expanded ? props.item.name : '';
  let image = props.expanded ? props.item.images.hover : props.item.images.normal;
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active">
        <Img to={"png/" + image + ".png"} /> {name}
      </NavLink>
    </NavItem>
  );
};

const EmailText = (props) => {
  return (
    <Row>
      <Col>
        edward@green.com
      </Col>
    </Row>
  );
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      navItems: [
        {
          name: '',
          to: '',
          disabled: true,
          images: {
            normal: 'line-divider',
            hover: 'line-divider'
          }
        },
        {
          name: 'Meu Painel',
          to: '/',
          images: {
            normal: 'ic-star',
            hover: 'ic-star-hover'
          }
        },
        {
          name: '',
          to: '',
          disabled: true,
          images: {
            normal: 'line-divider',
            hover: 'line-divider'
          }
        },
        {
          name: 'Analytics',
          to: '/analytics/',
          images: {
            normal: 'ic-dash',
            hover: 'ic-dash-hover'
          }
        },
        {
          name: 'Extenção',
          to: '/extension/',
          images: {
            normal: 'ic-download',
            hover: 'ic-download-hover'
          }
        },
        {
          name: 'Configuração',
          to: '/config/',
          images: {
            normal: 'ic-config',
            hover: 'ic-config-hover'
          }
        }
      ],
      expanded: false,
      cols: {
        first: 1,
        last: 11
      }
    };
  }
  onClick(e) {
    this.setState({
      expanded: !this.state.expanded,
      cols: {
        first: 2 === this.state.cols.first ? 1 : 2,
        last: 10 === this.state.cols.last ? 11 : 10
      }
    })
  }
  render() {
    var expanded = this.state.expanded;
    var textOfExpand = expanded ? '<<<' : '>>>';
    var greenClass = expanded ? 'flex-column' : 'green flex-column';
    return (
      <div>
        <Row className="no-gutters">
          <Col md={this.state.cols.first}>
            <div className="docs-sidebar text-center">
              <div className="green">
                <div>
                  &nbsp;
                </div>
                <Row>
                  <Col>
                    <Gravatar email="xptavares@gmail.com" size={75} rating="g" default="mm" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b className="d-inline-flex p-2">Edward Green</b>
                  </Col>
                </Row>
                {this.state.expanded ? <EmailText/> : null}
              </div>
              <Nav className={greenClass}>
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} expanded={this.state.expanded} />;
                })}
                <NavItem>
                  <NavLink href="#" onClick={this.onClick}>
                    {textOfExpand}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md={this.state.cols.last}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Components;
