import { CardContainerLink, CardInfoLinkButton } from "../Styling/Card";
import { StyledInfoCircle } from "../Styling/StyledIcon";

export default function InfoCard({ href, backgroundcolor, children }) {
  return (
    <CardContainerLink href={href} backgroundcolor={backgroundcolor}>
      {children}
      <CardInfoLinkButton>
        <StyledInfoCircle />
      </CardInfoLinkButton>
    </CardContainerLink>
  );
}
