import styled from "styled-components";
import Link from "next/link.js";
import { places } from "@/db/db";
import CreateCard from "@/components/CreateCard";

export default function PlaceList() {
  return (
    <main>
      <h1>Alle Standorte - Grow Green</h1>
      <Link href="/">zurück </Link>

      <>
        {places.map((place) => {
          return (
            <section key={place.id}>
              <CreateCard data={place} type="place" />
            </section>
          );
        })}
      </>

      {/* <ShowLists type={plants} /> */}
    </main>
  );
}
