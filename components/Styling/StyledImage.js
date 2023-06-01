import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const StyledIconImage = styled(Image)`
  margin-left: ${(props) => (props.align === "right" ? "auto" : "initial")};
  margin-right: ${(props) => (props.align === "left" ? "auto" : "initial")};
`;
