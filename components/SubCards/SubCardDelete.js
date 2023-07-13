import { StyledSubCardButton } from "../Styling/StyledButton";
import { StyledIconTrash } from "../Styling/StyledIcon";

export function SubCardDelete({ onClick, backgroundcolor, color, children }) {
  return (
    <StyledSubCardButton
      type="button"
      color={color}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
    >
      {children}
      <StyledIconTrash color={color} fontSize={"1.2rem"} />
    </StyledSubCardButton>
  );
}
