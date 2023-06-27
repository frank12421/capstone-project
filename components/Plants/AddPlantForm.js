import useSWRMutation from "swr/mutation";
import {
  FormContainer,
  Input,
  Label,
  Select,
  SubmitButton,
} from "../Styling/StyledForm.js";
import { useState } from "react";
import { sendRequest } from "@/utils/helper.js";

export default function AddPlantForm({ url, plantData }) {
  const [savedStatus, setSavedStatus] = useState(false);

  const { trigger } = useSWRMutation(url, sendRequest);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = Object.fromEntries(formData);

    plantData
      ? trigger({ method: "PATCH", newData })
      : trigger({ method: "POST", newData });

    setSavedStatus(!savedStatus);
    setTimeout(() => setSavedStatus(false), 2000);
  }

  return (
    <FormContainer
      aria-labelledby="NewPlant"
      onSubmit={handleSubmit}
      backgroundcolor="globalPlantBackgroundColor"
    >
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        defaultValue={plantData && plantData.name}
      />
      <Label htmlFor="type">Typ</Label>
      <Input
        id="type"
        type="text"
        name="type"
        defaultValue={plantData && plantData.type}
      />
      <Label htmlFor="plantheight">Pflanzenhöhe</Label>
      <Input
        id="plantheight"
        type="number"
        name="plantheight"
        min="1"
        max="500"
        defaultValue={plantData && plantData.plantheight}
      />
      <Label htmlFor="cultivation_suitability">Anbaueignung</Label>
      <Select
        id="cultivation_suitability"
        name="cultivation_suitability"
        defaultValue={plantData && plantData.cultivation_suitability}
        required
      >
        <option value="Gewächshaus">Gewächshaus</option>
        <option value="Dach">Dach</option>
        <option value="Freiland">Freiland</option>
        <option value="Sonstiges">Sonstiges</option>
      </Select>
      <Label htmlFor="fruit_shape">Fruchtform</Label>
      <Input
        id="fruit_shape"
        type="text"
        name="fruit_shape"
        defaultValue={plantData && plantData.fruit_shape}
      />
      <Label htmlFor="fruit_color">Fruchtfarbe</Label>
      <Input
        id="fruit_color"
        type="text"
        name="fruit_color"
        defaultValue={plantData && plantData.fruit_color}
      />
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
