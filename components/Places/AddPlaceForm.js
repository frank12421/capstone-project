import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../StyledButton.js";
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

export default function AddPlaceForm() {
  const { trigger, isMutating } = useSWRMutation(`/api/places/`, sendRequest);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    trigger(data);
  }

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value === "series");
  };

  return (
    <FormContainer aria-labelledby="NewPlace" onSubmit={handleSubmit}>
      <Label htmlFor="name">Neuer Standort</Label>
      <Input id="name" name="name" type="text" required />
      <Label htmlFor="capacity">Kapazität</Label>
      <Input id="capacity" name="capacity" type="number" required min={1} />
      <Label htmlFor="used">Belegt</Label>
      <Input id="used" name="used" type="used" hidden />
      <Label htmlFor="lightratio">Lichtverhältnis</Label>
      <Select id="lightratio" name="lightratio" required>
        <option value="Sonne">Sonne</option>
        <option value="Halbschatten">Halbschatten</option>
        <option value="Schatten">Schatten</option>
      </Select>
      <Label htmlFor="location">Standort</Label>
      <Select id="location" name="location" required>
        <option value="Gewächshaus">Gewächshaus</option>
        <option value="Dach">Dach</option>
        <option value="Freiland">Freiland</option>
      </Select>
      <Label htmlFor="rainprotection">Regenschutz</Label>
      <Select id="rainprotection" name="rainprotection" required>
        <option value="Voll">Voll</option>
        <option value="Teilweise">Teilweise</option>
        <option value="Ohne">Ohne</option>
      </Select>
      <StyledButton type="submit" color="red">
        Speichern
      </StyledButton>
    </FormContainer>
  );
}
