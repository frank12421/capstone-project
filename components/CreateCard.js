import styled from "styled-components";
import Image from "next/image";

export default function CreateCard({ data }) {
  const imgSrc =
    data.typ === "Normal" ? "/pictures/Plant1.png" : "/pictures/Plant2.png";

  return (
    <CardStyle>
      <h3>{data.name}</h3>
      <ContainerStyle>
        <div>
          <Image src={imgSrc} alt="Pflanze" width="50" height="150" />
        </div>
        <div>
          <p>Type: {data.typ}</p>
          <p>Pflanzdatum: {data.pflanzdatum}</p>
          <p>Pflanzhöhe: {data.pflanzenhoehe}</p>
          <p>Anbaueignung: {data.anbaueignung}</p>
          <p>Standort: {data.standort}</p>
        </div>
      </ContainerStyle>
    </CardStyle>
  );
}

const CardStyle = styled.section`
  margin: 5%;
  padding: 0.5rem;
  background-color: lightgrey;
  border: 2px solid darkred;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0;
`;
