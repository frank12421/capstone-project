import Link from "next/link.js";
import { StyledIconAdd } from "../Styling/StyledIcon";

export default function NavigationAdd({ href, color }) {
  return (
    <>
      <Link href={href}>
        <StyledIconAdd color={color} />
      </Link>
    </>
  );
}
