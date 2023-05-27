import { StyledHeader } from "../Header";
import StyledNavigation from "../Navigation";
import { StyledCard, StyledCardList, StyledCardListItem } from "../Card";
import ShortListPlants from "../Plants/ShortListPlants";

export default function HeaderPlaceList({ placeData }) {
  const freePlaces = placeData.capacity - placeData.plants.length;
  const plantsHere = placeData.plants;

  return (
    <>
      <StyledHeader position="fixed">
        <StyledNavigation navigationlink="/lists/placelist" color="darkgreen">
          zurück
        </StyledNavigation>
        <StyledCard border="red">
          <h3>{placeData.name}</h3>
          <StyledCardList>
            <StyledCardListItem>
              Kapazität:{placeData.capacity} | Noch frei: {freePlaces}
              <StyledCardList>
                {plantsHere.map((plant) => (
                  <StyledCardListItem key={plant._id}>
                    <ShortListPlants id={plant.plantid} />
                  </StyledCardListItem>
                ))}
              </StyledCardList>
            </StyledCardListItem>
          </StyledCardList>
        </StyledCard>
      </StyledHeader>
    </>
  );
}
