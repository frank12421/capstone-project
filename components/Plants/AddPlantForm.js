import useSWRMutation from "swr/mutation";
import {
  FormContainer,
  Input,
  Label,
  Select,
  SubmitButton,
} from "../Styling/StyledForm.js";
import { useState } from "react";

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

export default function AddPlantForm() {
  const { trigger } = useSWRMutation(`/api/plants/`, sendRequest);
  const [savedStatus, setSavedStatus] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    trigger(data);
    setSavedStatus(!savedStatus);
    setTimeout(() => setSavedStatus(false), 2000);
  }

  return (
    <FormContainer
      aria-labelledby="NewPlant"
      onSubmit={handleSubmit}
      backgroundcolor="globalPlantBackgroundColor"
      autoComplete="off"
    >
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" name="name" />
      <Label htmlFor="type">Typ</Label>
      <Input id="type" type="text" name="type" />
      <Label htmlFor="plantheight">Pflanzenhöhe</Label>
      <Input
        id="plantheight"
        type="number"
        name="plantheight"
        min="1"
        max="500"
      />
      <Label htmlFor="cultivation_suitability">Anbaueignung</Label>
      <Select
        id="cultivation_suitability"
        name="cultivation_suitability"
        required
      >
        <option value="Gewächshaus">Gewächshaus</option>
        <option value="Dach">Dach</option>
        <option value="Freiland">Freiland</option>
        <option value="Sonstiges">Sonstiges</option>
      </Select>
      <Label htmlFor="fruit_shape">Fruchtform</Label>
      <Input id="fruit_shape" type="text" name="fruit_shape" />
      <Label htmlFor="fruit_color">Fruchtfarbe</Label>
      <Input id="fruit_color" type="text" name="fruit_color" />
      {!savedStatus ? (
        <SubmitButton type="submit" backgroundcolor="globalDateBackgroundColor">
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
