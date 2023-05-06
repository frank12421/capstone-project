import { plants } from "@/db/db";
import CreateCard from "./CreateCard";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
`;

export default function ShowPlantList() {
  return (
    <>
      {plants.map((plant) => {
        return (
          <section key={plant.id}>
            <CreateCard data={plant} />
          </section>
        );
      })}
    </>
  );
}
