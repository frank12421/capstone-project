import { StyledHeader } from "../Styling/Header";
import StyledNavigation from "../Styling/Navigation";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
} from "../Styling/Card";
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
                    <ShortListPlants
                      plantId={plant.plantid}
                      placeId={placeData._id}
                      uniquePlantId={plant._id}
                    />
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
