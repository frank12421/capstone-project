import { StyledHeader } from "@/components/Styling/Header";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledMain } from "@/components/Styling/Main";
import ShowDatesList from "@/components/Dates/ShowDatesList";
import Link from "next/link";
import { StyledIconAdd } from "@/components/Styling/StyledIcon";

export default function DatesList({navibacklink, titel, id, color}) {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Alle Termine | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
          <Link href={
        {pathname:`/forms/showdateform/`, query:{navibacklink:navibacklink,titel:titel, id:id}}}>
        <StyledIconAdd color={color} />
      </Link>
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <ShowDatesList />
      </StyledMain>
    </>
  );
}
