import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import Gravatar from 'react-circle-gravatar';
import Img from './Img'
import EmailText from './EmailText'

const ComponentLink = (props) => {
  if(props.item.name === 'line-divider') {
    let className = props.expanded ? 'hr-opened' : 'hr-closed';
    return (
      <NavItem>
        <hr className={className}></hr>
      </NavItem>
    );
  }
  let name = props.expanded ? props.item.name : '';
  let image = props.expanded ? props.item.images.hover : props.item.images.normal;
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active" className={props.item.className}>
        <Img to={"svg/" + image + ".svg"} className="no-padding"/> {name}
      </NavLink>
    </NavItem>
  );
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      path: props.path,
      navItems: [
        {
          name: 'Meu Painel',
          to: '/',
          images: {
            normal: 'ic-star',
            hover: 'ic-star-hover',
            active: 'ic-download-active'
          },
          className: ''
        },
        {
          name: 'line-divider'
        },
        {
          name: 'Analytics',
          to: '/analytics/',
          images: {
            normal: 'ic-dash',
            hover: 'ic-dash-hover',
            active: 'ic-dash-active'
          },
          className: ''
        },
        {
          name: 'Extenção',
          to: '/extension/',
          images: {
            normal: 'ic-download',
            hover: 'ic-download-hover',
            active: 'ic-download-active'
          },
          className: ''
        },
        {
          name: 'Configuração',
          to: '/config/',
          images: {
            normal: 'ic-config',
            hover: 'ic-config-hover',
            active: 'ic-config-active'
          },
          className: ''
        },
        {
          name: '',
          to: '/logout/',
          images: {
            normal: 'ic-logout',
            hover: 'ic-logout',
            active: 'ic-logout-active'
          },
          className: 'on-bottom'
        }
      ],
      expanded: false,
      cols: {
        first: 1,
        last: 11
      }
    };
  }
  onMouseEnter(e) {
    this.setState({
      expanded: true,
      cols: {
        first: 2,
        last: 10
      }
    })
  }
  onMouseLeave(e) {
    this.setState({
      expanded: false,
      cols: {
        first: 1,
        last: 11
      }
    })
  }
  render() {
    var expanded = this.state.expanded;
    var greenClass = expanded ? 'flex-column contentarea' : 'green flex-column contentarea';
    var bottomBorder = expanded ? 'border-bottom-opened green' : 'border-bottom-closed green';
    return (
      <div className="contentarea">
        <Row className="no-gutters contentarea">
          <Col xs={this.state.cols.first} className="menu-font-color" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <div className="docs-sidebar text-center contentarea">
              <div className={bottomBorder}>
                <div>
                  &nbsp;
                </div>
                <Row>
                  <Col>
                    <Gravatar email={this.props.currentUser.email} size={75} rating="g" default="mm" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b className="d-inline-flex p-2">{this.props.currentUser.name}</b>
                  </Col>
                </Row>
                {this.state.expanded ? <EmailText email={this.props.currentUser.email}/> : null}
              </div>
              <Nav className={greenClass}>
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} path={this.state.path} expanded={this.state.expanded} />;
                })}
              </Nav>
            </div>
          </Col>
          <Col xs={this.state.cols.last}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}
export default Components;
