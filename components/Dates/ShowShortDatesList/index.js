import dayjs from "dayjs";
import { StyledDatesSection, StyledDatesList } from "./styled";
import { useAllDates } from "@/utils/helper";
import DateListRow from "./DateListRow";
import LinkCard from "@/components/Card/LinkCard";

export default function ShowShortDatesList() {
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
    <LinkCard
      href={"lists/dateslist"}
      backgroundcolor="globalDateBackgroundColor"
    >
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
            <DateListRow key={date._id} date={date} index={index} />
          ))
        ) : (
          <StyledDatesList>Keine Termine</StyledDatesList>
        )}
      </StyledDatesSection>
    </LinkCard>
  );
}
