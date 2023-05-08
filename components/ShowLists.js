import { plants } from "@/db/db";
import CreateCard from "./CreateCard";
import styled from "styled-components";
import { places } from "@/db/db";

export default function ShowPlantList() {
  return (
    <>
      {places.map((place) => {
        return (
          <section key={place.id}>
            <CreateCard data={place} type="place" />
          </section>
        );
      })}
    </>
  );
}
