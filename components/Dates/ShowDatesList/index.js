import dayjs from "dayjs";
import { useState } from "react";
import {
  StyledDatesSection,
  StyledDatesDetailCard,
  StyledDatesDetailCardButton,
  StyledDatesList,
} from "./styled";
import { useAllDates, useOnePlace } from "@/utils/helper";
import { StyledCard } from "@/components/Styling/Card";
import FindPlace from "@/components/Places/FindPlace";
import TranslateDateSeries from "./TranslateDateSeries";
import DateListRow from "./DateListRow";

export default function ShowDatesList() {
  const [listentry, setListEntry] = useState(null);
  const { data: newDates, error, isLoading } = useAllDates();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (newDates.length === 0) {
    return null;
  }

  const sortDates = newDates
    .filter(
      (newDate) =>
        dayjs(newDate.data.date).format(`YYYY-MM-DD`) >=
        dayjs().format(`YYYY-MM-DD`)
    )
    .sort((a, b) => new Date(a.data.date) - new Date(b.data.date));

  return (
    <>
      {listentry === null ? (
        <StyledCard backgroundcolor="globalDateBackgroundColor">
          <StyledDatesSection>
            <StyledDatesList $head>
              <li key="wann">Wann</li>
              <li key="was">Was</li>
              <li key="wo">Wo</li>
            </StyledDatesList>
            {sortDates[0].data.date !== dayjs().format("YYYY-MM-DD") ? (
              <StyledDatesList>
                <li>Heute nix</li>
                <li>Chillen</li>
                <li>Wo immer du magst</li>
              </StyledDatesList>
            ) : null}

            {sortDates.length !== 0 ? (
              sortDates.map((date, index) => (
                <DateListRow
                  key={date._id}
                  date={date}
                  index={index}
                  setListEntry={setListEntry}
                />
              ))
            ) : (
              <StyledDatesList>Keine Termine</StyledDatesList>
            )}
          </StyledDatesSection>
        </StyledCard>
      ) : (
        <StyledCard backgroundcolor="globalDateBackgroundColor">
          <StyledDatesDetailCard>
            <StyledDatesDetailCardButton
              type="button"
              aria-label="Zurück zur Listenansicht"
              onClick={() => setListEntry(null)}
            >
              X
            </StyledDatesDetailCardButton>
            Datum: {sortDates[listentry].data.date} | Zeit:
            {sortDates[listentry].data.time}
            <TranslateDateSeries
              form={sortDates[listentry].data.dateform}
              frequency={sortDates[listentry].data.datefrequency}
            />
            Stichwort:{sortDates[listentry].data.promptlist}
            <>
              {" "}
              | Standort:
              <FindPlace locationId={sortDates[listentry].location} />
            </>
            <p>Notiz:{sortDates[listentry].data.description}</p>
          </StyledDatesDetailCard>
        </StyledCard>
      )}
    </>
  );
}
