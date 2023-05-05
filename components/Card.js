import styled from "styled-components";

const CardStyle = styled.section`
  margin: 5%;
  padding: 0.5rem;
  background-color: lightgrey;
  border: 2px solid green;
  border-radius: 0.7rem;
`;

export default function CreateCard({ data }) {
  //   console.log("Card-Daten:", data);
  return (
    <CardStyle>
      <h1>{data.name}</h1>
      <p>{data.typ}</p>
      <p>{data.pflanzdatum}</p>
      <p>{data.pflanzhöhe}</p>
      <p>{data.anbaueignung}</p>
      <p>{data.standort}</p>
    </CardStyle>
  );
}
