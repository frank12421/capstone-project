import { plants } from "@/db/db";
import CreateCard from "../components/Card";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
`;

export default function ShowPlantList() {
  // console.log("Plants", plants);
  return (
    <>
      <p>Hello</p>
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
