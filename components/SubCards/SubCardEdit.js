import { StyledSubCardButton } from "../Styling/StyledButton";
import { StyledIconEdit } from "../Styling/StyledIcon";

export function SubCardEdit({ onClick, backgroundcolor, color, children }) {
  return (
    <StyledSubCardButton
      type="button"
      color={color}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
    >
      {children}
      <StyledIconEdit color={color} fontSize={"1.2rem"} />
    </StyledSubCardButton>
  );
}
