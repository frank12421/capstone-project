import FindPlace from "@/components/Places/FindPlace";
import dayjs from "dayjs";
import { StyledDatesList } from "./styled";

export default function DateListRow({ date, index, setListEntry }) {
  var weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);

  const currentDate = dayjs().format("YYYY-MM-DD");
  const tomorrowDate = dayjs().add(1, "day").format("YYYY-MM-DD");
  const thisDate = date.data.date;

  const relativeTime =
    thisDate === currentDate
      ? "Heute"
      : thisDate === tomorrowDate
      ? "Morgen"
      : dayjs(thisDate).week() === dayjs().week()
      ? "Diese Woche"
      : thisDate;

  return (
    <StyledDatesList $hover > 
      <li>{relativeTime}</li>
      <li>{date.data.promptlist}</li>
      <li>
        <FindPlace locationId={date.location} />
      </li>
    </StyledDatesList>
  );
}
