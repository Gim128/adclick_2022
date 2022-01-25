import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../button/Button';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    // return (
    //     <>
    //       <nav className='navbar'>
    //         <div className='navbar-container'>
    //           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
    //             WAVE90 <i className='fab fa-typo3'/>
    //           </Link>
    //
    //           <div className='menu-icon' onClick={handleClick}>
    //             <i className={click ?  'fas fa-times' : 'fab fa-bars'} />
    //           </div>
    //
    //           <div>
    //
    //           </div>
    //
    //           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //             <li className='nav-item'>
    //               <Link to='/home' onClick={closeMobileMenu}>
    //                 {button && <Button buttonStyle='nav-links'>Home</Button>}
    //               </Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/earn' className='nav-links' onClick={closeMobileMenu}>
    //                 EARN
    //               </Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/advertising' className='nav-links' onClick={closeMobileMenu}>
    //                 ADVERTISING
    //               </Link>
    //             </li>
    //             <li className='nav-item'>
    //               <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
    //                 CONTACT US
    //               </Link>
    //             </li>
    //             <li className='nav-item'>
    //             <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
    //               REGISTER
    //             </Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
    //               SIGN-IN
    //             </Link>
    //           </li>
    //           </ul>
    //           {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
    //           {button && <Button buttonStyle='btn--outline'>SIGN-IN</Button>}
    //         </div>
    //       </nav>
    //     </>
    // );

    return (
        <>
            <nav className="nav-bar navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="nav-left">
                        <span>WAVE90</span>
                    </div>
                    <div className="nav-middle">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                        </ul>
                    </div>
                    <div className="nav-right">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">EARN</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">ADVERTISING</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span>REGISTER</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span>SIGN-IN</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
