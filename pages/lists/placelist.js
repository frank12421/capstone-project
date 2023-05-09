import { places } from "@/db/db";
import CreateCard from "@/components/CreateCard";
import { StyledBackLink } from "@/components/StyledButton";

export default function PlaceList() {
  return (
    <main>
      <h1>Alle Standorte - Grow Green</h1>
      <StyledBackLink href="/">zurück </StyledBackLink>
      <>
        {places.map((place) => {
          return (
            <section key={place.id}>
              <CreateCard data={place} type="place" />
            </section>
          );
        })}
      </>
    </main>
  );
}
