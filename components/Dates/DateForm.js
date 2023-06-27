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
import { sendRequest } from "@/utils/helper.js";

export default function DateForm({ locationId }) {
  const { trigger } = useSWRMutation(`/api/dates/`, sendRequest);
  const [savedStatus, setSavedStatus] = useState(false);
  const [dateseries, setDateseries] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataEntries = Object.fromEntries(formData);

    const data = {
      location: locationId,
      data: dataEntries,
    };
    trigger({ method: "POST", data });
    setSavedStatus(!savedStatus);
    setTimeout(() => setSavedStatus(false), 2000);
  }

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value === "series");
  };

  return (
    <FormContainer
      aria-labelledby="NewDateForPlaces"
      onSubmit={handleSubmit}
      backgroundcolor="globalDateBackgroundColor"
      autoComplete="off"
    >
      <StyledFormSeries>
        <Label htmlFor="singledate">Einzelner Termin</Label>
        <RadioButton
          id="singledate"
          name="dateform"
          type="radio"
          value="single"
          onChange={handelToggleDateseries}
          required
        />
        <Label htmlFor="dateseries">Termin Serie</Label>
        <RadioButton
          id="dateseries"
          name="dateform"
          type="radio"
          value="series"
          onChange={handelToggleDateseries}
        />
      </StyledFormSeries>
      {dateseries && (
        <FlexContainerRadio>
          <Label htmlFor="datefrequency">Stunde</Label>
          <RadioButton
            id="hour"
            name="datefrequency"
            type="radio"
            value="hour"
          />
          <Label htmlFor="datefrequency">Tag</Label>
          <RadioButton id="day" name="datefrequency" type="radio" value="day" />
          <Label htmlFor="datefrequency">Woche</Label>
          <RadioButton
            id="week"
            name="datefrequency"
            type="radio"
            value="week"
          />
          <Label htmlFor="datefrequency">Monat</Label>
          <RadioButton
            id="week"
            name="datefrequency"
            type="radio"
            value="month"
          />
          <Label htmlFor="datefrequency">Jahr</Label>
          <RadioButton
            id="year"
            name="datefrequency"
            type="radio"
            value="year"
          />
        </FlexContainerRadio>
      )}
      <Label htmlFor="date">Neuer Termin</Label>
      <Input id="date" name="date" type="date" required />
      <Label htmlFor="time">Zeit</Label>
      <Input
        id="time"
        name="time"
        type="time"
        defaultValue="09:00:00"
        required
      />
      <Label htmlFor="promptlist">Stichwort</Label>
      <Select id="promptlist" name="promptlist" required>
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
