import { CardContainer, CardInfoLinkButton } from "./Card.Styling";
import {
  StyledIconAdd,
  StyledIconArrowBack,
  StyledIconEqual,
  StyledIconInfoCircle,
  StyledIconMinus,
} from "../Styling/StyledIcon";
import { StyledCircleButton } from "../Styling/StyledButton";

export default function ButtonCard({
  handleClick,
  backgroundcolor,
  buttonicon,
  align,
  children,
}) {
  return (
    <CardContainer backgroundcolor={backgroundcolor}>
      {children}
      <CardInfoLinkButton>
        <StyledCircleButton onClick={handleClick}>
          {buttonicon === "minus" && <StyledIconMinus align={align} />}
          {buttonicon === "add" && <StyledIconAdd align={align} />}
          {buttonicon === "info" && <StyledIconInfoCircle align={align} />}
          {buttonicon === "back" && <StyledIconArrowBack align={align} />}
          {buttonicon === "equal" && <StyledIconEqual align={align} />}
        </StyledCircleButton>
      </CardInfoLinkButton>
    </CardContainer>
  );
}
