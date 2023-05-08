import styled from "styled-components";
import Link from "next/link.js";
import { plants } from "@/db/db";
import CreateCard from "@/components/CreateCard";

export default function PlantList() {
  return (
    <main>
      <h1>Alle Pflanzen - Grow Green</h1>
      <Link href="/">zurück </Link>
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
