import dayjs from "dayjs";
import { useState } from "react";
import {
  StyledDatesSection,
  StyledDatesDetailCard,
  StyledDatesList,
} from "./styled";
import { useAllDates } from "@/utils/helper";
import FindPlace from "@/components/Places/FindPlace";
import TranslateDateSeries from "./TranslateDateSeries";
import DateListRow from "./DateListRow";
import { CardContainer } from "@/components/Card/Card.Styling";
import { StyledIconX } from "@/components/Styling/StyledIcon";

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
        <CardContainer backgroundcolor="globalDateBackgroundColor">
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
                <li>im Garten</li>
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
        </CardContainer>
      ) : (
        <CardContainer backgroundcolor="globalDateBackgroundColor">
          <StyledDatesDetailCard>
            <StyledIconX
              color="globalNavigationIconColor"
              align="right"
              onClick={() => setListEntry(null)}
            />
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
        </CardContainer>
      )}
    </>
  );
}
