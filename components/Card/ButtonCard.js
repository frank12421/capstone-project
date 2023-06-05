import { CardContainer, CardInfoLinkButton } from "./Card.Styling";

export default function ButtonCard({ backgroundcolor, children }) {
  return (
    <CardContainer backgroundcolor={backgroundcolor}>
      <CardInfoLinkButton>{children}</CardInfoLinkButton>
    </CardContainer>
  );
}
