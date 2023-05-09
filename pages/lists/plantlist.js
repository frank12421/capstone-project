import Link from "next/link.js";
import { plants } from "@/db/db";
import CreateCard from "@/components/CreateCard";
import { StyledBackButton, StyledALinkWhite } from "@/components/StyledButton";

export default function PlantList() {
  return (
    <main>
      <h1>Alle Pflanzen - Grow Green</h1>
      <StyledBackButton>
        <StyledALinkWhite href="/">zurück </StyledALinkWhite>
      </StyledBackButton>
      <>
        {plants.map((plant) => {
          return (
            <section key={plant.id}>
              <CreateCard data={plant} type="plant" />
            </section>
          );
        })}
      </>
    </main>
  );
}
