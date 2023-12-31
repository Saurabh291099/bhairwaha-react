import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo 2.jpg'

import NoteContext from '../context/notes/NoteContext';

const Navigation = (props) => {

    const { Footer, Links,Engine } = useContext(NoteContext);

    return (
        <>
            <Navbar expand="lg">
                {/* <Container> */}
                <Navbar.Brand href="/">
                    <img src={logo} alt="bhairwaha logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='custom-collapse'>
                    <Nav className="custom-navbar">
                        <Container>

                            <div className="upper-nav">
                                <div className="uper-nav-links">
                                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                    <Nav.Link><Link to={props.slug[0]}>About Us</Link></Nav.Link>
                                    <Nav.Link><Link to={props.slug[12]}>Rooms</Link></Nav.Link>
                                    <Nav.Link><Link to={props.slug[7]}>Gallery</Link></Nav.Link>
                                    <Nav.Link><Link to={props.slug[5]}>Facilities</Link></Nav.Link>
                                    <Nav.Link><Link to={props.slug[3]}>Contact Us</Link></Nav.Link>
                                </div>
                                <div className='nav-book'>
                                    <Link to={Engine} target='_blank' className='custom-btn'>Book Now</Link>
                                </div>

                            </div>
                        </Container>

                    </Nav>
                    <Container>

                        <div className="lower-nav">
                            <Link to={`mailto:${Footer.Email}`} className='lower-nav-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                    <path d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z" fill="white" />
                                    <path d="M0.5 0.5L9.5 9.5L18.5 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                {Footer.Email}
                            </Link>
                            <Link to={`tel:${Footer.Phone}`} className='lower-nav-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                                    <path d="M1.18799 4.35171C0.967609 2.92938 1.99376 1.64962 3.56134 1.18004C3.83966 1.09672 4.14001 1.12039 4.4011 1.24624C4.66219 1.37208 4.86436 1.59062 4.96637 1.85726L5.46903 3.16983C5.54985 3.38097 5.56434 3.61091 5.51064 3.83015C5.45695 4.0494 5.33752 4.24796 5.16767 4.40037L3.6724 5.7418C3.59865 5.80806 3.5437 5.89187 3.51289 5.98506C3.48207 6.07826 3.47644 6.17766 3.49655 6.27362L3.50985 6.33246L3.54687 6.48012C3.57985 6.60459 3.62959 6.77998 3.69958 6.98931C3.83841 7.40515 4.05995 7.96412 4.38966 8.52253C4.71937 9.08094 5.10346 9.54826 5.40193 9.87358C5.55738 10.043 5.71987 10.206 5.88898 10.3624L5.93526 10.4043C6.01005 10.469 6.10072 10.5138 6.19844 10.5341C6.29616 10.5544 6.3976 10.5497 6.49287 10.5202L8.42833 9.92449C8.64824 9.85688 8.88378 9.85507 9.10474 9.91928C9.32571 9.98349 9.52202 10.1108 9.66851 10.2849L10.5842 11.3723C10.966 11.8249 10.9208 12.4902 10.4818 12.8902C9.28211 13.9839 7.6324 14.2085 6.48477 13.3055C5.07809 12.1958 3.89221 10.8424 2.98637 9.3129C2.07304 7.7844 1.4629 6.10158 1.18799 4.35171ZM4.70838 6.34773L5.94972 5.23431C6.28942 4.92949 6.52829 4.53237 6.63568 4.09387C6.74307 3.65538 6.71409 3.19551 6.55245 2.77323L6.04921 1.46066C5.8439 0.924384 5.43722 0.48488 4.91207 0.231738C4.38692 -0.0214049 3.78283 -0.0691284 3.22295 0.0982954C1.2765 0.681599 -0.28645 2.38851 0.0444178 4.52088C0.341156 6.41167 0.999953 8.23074 1.98624 9.88263C2.96327 11.532 4.24229 12.9915 5.75941 14.1881C7.48027 15.5403 9.77899 15.0792 11.2708 13.7185C11.6976 13.3294 11.9567 12.7957 11.995 12.2262C12.0334 11.6567 11.8482 11.0943 11.4773 10.6538L10.5616 9.56637C10.2686 9.21809 9.87588 8.9634 9.43383 8.83497C8.99178 8.70654 8.52058 8.71024 8.08069 8.84558L6.47436 9.34006C6.40246 9.26773 6.33207 9.19398 6.26323 9.11885C5.9331 8.76162 5.64103 8.37244 5.39152 7.95733C5.14863 7.53836 4.94997 7.09629 4.79862 6.63797C4.76653 6.54202 4.73644 6.44545 4.70838 6.3483" fill="white" />
                                </svg>
                                {Footer.Phone}
                            </Link>


                            <Link to={Links.Instagram} target='_blank' className='lower-nav-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 14V6C1 4.67392 1.52678 3.40215 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1H14C15.3261 1 16.5979 1.52678 17.5355 2.46447C18.4732 3.40215 19 4.67392 19 6V14C19 15.3261 18.4732 16.5979 17.5355 17.5355C16.5979 18.4732 15.3261 19 14 19H6C4.67392 19 3.40215 18.4732 2.46447 17.5355C1.52678 16.5979 1 15.3261 1 14Z" stroke="white" stroke-width="1.5" />
                                    <path d="M15.5 4.51002L15.51 4.49902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>


                            <Link to={Links.Facebook} target='_blank' className='lower-nav-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                                    <path d="M7 10.35H9.5L10.5 6.75H7V4.95C7 4.023 7 3.15 9 3.15H10.5V0.126C10.174 0.0873001 8.943 0 7.643 0C4.928 0 3 1.4913 3 4.23V6.75H0V10.35H3V18H7V10.35Z" fill="white" />
                                </svg>
                            </Link>
                            <Link to={Links.Linkedin} target='_blank' className='lower-nav-link'>in</Link>
                            <Link to={Links.Tripadvisors} className='lower-nav-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                                    <path d="M12.506 1.41041e-06C9.836 1.41041e-06 7.168 0.814018 4.861 2.44309H0.5L2.463 4.65983C1.56861 5.50591 0.941617 6.6131 0.6644 7.83595C0.387184 9.0588 0.472706 10.3401 0.909731 11.5116C1.34676 12.683 2.11484 13.6898 3.11309 14.3997C4.11134 15.1096 5.29306 15.4894 6.503 15.4892C8.01482 15.4905 9.47095 14.8969 10.578 13.8279L12.5 16L14.422 13.83C15.5284 14.8979 16.9834 15.4907 18.494 15.4892C20.085 15.4892 21.6108 14.8331 22.7359 13.6653C23.8611 12.4974 24.4935 10.9134 24.494 9.26152C24.4949 8.3952 24.3213 7.53826 23.9843 6.74576C23.6472 5.95327 23.1543 5.24274 22.537 4.65983L24.5 2.44309H20.15C17.8962 0.850066 15.2325 -0.0012648 12.506 1.41041e-06ZM12.5 2.03504C14.031 2.03504 15.563 2.34964 17.004 2.97262C14.443 3.99014 12.5 6.36989 12.5 9.14212C12.5 6.36885 10.558 3.99014 7.996 2.97262C9.42314 2.35503 10.9539 2.0357 12.5 2.03504ZM6.502 5.04815C7.03504 5.04815 7.56285 5.15716 8.05531 5.36895C8.54777 5.58075 8.99523 5.89118 9.37215 6.28252C9.74906 6.67387 10.048 7.13846 10.252 7.64978C10.456 8.16109 10.561 8.70911 10.561 9.26256C10.561 9.816 10.456 10.364 10.252 10.8753C10.048 11.3867 9.74906 11.8512 9.37215 12.2426C8.99523 12.6339 8.54777 12.9444 8.05531 13.1562C7.56285 13.368 7.03504 13.477 6.502 13.477C5.42549 13.477 4.39306 13.0329 3.63185 12.2426C2.87064 11.4522 2.443 10.3803 2.443 9.26256C2.443 8.14483 2.87064 7.07288 3.63185 6.28252C4.39306 5.49217 5.42549 5.04815 6.502 5.04815ZM18.494 5.05023C19.0268 5.05002 19.5545 5.15879 20.0469 5.37032C20.5392 5.58184 20.9866 5.89199 21.3635 6.28304C21.7404 6.6741 22.0395 7.1384 22.2436 7.64945C22.4477 8.1605 22.5528 8.70828 22.553 9.26152C22.5532 9.81476 22.4484 10.3626 22.2447 10.8738C22.041 11.385 21.7423 11.8496 21.3656 12.2409C20.989 12.6323 20.5418 12.9427 20.0496 13.1546C19.5574 13.3665 19.0298 13.4757 18.497 13.4759C17.4209 13.4763 16.3887 13.0329 15.6275 12.2431C14.8663 11.4533 14.4384 10.382 14.438 9.26463C14.4376 8.14732 14.8647 7.0756 15.6254 6.28524C16.386 5.49489 17.4179 5.05064 18.494 5.05023ZM6.502 7.05412C5.93762 7.05412 5.39635 7.2869 4.99728 7.70126C4.5982 8.11562 4.374 8.67761 4.374 9.2636C4.374 9.84958 4.5982 10.4116 4.99728 10.8259C5.39635 11.2403 5.93762 11.4731 6.502 11.4731C7.06638 11.4731 7.60765 11.2403 8.00672 10.8259C8.4058 10.4116 8.63 9.84958 8.63 9.2636C8.63 8.67761 8.4058 8.11562 8.00672 7.70126C7.60765 7.2869 7.06638 7.05412 6.502 7.05412ZM18.494 7.05412C17.9296 7.05412 17.3884 7.2869 16.9893 7.70126C16.5902 8.11562 16.366 8.67761 16.366 9.2636C16.366 9.84958 16.5902 10.4116 16.9893 10.8259C17.3884 11.2403 17.9296 11.4731 18.494 11.4731C19.0584 11.4731 19.5996 11.2403 19.9987 10.8259C20.3978 10.4116 20.622 9.84958 20.622 9.2636C20.622 8.67761 20.3978 8.11562 19.9987 7.70126C19.5996 7.2869 19.0584 7.05412 18.494 7.05412Z" fill="white" />
                                </svg>

                            </Link>

                        </div>
                    </Container>

                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>

        </>
    )
}

export default Navigation
