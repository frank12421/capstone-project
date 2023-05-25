import { plants } from "@/db/db";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "@/components/Card";
import Image from "next/image";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";
import { useAllPlants } from "@/utils/helper";

export default function ShowPlantList() {
  const { data: plants, error, isLoading } = useAllPlants();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <StyledHeader>
        <h1>Alle Pflanzen von Grow Green</h1>
        <StyledNavigation navigationlink="/" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        <>
          {plants.map((plant) => {
            const imgSrc =
              plant.type === "Normal"
                ? "/pictures/Plant1.png"
                : "/pictures/Plant2.png";

            return (
              <StyledCard key={plant._id} border={"green"}>
                <h2>{plant.name}</h2>
                <StyledContentContainer>
                  <Image
                    src={imgSrc}
                    alt="Pflanze"
                    width="50"
                    height="100"
                    style={{ objectFit: "contain" }}
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
      </StyledMain>
    </>
  );
}
