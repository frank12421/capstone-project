import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { useImmer } from "use-immer";
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
  const [dateseries, setDateseries] = useState(false);

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

  const handelToggleDateseries = (event) => {
    setDateseries(event.target.value === "series");
  };

  return (
    <>
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="singledate">Einzelner Termin</Label>
        <Input
          id="singledate"
          name="dateform"
          type="radio"
          value="single"
          onChange={handelToggleDateseries}
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
        <Input
          id="date"
          name="date"
          type="date"
          //   defaultValue={defaultData?.location}
        />
        <Label htmlFor="time">Zeit</Label>
        <Input
          id="time"
          name="time"
          type="time"
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
