import styled from "styled-components";
import {
  LuInfo,
  LuArrowLeftCircle,
  LuPlusCircle,
  LuMinusCircle,
} from "react-icons/lu";

export const StyledIconInfoCircle = styled(LuInfo)`
  color: var(--globalLightColor);
  font-size: 2rem;
`;

export const StyledIconArrowBack = styled(LuArrowLeftCircle)`
  color: var(--globalNavigationIconColor);
  font-size: 2rem;
`;

export const StyledIconAdd = styled(LuPlusCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconMinus = styled(LuMinusCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconEqual = styled(LuCircleEqual)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
`;

export const StyledIconX = styled(LuXCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconMinus = styled(LuMinusCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
`;
