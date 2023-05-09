import { plants } from "@/db/db";
import CreateCard from "@/components/CreateCard";
import { StyledBackLink } from "@/components/StyledButton";

export default function PlantList() {
  return (
    <main>
      <h1>Alle Pflanzen - Grow Green</h1>
      <StyledBackLink href="/">zurück </StyledBackLink>
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
