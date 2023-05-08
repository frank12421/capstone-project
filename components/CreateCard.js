import styled from "styled-components";
import Image from "next/image";

export default function CreateCard({ data, type }) {
  if (type === "plant") {
    const imgSrc =
      data.typ === "Normal" ? "/pictures/Plant1.png" : "/pictures/Plant2.png";

    return (
      <PlantCardStyle>
        <h3>{data.name}</h3>
        <ContainerStyle>
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
        </ContainerStyle>
      </PlantCardStyle>
    );
  }

  if (type === "place") {
    const imgSrc =
      data.standort !== ""
        ? `/pictures/Place-${data.standort}.png`
        : `/pictures/Place-People.png`;

    return (
      <PlaceCardStyle>
        <h3>{data.name}</h3>
        <ContainerStyle>
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
        </ContainerStyle>
      </PlaceCardStyle>
    );
  }
}

const PlaceCardStyle = styled.section`
  min-width: 355px;
  display: flex;
  flex-direction: column;
  margin: 5%;
  padding: 0.5rem;
  background-color: white;
  border: 3px solid darkgreen;
  border-radius: 0.7rem;
`;

const PlantCardStyle = styled.section`
  min-width: 355px;
  display: flex;
  flex-direction: column;
  margin: 5%;
  padding: 0.5rem;
  background-color: white;
  border: 3px solid darkred;
  border-radius: 0.7rem;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
`;

const ListElementStyled = styled.p`
  margin: 0;
`;
