import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const StyledIconImage = styled(Image)`
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;

export const StyledHeadImage = styled(Image)`
  height: 80px;
  width: auto;
  padding-left: 30px;
`;

export const StyledPlantImage = styled(Image)`
  height: 100px;
  width: auto;
`;

export const StyledPlaceImage = styled(Image)`
  height: auto;
  width: 100px;
`;
