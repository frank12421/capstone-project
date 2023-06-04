import { CardContainerLink, CardInfoLinkButton } from "./Card.Styling";
import { StyledIconInfoCircle } from "../Styling/StyledIcon";

export default function InfoCard({ href, backgroundcolor, children }) {
  return (
    <CardContainerLink href={href} backgroundcolor={backgroundcolor}>
      {children}
      <CardInfoLinkButton>
        <StyledIconInfoCircle />
      </CardInfoLinkButton>
    </CardContainerLink>
  );
}
