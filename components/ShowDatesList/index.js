import dayjs from "dayjs";

import { useState } from "react";
import {
  StyeldDatesList,
  StyledDatesDetailCard,
  StyledDatesDetailCardButton,
  StyledDatesListRow,
} from "./styled";

export default function ShowDatesList({ dates, places }) {
  const sortDates = dates
    .filter(
      (date) =>
        dayjs(date.data.date).format(`YYYY-MM-DD`) >=
        dayjs().format(`YYYY-MM-DD`)
    )
    .sort((a, b) => new Date(a.data.date) - new Date(b.data.date));

  const [clickindex, setClickIndex] = useState(null);

  function handelClickDate(index) {
    setClickIndex(index);
  }
  function DateListRow({ date, index }) {
    var weekOfYear = require("dayjs/plugin/weekOfYear");
    dayjs.extend(weekOfYear);

    const currentDate = dayjs().format("YYYY-MM-DD");
    const tomorrowDate = dayjs().add(1, "day").format("YYYY-MM-DD");
    const thisDate = date.data.date;

    const wert =
      thisDate === currentDate
        ? "Heute"
        : thisDate === tomorrowDate
        ? "Morgen"
        : dayjs(thisDate).week() === dayjs().week()
        ? "Diese Woche"
        : thisDate;

    return (
      <StyledDatesListRow $hover onClick={() => handelClickDate(index)}>
        <li>{wert}</li>
        <li>{date.data.promptlist}</li>
        <li>
          <FindPlace locationId={date.location} />
        </li>
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

  const noToday =
    sortDates[0].data.date !== dayjs().format("YYYY-MM-DD") ? (
      <StyledDatesListRow>
        <li>Heute nix</li>
        <li>Chillen</li>
        <li>Wo immer du magst</li>
      </StyledDatesListRow>
    ) : null;

  return (
    <>
      {clickindex === null ? (
        <StyeldDatesList>
          <StyledDatesListRow $head>
            <p key="wann">Wann</p>
            <p key="was">Was</p>
            <p key="wo">Wo</p>
          </StyledDatesListRow>
          {noToday}
          {dates.length !== 0 ? (
            sortDates.map((date, index) => (
              <DateListRow key={date.id} date={date} index={index} />
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
