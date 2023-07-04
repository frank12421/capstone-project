import { StyledSubCardLink } from "../Styling/StyledButton";
import {
  StyledIconCalenderPlus,
  StyledIconSprout,
} from "../Styling/StyledIcon";

export function SubCardEditPlants({ href, backgroundcolor, color, children }) {
  console.log("href=", { href });
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
