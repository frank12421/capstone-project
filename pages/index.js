import Image from "next/image.js";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigation from "@/components/Styling/Navigation";
import ShowDatesList from "@/components/Dates/ShowDatesList";

export default function HomePage({ dates, places }) {
  return (
    <>
      <StyledHeader>
        <h1>Hello from Grow Green</h1>
      </StyledHeader>

      <StyledMain>
        <Image
          width="350"
          height="150"
          alt="Pflanze"
          src={"/pictures/Header-Home.png"}
          style={{ objectFit: "contain" }}
        />
        <ShowDatesList />
        <StyledNavigation color="darkgreen" navigationlink="/lists/plantlist">
          Alle Pflanzen anzeigen
        </StyledNavigation>
        <StyledNavigation color="darkred" navigationlink="/lists/placelist">
          Alle Standorte anzeigen
        </StyledNavigation>
        <StyledNavigation color="tomato" navigationlink="/addplace">
          Neue Standorte anlegen
        </StyledNavigation>
      </StyledMain>
    </>
  );
}
