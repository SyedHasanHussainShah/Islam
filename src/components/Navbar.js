import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  Nightlight as NightlightIcon,
  Book as BookIcon,
  Handshake as HandshakeIcon,
  CalendarToday as CalendarTodayIcon,
  LocationOn as LocationOnIcon,
  Favorite as FavoriteIcon,
  Mosque as MosqueIcon,
} from "@mui/icons-material"; // Use Material-UI Icons
import styled, { css, keyframes } from "styled-components";
import {
  FaPray
} from 'react-icons/fa';


const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const flashColor = keyframes`
  0% {
    background-color: #009900;
  }
  50% {
    background-color: #03c03c;
  }
  100% {
    background-color: #009900;
  }
`;

const CustomNavbar = styled(Navbar)`
  background-color: #0c8d0cff;
  padding: 20px 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  animation: ${slideDown} 0.5s ease, ${flashColor} 5s ease-in-out infinite;
`;

const Brand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
  color: #fff;
  text-decoration: none;
  margin-right: 80px;
  animation: ${slideDown} 0.5s ease 0.1s forwards;
  opacity: 0;

  &:hover {
    color: #fff;
  }
`;

const NavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 8px;
  color: #f0ededff;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  animation: ${slideDown} 0.5s ease 0.2s forwards;
  opacity: 0;

  &:hover {
    background-color: black;
    color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #1f1f1f98;
      color: #fff;
    `}
`;

const IconStyle = {
  fontSize: 24, // Adjust icon size
  color: "#0bf641ff",
  marginRight: 8, // Adjust margin
};

const AppNavbar = ({ userProfile }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    setExpanded(false); // close navbar after click
  };

  return (
    <CustomNavbar expand="lg" fixed="top" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Brand as={Link} to="/" onClick={handleNavClick}>
          <MosqueIcon style={IconStyle} />
          Islam360
        </Brand>

        {/* Profile picture in the header (visible when navbar is collapsed) */}
        {userProfile.profilePicture && (
          <div className="d-lg-none ms-auto">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
              }}
            />
          </div>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav gap-10">
          <Nav className="w-100 gap-10">
            <NavLink
              as={Link}
              to="/"
              active={isActive("/")}
              onClick={handleNavClick}
            >
              <HomeIcon style={IconStyle} />
              Home
            </NavLink>
            <NavLink
              as={Link}
              to="/ibadyat"
              active={isActive("/ibadyat")}
              onClick={handleNavClick}
            >
              <FaPray style={IconStyle} />
              Ibadyat
            </NavLink>
            <NavLink
              as={Link}
              to="/quran"
              active={isActive("/quran")}
              onClick={handleNavClick}
            >
              <BookIcon style={IconStyle} />
              Quran
            </NavLink>
            <NavLink
              as={Link}
              to="/dua"
              active={isActive("/dua")}
              onClick={handleNavClick}
            >
              <HandshakeIcon style={IconStyle} />
              Duas
            </NavLink>
            <NavLink
              as={Link}
              to="/calendar"
              active={isActive("/calendar")}
              onClick={handleNavClick}
            >
              <CalendarTodayIcon style={IconStyle} />
              Calendar
            </NavLink>
            <NavLink
              as={Link}
              to="/qibla"
              active={isActive("/qibla")}
              onClick={handleNavClick}
            >
              <LocationOnIcon style={IconStyle} />
              Qibla
            </NavLink>
            <NavLink
              as={Link}
              to="/names"
              onClick={handleNavClick}
            >
              <FavoriteIcon style={IconStyle} />
              Names
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        {/* Profile picture (visible on desktop only) */}
        <div className="d-none d-lg-block ms-3">
          {userProfile.profilePicture ? (
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          ) : (
            <HomeIcon style={{ ...IconStyle, color: "#fff" }} />
          )}
        </div>
      </Container>
    </CustomNavbar>
  );
};

export default AppNavbar;