import Image from "next/image.js";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigation, {
  StyledCardLink,
} from "@/components/Styling/Navigation";
import ShowDatesList from "@/components/Dates/ShowDatesList";

import { StyledCard } from "@/components/Styling/Card";

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
        <StyledCardLink href={"lists/placelist"}>
          <StyledCard backgroundcolor="globalPlaceBackgroundColor">
            Alle Standorte anzeigen
          </StyledCard>
        </StyledCardLink>
        <StyledCardLink href={"lists/plantlist"}>
          <StyledCard backgroundcolor="globalPlantBackgroundColor">
            Alle Pflanzen zeigen
          </StyledCard>
        </StyledCardLink>
      </StyledMain>
    </>
  );
}
