import styled from "styled-components";
import { StyledButton } from "../Styling/StyledButton.js";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid darkgreen;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  border: 2px solid darkgreen;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: 400;
`;

const Select = styled.select`
  border: 2px solid darkgreen;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: white;
`;

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

export default function DateForm({ locationId, setDates }) {
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
    <FormContainer aria-labelledby="NewDateForPlaces" onSubmit={handleSubmit}>
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
      <StyledButton type="submit" color="red">
        Speichern
      </StyledButton>
    </FormContainer>
  );
}
