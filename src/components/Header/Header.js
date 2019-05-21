import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button} from 'react-bootstrap';

class Header extends React.Component {
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
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className='text-white'><Link className='text-white' to='/'>Test React (Users)</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {
                    this.props.isAuth
                        ? <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Button variant="outline-success" onClick={this.props.logout}>Logout</Button>
                        </Navbar.Collapse>
                        : ''
                }

            </Navbar>
        )
    }
}

export default Header;