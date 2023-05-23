import styled from "styled-components";
import moment from "moment";
import { useState } from "react";

const StyeldDatesList = styled.section`
  width: 100%;
  margin: 0;
  max-height: 155px;
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin-bottom: 20px;
  overflow-y: auto;
`;

const StyledDatesListRow = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: 25% 30% 1fr;
  grid-auto-rows: 1.4rem;
  align-items: center;
  justify-items: start;
  list-style: none;
  padding-left: 0.5rem;

  position: ${(props) => (props.$head ? "sticky" : "static")};
  top: ${(props) => (props.$head ? "0px" : "20px")};
  background-color: ${(props) => (props.$head ? "darkgray" : "")};
  color: ${(props) => (props.$head ? "white" : "black")};
  cursor: ${(props) => (props.$hover ? "pointer" : "")};
  &:hover {
    font-weight: ${(props) => (props.$hover ? 900 : 300)};
  }
`;

const StyledDatesDetailCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1.4rem;
  align-items: center;
  justify-items: start;
  padding: 10px 10px 10px 20px;
`;

const StyledDatesDetailCardButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: darkblue;
  color: lightgray;
  text-decoration: none;
  border-style: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;

export default function ShowDateList({ dates, places }) {
  const sortDates = [...dates]
    .filter(
      (date) =>
        moment(date.data.date).format(`YYYY-MM-DD`) >=
        moment().format(`YYYY-MM-DD`)
    )
    .sort((a, b) => new Date(a.data.date) - new Date(b.data.date));

  const [clickindex, setClickIndex] = useState(null);

  function handelClickDate(index) {
    setClickIndex(index);
  }
  function DateListRow({ date, index }) {
    let wert;
    const currentDate = moment().format("YYYY-MM-DD");
    const tomorrowDate = moment().add(1, "d").format("YYYY-MM-DD");
    const thisDate = date.data.date;

    thisDate === currentDate
      ? (wert = "Heute")
      : thisDate === tomorrowDate
      ? (wert = "Morgen")
      : moment(thisDate).week() === moment().week()
      ? (wert = "Diese Woche")
      : (wert = thisDate);

    return (
      <StyledDatesListRow $hover onClick={() => handelClickDate(index)}>
        <p>{wert}</p>
        <p>{date.data.promptlist}</p>
        <FindPlace locationId={date.location} />
      </StyledDatesListRow>
    );
  }

  function FindPlace({ locationId }) {
    return (
      places.find((place) => place.id === locationId) && (
        <>{places[locationId - 1].name}</>
      )
    );
  }

  function TranslateDateSeries({ form, frequency }) {
    return form === "single" ? (
      <p>Einzeltermin</p>
    ) : (
      <p>
        Terminserie:
        {frequency === "hour" && <>stündlich</>}
        {frequency === "day" && <>täglich</>}
        {frequency === "week" && <>wöchentlich</>}
        {frequency === "month" && <>monatlich</>}
        {frequency === "year" && <>järlich</>}
      </p>
    );
  }

  function CheckNoToday({ date, index }) {
    if (index === 0 && date.data.date !== moment().format("YYYY-MM-DD"))
      return (
        <StyledDatesListRow>
          <p>Heute nix</p>
          <p>Chillen mit Grow Green</p>
          <p>Wo immer du magst</p>
        </StyledDatesListRow>
      );
  }

  return (
    <>
      {clickindex === null ? (
        <StyeldDatesList>
          <StyledDatesListRow $head>
            <p key="wann">Wann</p>
            <p key="was">Was</p>
            <p key="wo">Wo</p>
          </StyledDatesListRow>
          {dates.length !== 0 ? (
            sortDates.map((date, index) => (
              <>
                <CheckNoToday key="heutenix" date={date} index={index} />
                <DateListRow key={date.id} date={date} index={index} />
              </>
            ))
          ) : (
            <StyledDatesListRow>Keine Termine</StyledDatesListRow>
          )}
        </StyeldDatesList>
      ) : (
        <StyeldDatesList>
          <StyledDatesDetailCard>
            <StyledDatesDetailCardButton
              type="button"
              onClick={() => handelClickDate(null)}
            >
              X
            </StyledDatesDetailCardButton>

            <p>Datum:</p>
            <p>{sortDates[clickindex].data.date}</p>
            <p>Zeit:</p>
            <p>{sortDates[clickindex].data.time}</p>
            <TranslateDateSeries
              form={sortDates[clickindex].data.dateform}
              frequency={sortDates[clickindex].data.datefrequency}
            />
            <p>Serie:{sortDates[clickindex].data.dateform}</p>
            <p>Stichwort:{sortDates[clickindex].data.promptlist}</p>
            <>
              Standort:{" "}
              <FindPlace locationId={sortDates[clickindex].location} />
            </>
            <p>Notiz:{sortDates[clickindex].data.description}</p>
          </StyledDatesDetailCard>
        </StyeldDatesList>
      )}
    </>
  );
}
