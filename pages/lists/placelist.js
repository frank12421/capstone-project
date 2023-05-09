import Link from "next/link.js";
import { places } from "@/db/db";
import CreateCard from "@/components/CreateCard";
import { StyledBackButton, StyledALinkWhite } from "@/components/StyledButton";

export default function PlaceList() {
  return (
    <main>
      <h1>Alle Standorte - Grow Green</h1>
      <StyledBackButton>
        <StyledALinkWhite href="/">zurück </StyledALinkWhite>
      </StyledBackButton>

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
