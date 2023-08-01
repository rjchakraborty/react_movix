import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY])

    const searchQueryHandler = (event) => {
        if (event.key == "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    }

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const closeSearchMenu = () => {
        setMobileMenu(false);
        setShowSearch(false);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        navigate(`/explore/${type}`);
        closeSearchMenu();
    }

    const openHome = () => {
        navigate('/');
    }

    return (
        <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={openHome}>
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigationHandler('movie')}>Movie</li>
                    <li className="menuItem" onClick={() => navigationHandler('tv')}>TV Shows</li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={showSearch ? closeSearchMenu : openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={showSearch ? closeSearchMenu : openSearch} />
                    {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
                </div>
            </ContentWrapper>
            {showSearch && <div className="searchBar">
                <ContentWrapper>
                    <div className="searchInput">
                        <input
                            type="text" name="" id=""
                            placeholder='Search for movie or tv show...'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler} />
                        <VscChromeClose onClick={() => setShowSearch(false)} />
                    </div>
                </ContentWrapper>
            </div>}
        </header>
    );
};

export default Header;
