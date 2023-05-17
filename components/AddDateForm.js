import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { useImmer } from "use-immer";
import { useCallback } from "react";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function Form({}) {
  const formName = "test";
  const [dates, setDates] = useImmer([]);

  console.log("dates:", dates);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const id = Math.floor(Math.random() * 1000);
    console.log("id:", id);
    console.log(data);

    setDates((draft) => {
      draft.push({
        id: id,
        data: data,
      });
    });
  }

  return (
    <>
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="date">Neuer Termin</Label>
        <Input
          id="date"
          name="date"
          type="date"
          //   defaultValue={defaultData?.location}
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          //   defaultValue={defaultData?.description}
        ></Textarea>
        <StyledButton type="submit">
          Submit
          {/* {defaultData ? "Update place" : "Add place"} */}
        </StyledButton>
      </FormContainer>
      <p>Anzahl Termine:{dates.length} </p>
    </>
  );
}

{
  /* <Label htmlFor="singledate">Termin</Label>
        <Input
          id="singledate"
          name="choosedate"
          type="radio"
          defaultValue={defaultData?.singledate}
        />
        <Label htmlFor="dateseries">Termin Serie</Label>
        <Input
          id="dateseries"
          name="choosedate"
          type="radio"
          defaultValue={defaultData?.dateseries}
        />

        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
        />
        <Label htmlFor="image-url">Image Url</Label>
        <Input
          id="image-url"
          name="image"
          type="text"
          defaultValue={defaultData?.image}
        />
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          defaultValue={defaultData?.location}
        />
        <Label htmlFor="map-url">Map Url</Label>
        <Input
          id="map-url"
          name="mapURL"
          type="text"
          defaultValue={defaultData?.mapURL}
        /> */
}
