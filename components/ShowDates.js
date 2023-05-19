import styled from "styled-components";
import moment from "moment";

const StyeldTabel = styled.section`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 25% 25% 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3px px;
  background-color: bisque;
  margin-bottom: 20px;
`;

export default function ShowDates({ dates, places }) {
  console.log("ShowDates-Dates", { dates });
  // console.log("ShowDates-Places", places);

  const sortDates = [...dates].sort(
    (a, b) => new Date(a.data.date) - new Date(b.data.date)
  );
  console.log("SortList", sortDates);

  function DefineWhen({ plantdate }) {
    const today = moment().format(`YYYY-MM-DD`);
    const weekofYear = moment().week();
    // console.log("Diese Woche", weekofYear);
    // console.log("Woche Plandate", moment(plantdate).week());
    if (plantdate === today) {
      return <p>Heute</p>;
    } else if (moment(plantdate).week() === weekofYear) {
      return <p>Diese Woche</p>;
    } else {
      return <p>{plantdate}</p>;
    }
  }

  return (
    <>
      <StyeldTabel>
        <p key={"Wann"}>Wann</p>
        <p key={"Was"}>Was</p>
        <p key={"Wo"}>Wo</p>
        {dates.length !== 0 &&
          sortDates.map((date) => (
            <>
              <DefineWhen key={date.id} plantdate={date.data.date} />
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
