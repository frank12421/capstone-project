import { CardContainerLink, CardInfoLinkButton } from "./Card.Styling";
import { StyledIconInfoCircle } from "../Styling/StyledIcon";

export default function LinkCard({ href, backgroundcolor, color, children }) {
  return (
    <CardContainerLink href={href} backgroundcolor={backgroundcolor}>
      {children}
      <CardInfoLinkButton>
        <StyledIconInfoCircle color={color}/>
      </CardInfoLinkButton>
    </CardContainerLink>
  );
}
