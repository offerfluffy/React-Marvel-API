// Button.js
import styled from "styled-components";

const getColors = (type) => {
  if (type === "secondary") {
    return {
      bg: "#5c5c5c",
      border: "#5c5c5c",
    };
  }

  return {
    bg: "#9f0013",
    border: "#9f0013",
  };
};

const Button = styled.a`
  min-width: 101px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  transition: 0.3s transform;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;

  &:hover {
    transform: translateY(-5px);
  }

  &::before,
  &::after {
    content: "";
    display: block;
    height: 10px;
    transition: none;
  }

  &::before {
    margin-left: 10px;
    background-color: ${({ $type }) => getColors($type).bg};
  }

  &::after {
    margin-right: 10px;
    background-color: ${({ $type }) => getColors($type).bg};
  }

  .inner {
    position: relative;
    background-color: ${({ $type }) => getColors($type).bg};
    line-height: 18px;
    padding: 0 18px;
    transition: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      border-color: ${({ $type }) => getColors($type).border} transparent;
      border-style: solid;
      border-width: 0 0 10px 10px;
      display: block;
      transition: none;
    }

    &::before {
      top: -10px;
      left: 0;
    }

    &::after {
      bottom: -10px;
      right: 0;
      transform: rotate(180deg);
    }
  }
`;

const ButtonLong = styled(Button)`
  display: block;
  width: 170px;
  margin: 45px auto 0 auto;
`;

export { Button, ButtonLong };
