import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { useState } from "react";

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

export default function DateForm({ locationId, dates, setDates }) {
  const formName = "test";

  const [dateseries, setDateseries] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const id = Math.floor(Math.random() * 1000);

    setDates((draft) => {
      draft.push({
        id: id,
        location: locationId,
        data: data,
      });
    });
  }

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value === "series");
  };

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
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
          <Label htmlFor="datefrequency">Jahr</Label>
          <Input id="year" name="datefrequency" type="radio" value="year" />
        </>
      )}
      <Label htmlFor="date">Neuer Termin</Label>
      <Input id="date" name="date" type="date" required />
      <Label htmlFor="time">Zeit</Label>
      <Input id="time" name="time" type="time" required />
      <Label htmlFor="promptlist">Stichwort</Label>
      <select id="promptlist" name="promptlist" required>
        <option value="Gießen">Gießen</option>
        <option value="Düngen">Düngen</option>
        <option value="Sonstiges">Sonstiges</option>
      </select>
      <Label htmlFor="description">Description</Label>
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
