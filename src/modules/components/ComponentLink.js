import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';
import Img from './Img'

class ComponentLink extends React.Component {
  constructor(props) {
    super(props);
    let lineDivider = props.item.name === 'line-divider'
    this.state = {
      expanded: props.expanded,
      name: props.expanded ? props.item.name : '',
      className: props.expanded ? 'hr-opened' : 'hr-closed',
      item: props.item,
      lineDivider: lineDivider,
      normal: props.item.images.normal,
      hover: props.item.images.active
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(e) {
    this.setState({
      hover: this.props.item.images.hover
    })
  }
  onMouseLeave(e) {
    this.setState({
      hover: this.props.item.images.active
    })
  }

  render() {
    if(this.state.lineDivider) {
      return (
        <NavItem>
          <hr className={this.state.className}></hr>
        </NavItem>
      );
    }
    return (
      <NavItem>
        <NavLink tag={Link} to={this.state.item.to} activeClassName="active" className={this.state.item.className} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Img to={"svg/" + (this.props.expanded ? this.state.hover : this.state.normal) + ".svg"} className="no-padding"/> {this.props.expanded ? this.props.item.name : ''}
        </NavLink>
      </NavItem>
    );
  }
}
export default ComponentLink;
