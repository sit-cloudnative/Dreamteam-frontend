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
        <Navbar color="0091ac" light expand="md">
          <a className="navbar-brand" href="/" style={{ color: 'white' }}><i className="fa fa-cloud" style={{ fontSize: 18, color: 'white' }}></i> Dream-Learning </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{ paddingTop: '5.5px', paddingRight: '200px' }}>
                <input className="searchBar" type="text" name="search" placeholder="Search..." />
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
                <div class="dropdown">
                  <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img style={{ borderRadius: '50%', marginTop: '6px' }} src="../../static/images/logo/user-1.png" width="30" height="28" />
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ left: '-103px' }} >
                    <a class="dropdown-item" href="#">My Profile</a>
                    <div class="dropdown-divider" />
                    <a class="dropdown-item" href="#">Log Out</a>
                  </div>
                </div>

              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}