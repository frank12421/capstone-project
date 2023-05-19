import styled from "styled-components";

const StyeldTabel = styled.section`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 25% 25% 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 3px px;
  background-color: bisque;
  margin-bottom: 20px;
`;

export default function ShowDates({ dates, places }) {
  console.log("ShowDates-Dates", dates);
  console.log("ShowDates-Places", places);

  if (dates.length === 0) {
    return <h5>ShowDates-Function-no Date</h5>;
  }

  return (
    <>
      <h5>ShowDates-Function</h5>
      <StyeldTabel>
        <p key={"Wann"}>Wann</p>
        <p key={"Was"}>Was</p>
        <p key={"Wo"}>Wo</p>

        {dates.map((date) => (
          <>
            <p key={date.id}>{date.data.date}</p>
            <p>{date.data.promptlist}</p>
            {places.find((place) => place.id === date.location) && (
              <p>{places[date.location - 1].name}</p>
            )}
          </>
        ))}
      </StyeldTabel>
    </>
  );
}
