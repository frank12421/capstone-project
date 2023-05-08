import styled from "styled-components";
import Image from "next/image";

export default function CreateCard({ data, type }) {
  if (type === "plant") {
    const imgSrc =
      data.typ === "Normal" ? "/pictures/Plant1.png" : "/pictures/Plant2.png";

    return (
      <CardStyle>
        <h3>{data.name}</h3>
        <PlantContainerStyle>
          <div>
            <Image src={imgSrc} alt="Pflanze" width="50" height="150" />
          </div>
          <div>
            <ListElementStyled>Type: {data.typ}</ListElementStyled>
            <ListElementStyled>
              Pflanzdatum: {data.pflanzdatum}
            </ListElementStyled>
            <ListElementStyled>
              Pflanzhöhe: {data.pflanzenhoehe}
            </ListElementStyled>
            <ListElementStyled>
              Anbaueignung: {data.anbaueignung}
            </ListElementStyled>
            <ListElementStyled>Standort: {data.standort}</ListElementStyled>
          </div>
        </PlantContainerStyle>
      </CardStyle>
    );
  }

  if (type === "place") {
    const imgSrc =
      data.standort !== ""
        ? `/pictures/Place-${data.standort}.png`
        : `/pictures/Place-People.png`;

    return (
      <CardStyle>
        <h3>{data.name}</h3>
        <PlaceContainerStyle>
          <div>
            <Image width="150" height="150" alt="Pflanze" src={imgSrc} />
          </div>
          <div>
            <ListElementStyled>Kapazität: {data.kapazitaet}</ListElementStyled>
            <ListElementStyled>Licht: {data.licht}</ListElementStyled>
            <ListElementStyled>Standort: {data.standort}</ListElementStyled>
            <ListElementStyled>
              Regenschutz: {data.regenschutz}
            </ListElementStyled>
          </div>
        </PlaceContainerStyle>
      </CardStyle>
    );
  }
}

const CardStyle = styled.section`
  min-width: 355px;
  display: flex;
  flex-direction: column;
  margin: 5%;

  background-color: white;
`;

const PlantContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0.5rem;
  border: 3px solid darkred;
  border-radius: 0.7rem;
`;

const PlaceContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0.5rem;
  border: 3px solid darkgreen;
  border-radius: 0.7rem;
`;

const ListElementStyled = styled.p`
  margin: 0;
`;
