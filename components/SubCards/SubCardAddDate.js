import { StyledSubCardLink } from "../Styling/StyledButton";
import { StyledIconCalenderPlus } from "../Styling/StyledIcon";

export function SubCardAddDate({ href, backgroundcolor, color, children }) {
  return (
    <StyledSubCardLink
      href={href}
      color={color}
      backgroundcolor={backgroundcolor}
    >
      {children}
      <StyledIconCalenderPlus color={color} fontSize={"1.2rem"} />
    </StyledSubCardLink>
  );
}
