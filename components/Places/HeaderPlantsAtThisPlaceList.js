import ButtonCard from "../Card/ButtonCard";

export default function HeaderPlantsAtThisPlaceList({
  placeData,
  setAddPlant,
  addPlant,
}) {
  const freePlaces = placeData.capacity - placeData.plants.length;

  function toggleOnClick() {
    setAddPlant(!addPlant);
  }

  return (
    <>
      <ButtonCard
        backgroundcolor={"globalPlaceBackgroundColor"}
        buttonicon={addPlant ? "add" : "equal"}
        handleClick={toggleOnClick}
      >
        <span>
          Kapazität: {placeData.capacity} | Noch frei: {freePlaces}
        </span>
        <span>
          Licht: {placeData.lightratio} | Regenschutz:{" "}
          {placeData.rainprotection}
        </span>
      </ButtonCard>
    </>
  );
}
