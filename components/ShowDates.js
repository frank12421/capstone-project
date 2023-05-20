import styled from "styled-components";
import moment from "moment";

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
`;

export default function ShowDates({ dates, places }) {
  const sortDates = [...dates].sort(
    (a, b) => new Date(a.data.date) - new Date(b.data.date)
  );

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

  function handelClickDate(event) {
    console.log("Click-event", event.target);

    return;
    <></>;
  }

  return (
    <>
      <StyeldTabel>
        <StyledRow key={"start"}>
          <p>Wann</p>
          <p>Was</p>
          <p>Wo</p>
        </StyledRow>
        {dates.length !== 0 &&
          sortDates.map((date) => (
            <>
              <StyledRow key={date.id} onClick={handelClickDate(date.id)}>
                <DefineWhen date={date.data.date} />
                <p>{date.data.promptlist}</p>
                {places.find((place) => place.id === date.location) && (
                  <p>{places[date.location - 1].name}</p>
                )}
              </StyledRow>
            </>
          ))}
      </StyeldTabel>
    </>
  );
}
