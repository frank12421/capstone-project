import { useState } from "react";
import useSWRMutation from "swr/mutation";
import {
  FlexContainerRadio,
  FormContainer,
  Input,
  Label,
  RadioButton,
  Select,
  StyledFormSeries,
  SubmitButton,
  Textarea,
} from "../Styling/StyledForm.js";
import { sendRequest, useAllPlaces } from "@/utils/helper.js";
import FindPlace from "../Places/FindPlace.js";

export default function DateForm({ url, dateData }) {
  const { trigger } = useSWRMutation(url, sendRequest);
  const [savedStatus, setSavedStatus] = useState(false);
  const [dateseries, setDateseries] = useState(dateData.data.dateform);
  const { data: allPlaces, error, isLoading } = useAllPlaces();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataEntries = Object.fromEntries(formData);
    const data = {
      location: dataEntries.location,
      data: dataEntries,
    };

    dateData
      ? trigger({ method: "PATCH", data })
      : trigger({ method: "POST", data });

    setSavedStatus(!savedStatus);
    setTimeout(() => setSavedStatus(false), 2000);
  }

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value);
  };

  return (
    <FormContainer
      aria-labelledby="NewDateForPlaces"
      onSubmit={handleSubmit}
      backgroundcolor="globalDateBackgroundColor"
    >
      {/* <FindPlace locationId={dateData.location} /> */}
      <Label htmlFor="location">Standort</Label>
      {allPlaces && allPlaces.length > 0 && (
        <Select id="location" name="location" defaultValue={dateData.location}>
          {allPlaces.map((place) => {
            return (
              <option key={place._id} value={place._id}>
                {place.name}
              </option>
            );
          })}
        </Select>
      )}

      <StyledFormSeries>
        <Label htmlFor="singledate">Einzelner Termin</Label>
        <RadioButton
          id="singledate"
          name="dateform"
          type="radio"
          value="single"
          checked={dateseries === "single"}
          onChange={handelToggleDateseries}
          required
        />
        <Label htmlFor="dateseries">Termin Serie</Label>
        <RadioButton
          id="dateseries"
          name="dateform"
          type="radio"
          value="series"
          checked={dateseries === "series"}
          onChange={handelToggleDateseries}
        />
      </StyledFormSeries>
      {dateseries === "series" && (
        <FlexContainerRadio>
          <Label htmlFor="datefrequency">Stunde</Label>
          <RadioButton
            id="hour"
            name="datefrequency"
            type="radio"
            value="hour"
            defaultChecked={dateData.data.datefrequency === "hour"}
          />
          <Label htmlFor="datefrequency">Tag</Label>
          <RadioButton
            id="day"
            name="datefrequency"
            type="radio"
            value="day"
            defaultChecked={dateData.data.datefrequency === "day"}
          />
          <Label htmlFor="datefrequency">Woche</Label>
          <RadioButton
            id="week"
            name="datefrequency"
            type="radio"
            value="week"
            defaultChecked={dateData.data.datefrequency === "week"}
          />
          <Label htmlFor="datefrequency">Monat</Label>
          <RadioButton
            id="week"
            name="datefrequency"
            type="radio"
            value="month"
            defaultChecked={dateData.data.datefrequency === "month"}
          />
          <Label htmlFor="datefrequency">Jahr</Label>
          <RadioButton
            id="year"
            name="datefrequency"
            type="radio"
            value="year"
            defaultChecked={dateData.data.datefrequency === "year"}
          />
        </FlexContainerRadio>
      )}
      <Label htmlFor="date">Neuer Termin</Label>
      <Input
        id="date"
        name="date"
        type="date"
        defaultValue={dateData.data.date}
        required
      />
      <Label htmlFor="time">Zeit</Label>
      <Input
        id="time"
        name="time"
        type="time"
        defaultValue={dateData ? dateData.data.time : "09:00:00"}
        required
      />
      <Label htmlFor="promptlist">Stichwort</Label>
      <Select
        id="promptlist"
        name="promptlist"
        defaultValue={dateData.data.promptlist}
        required
      >
        <option value="Gießen">Gießen</option>
        <option value="Düngen">Düngen</option>
        <option value="Sonstiges">Sonstiges</option>
      </Select>
      <Label htmlFor="description">Notiz</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        maxLength={100}
        defaultValue={dateData.data.description}
      ></Textarea>
      {!savedStatus ? (
        <SubmitButton
          type="submit"
          backgroundcolor="globalPlantBackgroundColor"
        >
          Jetzt Speichern
        </SubmitButton>
      ) : (
        <SubmitButton
          type="submit"
          backgroundcolor="globalPlaceBackgroundColor"
        >
          Gespeichert
        </SubmitButton>
      )}
    </FormContainer>
  );
}
