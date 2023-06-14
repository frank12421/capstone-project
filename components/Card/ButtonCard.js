import { CardContainer, CardInfoLinkButton } from "./Card.Styling";
import {
  StyledIconAdd,
  StyledIconArrowBack,
  StyledIconInfoCircle,
  StyledIconMinus,
} from "../Styling/StyledIcon";
import { StyledCircleButton } from "../Styling/StyledButton";

export default function ButtonCard({
  handleClick,
  backgroundcolor,
  buttonicon,
  children,
}) {
  return (
    <CardContainer backgroundcolor={backgroundcolor}>
      {children}
      <CardInfoLinkButton>
        <StyledCircleButton onClick={handleClick}>
          {buttonicon === "minus" && <StyledIconMinus />}
          {buttonicon === "add" && <StyledIconAdd />}
          {buttonicon === "info" && <StyledIconInfoCircle />}
          {buttonicon === "back" && <StyledIconArrowBack />}
        </StyledCircleButton>
      </CardInfoLinkButton>
    </CardContainer>
  );
}
