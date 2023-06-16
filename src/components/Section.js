import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
            <Fade top>

                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

      <Buttons>
        <Fade top>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>

                {rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
                }
             </ButtonGroup>

                {/* <DownArrow src="/images/down-arrow.svg" /> */}
                </Fade>
            </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical
  align-items: center;

  //   background-image: url("/images/model-s.jpg");
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin: 20px 20px 70px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: 0.85;
  text-transform: none;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

// const DownArrow = styled.img`
//   margin-top: 20px;
//   height: 40px;
// background:

// `;

const Buttons = styled.div``;
