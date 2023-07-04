import styled from "styled-components";
import {
  LuInfo,
  LuArrowLeftCircle,
  LuPlusCircle,
  LuMinusCircle,
  LuCircleEqual,
  LuXCircle,
  LuCheckCircle,
  LuSettings,
  LuTrash2,
  LuEdit3,
  LuCalendarPlus,
  LuSprout,
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
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconX = styled(LuXCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconCheck = styled(LuCheckCircle)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconSettings = styled(LuSettings)`
  color: ${({ color }) => `var(--${color})`};
  font-size: 2rem;
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconTrash = styled(LuTrash2)`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${(props) => props.fontSize || "2rem"};
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconEdit = styled(LuEdit3)`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${(props) => props.fontSize || "2rem"};
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconCalenderPlus = styled(LuCalendarPlus)`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${(props) => props.fontSize || "2rem"};
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledIconSprout = styled(LuSprout)`
  color: ${({ color }) => `var(--${color})`};
  font-size: ${(props) => props.fontSize || "2rem"};
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;
