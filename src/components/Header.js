import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>

        ))}

      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>

        <a href="#">Menu</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}>
            <a href="#">{car}</a>
          </li>
        ))}
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#"> Model 3 </a>
        </li>
        <li>
          <a href="#"> Model X </a>
        </li>
        <li>
          <a href="#"> Model Y </a>
        </li>
        <li>
          <a href="#"> Solar Roof</a>
        </li>
        <li>
          <a href="#"> Solar Panels </a>
        </li>
        <li>
          <a href="#"> Powerwall</a>
        </li>
        <li>
          <a href="#"> Existing Inventory </a>
        </li>
        <li>
          <a href="#"> Used Inventory</a>
        </li>
        <li>
          <a href="#"> Trade-In </a>
        </li>
        <li>
          <a href="#"> Demo Drive </a>
        </li>
        <li>
          <a href="#"> Insurance </a>
        </li>
        <li>
          <a href="#"> Fleet </a>
        </li>
        <li>
          <a href="#">Commercial Energy </a>
        </li>
        <li>
          <a href="#"> Utilities </a>
        </li>
        <li>
          <a href="#"> Charging </a>
        </li>
        <li>
          <a href="#"> Careers </a>
        </li>
        <li>
          <a href="#">Find Us </a>
        </li>
        <li>
          <a href="#"> Events </a>
        </li>
        <li>
          <a href="#"> Support </a>
        </li>
        <li>
          <a href="#"> Investor Relations </a>
        </li>
        <li>
          <a href="#"> Shop</a>
        </li>
        <li>
          <a href="#"> Account </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: none;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: none;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    a {
      font-weight: ;
    }
  }
`;

const CustomMenu = styled(MenuIcon)``;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
