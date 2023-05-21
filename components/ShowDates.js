import styled from "styled-components";
import moment from "moment";
import { useState } from "react";

const StyeldTabel = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: bisque;
  margin-bottom: 20px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
`;

export default function ShowDates({ dates, places }) {
  const sortDates = [...dates].sort(
    (a, b) => new Date(a.data.date) - new Date(b.data.date)
  );

  const [clickindex, setClickIndex] = useState(null);

  function handelClickDate(index) {
    setClickIndex(index);
  }

  function DefineWhen({ date }) {
    if (date === moment().format(`YYYY-MM-DD`)) {
      return <p>Heute</p>;
    } else if (date === moment().add(1, `d`).format(`YYYY-MM-DD`)) {
      return <p>Morgen</p>;
    } else if (moment(date).week() === moment().week()) {
      return <p>Diese Woche</p>;
    } else {
      return <p>{date}</p>;
    }
  }

  function PlaceFind({ locationId }) {
    return (
      places.find((place) => place.id === locationId) && (
        <>{places[locationId - 1].name}</>
      )
    );
  }

  return (
    <>
      {clickindex === null ? (
        <>
          <StyeldTabel>
            <StyledRow key={"start"}>
              <p>Wann</p>
              <p>Was</p>
              <p>Wo</p>
            </StyledRow>
            {dates.length !== 0 &&
              sortDates.map((date, index) => (
                <StyledRow key={date.id} onClick={() => handelClickDate(index)}>
                  <DefineWhen date={date.data.date} />
                  <p>{date.data.promptlist}</p>
                  <PlaceFind locationId={date.location} />
                </StyledRow>
              ))}
          </StyeldTabel>
        </>
      ) : (
        <>
          <p>Datum:{sortDates[clickindex].data.date}</p>
          <p>Zeit:{sortDates[clickindex].data.time}</p>
          {sortDates[clickindex].data.dateform === "single" && (
            <p>Einzeltermin</p>
          )}
          {sortDates[clickindex].data.dateform === "series" && (
            <p>
              Terminserie:
              {sortDates[clickindex].data.datefrequency === "hour" && (
                <>stündlich</>
              )}
              {sortDates[clickindex].data.datefrequency === "day" && (
                <>täglich</>
              )}
              {sortDates[clickindex].data.datefrequency === "week" && (
                <>wöchentlich</>
              )}
              {sortDates[clickindex].data.datefrequency === "month" && (
                <>monatlich</>
              )}
              {sortDates[clickindex].data.datefrequency === "year" && (
                <>järlich</>
              )}
            </p>
          )}

          <p>Serie:{sortDates[clickindex].data.dateform}</p>
          <p>Stichwort:{sortDates[clickindex].data.promptlist}</p>
          <p>
            Standort: <PlaceFind locationId={sortDates[clickindex].location} />
          </p>
          <p>Notiz:{sortDates[clickindex].data.description}</p>
          <button type="button" onClick={() => handelClickDate(null)}>
            zurück
          </button>
        </>
      )}
    </>
  );
}
