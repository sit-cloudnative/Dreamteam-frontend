import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
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
        <Navbar color="0091ac" light expand="md" style={{ 
        backgroundColor: '#0091ac', 
        WebkitBoxShadow: '0px 2px 11px -3px rgba(0,0,0,0.75)', 
        MozBoxShadow: '0px 2px 11px -3px rgba(0,0,0,0.75)', 
        boxShadow: '0px 2px 11px -3px rgba(0,0,0,0.75)',
        position: 'fixed',
        top:'0',
        width:'100%',
        zIndex:'10'
      }} >
          <a className="navbar-brand" href="/" style={{ color: 'white' }}><i className="fa fa-cloud" style={{ fontSize: 18, color: 'white' }}></i> Dream-Learning </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Looking for..." />
              </NavItem>
              <NavItem>
                <button type="button" className="btn" style={{backgroundColor: '#0d386e', color: '#e4e4e4' }}>Search</button>
              </NavItem>
              <NavItem>
                <NavLink href="/" style={{ color: '#e4e4e4' }}>Curriculums</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: '#e4e4e4' }}>
                  Favorite Subjects
                </DropdownToggle>
                <DropdownMenu right >
                  <DropdownItem>
                    INT351 IT Seminar I
                  </DropdownItem>
                  <DropdownItem>
                    INT201 Network I
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/" style={{ color: '#e4e4e4' }}>Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}