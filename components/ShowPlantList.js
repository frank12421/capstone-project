import { plants } from "@/db/db";
import CreateCard from "./CreateCard";
import styled from "styled-components";
import { places } from "@/db/db";

const ListItem = styled.li`
  list-style: none;
`;

export default function ShowPlantList({ type }) {
  if (type === "plants") {
    return (
      <>
        {plants.map((plant) => {
          return (
            <section key={plant.id}>
              <CreateCard data={plant} type="plant" />
            </section>
          );
        })}
      </>
    );
  }

  if (type === "places") {
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
}
