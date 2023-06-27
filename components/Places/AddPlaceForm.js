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

export default function AddPlaceForm() {
  const { trigger } = useSWRMutation(`/api/places/`, sendRequest);
  const [savedStatus, setSavedStatus] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    trigger({ method: "POST", data });
    setSavedStatus(!savedStatus);
    setTimeout(() => setSavedStatus(false), 2000);
  }

  return (
    <FormContainer
      aria-labelledby="NewPlace"
      onSubmit={handleSubmit}
      backgroundcolor="globalPlaceBackgroundColor"
      autoComplete="off"
    >
      <Label htmlFor="name">Neuer Standort</Label>
      <Input id="name" name="name" type="text" required />
      <Label htmlFor="capacity">Kapazität</Label>
      <Input id="capacity" name="capacity" type="number" required min={1} />
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
        <option value="Sonstiges">Sonstiges</option>
      </Select>
      <Label htmlFor="rainprotection">Regenschutz</Label>
      <Select id="rainprotection" name="rainprotection" required>
        <option value="Voll">Voll</option>
        <option value="Teilweise">Teilweise</option>
        <option value="Ohne">Ohne</option>
      </Select>
      {!savedStatus ? (
        <SubmitButton type="submit" backgroundcolor="globalDateBackgroundColor">
          Jetzt Speichern
        </SubmitButton>
      ) : (
        <SubmitButton
          type="submit"
          backgroundcolor="globalPlantBackgroundColor"
        >
          Gespeichert
        </SubmitButton>
      )}
    </FormContainer>
  );
}
