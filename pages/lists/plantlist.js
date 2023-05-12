import { plants } from "@/db/db";
import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "@/components/Card";
import Image from "next/image";

export default function PlantList() {
  return (
    <main>
      <h1>Alle Pflanzen - Grow Green</h1>
      <StyledLink color="darkgreen" href="/">
        zurück
      </StyledLink>
      <>
        {plants.map((plant) => {
          const imgSrc =
            plant.type === "Normal"
              ? "/pictures/Plant1.png"
              : "/pictures/Plant2.png";

          return (
            <StyledCard key={plant.id} border={"green"}>
              <h2>{plant.name}</h2>
              <StyledContentContainer>
                <Image
                  src={imgSrc}
                  alt="Pflanze"
                  width="50"
                  height="150"
                  style={{ objectFit: "cover" }}
                />
                <StyledCardList>
                  <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
                  <StyledCardListItem>
                    Pflanzdatum: {plant.plantingdate}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Pflanzhöhe: {plant.plantheight}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Anbaueignung: {plant.cultivation_suitability}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Standort: {plant.location}
                  </StyledCardListItem>
                </StyledCardList>
              </StyledContentContainer>
            </StyledCard>
          );
        })}
      </>
    </main>
  );
}
