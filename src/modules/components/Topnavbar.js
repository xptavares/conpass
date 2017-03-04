import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, NavLink, Navbar, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import Img from './Img'

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active" className="navbar-top-nav navbar-top-nav-link">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};

class Topnavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      navItems: [
        {
          name: 'PROJETOS',
          to: '/projects/'
        },
        {
          name: 'INSTALAÇÃO',
          to: '/extension/'
        },
        {
          name: 'RELATÓRIOS',
          to: '/reports/'
        }
      ],
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable className="no-padding">
          <NavbarToggler left onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {this.state.navItems.map((item, i) => {
                return <ComponentLink key={i} item={item} />;
              })}
            </Nav>
          </Collapse>
          <NavbarBrand href="/"><Img to="svg/dash-conpass-logo.svg" /></NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
export default Topnavbar;
