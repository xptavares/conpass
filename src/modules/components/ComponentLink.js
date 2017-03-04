import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';
import Img from './Img'

class ComponentLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.expanded ? this.props.item.name : '';
    let image = this.props.expanded ? this.props.item.images.hover : this.props.item.images.normal;
    return (
      <NavItem>
        <NavLink tag={this.props.item.to} to={this.props.item.to} activeClassName="active">
          <Img to={"svg/" + image + ".svg"} /> {name}
        </NavLink>
      </NavItem>
    );
  }
}
export default ComponentLink;
