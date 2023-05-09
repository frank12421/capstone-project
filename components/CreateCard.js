import styled from "styled-components";
import Image from "next/image";

const CardStyle = styled.section`
  min-width: 355px;
  margin: 5%;
  background-color: white;
`;

const PlantContainerStyle = styled.div`
  border: 3px solid green;
  border-radius: 0.7rem;
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PlaceContainerStyle = styled.div`
  border: 3px solid darkred;
  border-radius: 0.7rem;
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const ListElementStyled = styled.p`
  margin: 0;
`;

export default function CreateCard({ data, type }) {
  if (type === "plant") {
    const imgSrc =
      data.typ === "Normal" ? "/pictures/Plant1.png" : "/pictures/Plant2.png";

    return (
      <CardStyle>
        <PlantContainerStyle>
          <h3>{data.name}</h3>
          <ContentContainerStyled>
            <Image src={imgSrc} alt="Pflanze" width="50" height="150" />
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
          </ContentContainerStyled>
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
        <PlaceContainerStyle>
          <h3>{data.name}</h3>
          <ContentContainerStyled>
            <Image
              width="150"
              height="150"
              alt="Pflanze"
              src={imgSrc}
              style={{ objectFit: "contain" }}
            />
            <div>
              <ListElementStyled>
                Kapazität: {data.kapazitaet}
              </ListElementStyled>
              <ListElementStyled>Licht: {data.licht}</ListElementStyled>
              <ListElementStyled>Standort: {data.standort}</ListElementStyled>
              <ListElementStyled>
                Regenschutz: {data.regenschutz}
              </ListElementStyled>
            </div>
          </ContentContainerStyled>
        </PlaceContainerStyle>
      </CardStyle>
    );
  }
}
