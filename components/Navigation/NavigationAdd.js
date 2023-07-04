import Link from "next/link.js";
import { StyledIconAdd } from "../Styling/StyledIcon";

export default function NavigationAdd({ href, color, navibacklink, titel, id }) {
  return (
    <>
      <Link href={
        {pathname:`/forms/showdateform/`, query:{navibacklink:navibacklink,titel:titel, id:id}}}>
        <StyledIconAdd color={color} />
      </Link>
    </>
  );
}
