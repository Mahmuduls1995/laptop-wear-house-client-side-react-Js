import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { useAuthState } from 'react-firebase-hooks/auth';
// import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'
// import logo from '../../Components/images/image (3).png'
import logo from '../../Components/images/laptopWearhouse (1).png'
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (


        <div>

            <Navbar collapseOnSelect className=" bg-emerald-400  " sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: '50px', width: '100px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300  rounded" as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" href="home#inventories">Inventories</Nav.Link>

                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" as={Link} to="/blogs">Blogs</Nav.Link>


                        </Nav>
                        <Nav>
{/* 
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded" eventKey={2} as={Link} to="login">
                                Login
                            </Nav.Link> */}



                            {
                                user ?

                                    <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded" eventKey={2} as={Link} to="login">
                                        Login
                                    </Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;