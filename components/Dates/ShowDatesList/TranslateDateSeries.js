export default function TranslateDateSeries({ form, frequency }) {
  return form === "single" ? (
    <p>Einzeltermin</p>
  ) : (
    <p>
      Terminserie:
      {frequency === "hour" && <>stündlich</>}
      {frequency === "day" && <>täglich</>}
      {frequency === "week" && <>wöchentlich</>}
      {frequency === "month" && <>monatlich</>}
      {frequency === "year" && <>jährlich</>}
    </p>
  );
}
