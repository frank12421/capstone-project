import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  width: auto;
  margin: 5px;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  text-decoration: none;
`;

export const StyledAddLink = styled(Link)`
  margin: 20px;
  padding: 10px 50px;
  border-radius: 10px;
  color: white;
  background-color: ${({ color }) => color || "lightgrey"};
  text-decoration: none;
`;

// export const StyledModifyCountButtonActive = styled.button`
//   color: ${({ color }) => color || "lightgrey"};
//   background-color: white;
//   border-style: none;
//   text-decoration: none;
//   font-size: 1rem;
//   cursor: pointer;
//   &:hover {
//     font-weight: 900;
//   }
// `;

// export const StyledModifyCountButtonInactive = styled.button`
//   color: lightgrey;
//   background-color: white;
//   border-style: none;
//   text-decoration: none;
//   font-size: 4rem;
// `;

export const StyledButton = styled.button`
  margin-bottom: 0.5rem;
  color: ${({ color }) => color || "lightgrey"};
  background-color: lightgray;
  border: 1px solid darkgreen;
  border-radius: 0.2rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

export const StyledRoundButtonActiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #272440;
  color: #bf3604;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #30400d;
  }

  &:active {
    background-color: #d96704;
  }
`;

export const StyledRoundButtonInActive = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #bf3604;
  color: #bf3604;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #30400d;
  }

  &:active {
    background-color: #d96704;
  }
`;

export const StyledTextButton = styled.button`
  color: var(--globalLightColor);
  background-color: #d96704;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;
