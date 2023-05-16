import Image from "next/image.js";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import { StyledNavigationLink } from "@/components/StyledButton";
import StyledNavigation from "@/components/Navigation";

export default function HomePage() {
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
        <StyledNavigation color="darkgreen" navigationlink="/lists/plantlist">
          Alle Pflanzen anzeigen
        </StyledNavigation>
        <StyledNavigation color="darkred" navigationlink="/lists/placelist">
          Alle Standorte anzeigen
        </StyledNavigation>
      </StyledMain>
    </>
  );
}
