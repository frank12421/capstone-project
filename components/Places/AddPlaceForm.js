import useSWRMutation from "swr/mutation";
import {
  FormContainer,
  Input,
  Label,
  Select,
  SubmitButton,
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

export default function AddPlaceForm() {
  const { trigger } = useSWRMutation(`/api/places/`, sendRequest);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    trigger(data);
  }

  return (
    <FormContainer
      aria-labelledby="NewPlace"
      onSubmit={handleSubmit}
      backgroundcolor="globalPlaceBackgroundColor"
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
      </Select>
      <Label htmlFor="rainprotection">Regenschutz</Label>
      <Select id="rainprotection" name="rainprotection" required>
        <option value="Voll">Voll</option>
        <option value="Teilweise">Teilweise</option>
        <option value="Ohne">Ohne</option>
      </Select>
      <SubmitButton type="submit" backgroundcolor="globalDateBackgroundColor">
        Jetzt Speichern
      </SubmitButton>
    </FormContainer>
  );
}
