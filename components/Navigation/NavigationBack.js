import Link from "next/link.js";
import { StyledIconArrowBack } from "../Styling/StyledIcon";

export default function NavigationBack({ href }) {
  return (
    <>
      <Link href={href}>
        <StyledIconArrowBack />
      </Link>
    </>
  );
}
