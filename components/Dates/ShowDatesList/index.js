import { useAllDates } from "@/utils/helper";
import DateCardLong from "../DateCardLong";
import dayjs from "dayjs";

export default function ShowDatesList() {
  const { data: dates, error, isLoading } = useAllDates();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const sortDates = dates
    .filter(
      (newDate) =>
        dayjs(newDate.data.date).format(`YYYY-MM-DD`) >=
        dayjs().format(`YYYY-MM-DD`)
    )
    .sort((a, b) => new Date(a.data.date) - new Date(b.data.date));

  return (
    <>
      {sortDates.map((date) => {
        return <DateCardLong key={date._id} oneDate={date} />;
      })}
    </>
  );
}
