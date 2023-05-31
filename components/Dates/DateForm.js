import { useState } from "react";
import useSWRMutation from "swr/mutation";
import {
  FormContainer,
  Input,
  Label,
  Select,
  SubmitButton,
  Textarea,
} from "../Styling/StyledForm.js";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.error(response.status);
  }
}

export default function DateForm({ locationId }) {
  const { trigger } = useSWRMutation(`/api/dates/`, sendRequest);

  const [dateseries, setDateseries] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataEntries = Object.fromEntries(formData);

    const data = {
      location: locationId,
      data: dataEntries,
    };
    trigger(data);
  }

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value === "series");
  };

  return (
    <FormContainer
      aria-labelledby="NewDateForPlaces"
      onSubmit={handleSubmit}
      backgroundcolor="globalDateBackgroundColor"
    >
      <Label htmlFor="singledate">Einzelner Termin</Label>
      <Input
        id="singledate"
        name="dateform"
        type="radio"
        value="single"
        onChange={handelToggleDateseries}
        required
      />
      <Label htmlFor="dateseries">Termin Serie</Label>
      <Input
        id="dateseries"
        name="dateform"
        type="radio"
        value="series"
        onChange={handelToggleDateseries}
      />
      {dateseries && (
        <>
          <Label htmlFor="datefrequency">Stunde</Label>
          <Input id="hour" name="datefrequency" type="radio" value="hour" />
          <Label htmlFor="datefrequency">Tag</Label>
          <Input id="day" name="datefrequency" type="radio" value="day" />
          <Label htmlFor="datefrequency">Woche</Label>
          <Input id="week" name="datefrequency" type="radio" value="week" />
          <Label htmlFor="datefrequency">Monat</Label>
          <Input id="week" name="datefrequency" type="radio" value="month" />
          <Label htmlFor="datefrequency">Jahr</Label>
          <Input id="year" name="datefrequency" type="radio" value="year" />
        </>
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
      <SubmitButton type="submit" backgroundcolor="globalPlantBackgroundColor">
        Speichern
      </SubmitButton>
    </FormContainer>
  );
}
