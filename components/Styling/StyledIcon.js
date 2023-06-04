import styled from "styled-components";
import { LuInfo, LuArrowLeftCircle, LuPlusCircle } from "react-icons/lu";

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
`;
