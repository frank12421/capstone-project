import { StyledSubCardLink } from "../Styling/StyledButton";
import { StyledIconSprout } from "../Styling/StyledIcon";

export function SubCardEditPlantsAtPlace({
  href,
  backgroundcolor,
  color,
  children,
}) {
  return (
    <StyledSubCardLink
      href={href}
      color={color}
      backgroundcolor={backgroundcolor}
    >
      {children}
      <StyledIconSprout color={color} fontSize={"1.2rem"} />
    </StyledSubCardLink>
  );
}
