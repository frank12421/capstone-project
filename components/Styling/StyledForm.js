import styled from "styled-components";

export const FormContainer = styled.form`
  width: 95%;
  margin: 20px;
  padding: 20px 0px;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  border-radius: var(--globalborderradius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const sharedStyles = `
box-shadow: var(--globalBorderShadow);
border-style: none;
border-radius: 10px;
background-color: var(--globalSecondLightColor);
`;

export const Input = styled.input`
  padding: 0.5rem;
  ${sharedStyles};
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Select = styled.select`
  ${sharedStyles};
  padding: 0.5rem;
`;

export const Textarea = styled.textarea`
  ${sharedStyles};
`;

export const FlexContainerRadio = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px 20px 20px;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 15px;
  height: 15px;
  background-color: var(--globalSecondLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 50%;
  &:checked {
    background-color: var(--globalAppBackgroundColor);
  }
`;

export const StyledFormSeries = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  gap: 10px;
  padding-bottom: 10px;
`;

export const SubmitButton = styled.button`
  ${sharedStyles};
  margin-top: 10px;
  padding: 0.7rem;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalSecondLightColor);
  cursor: pointer;
  &:hover {
    background-color: var(--globalNavigationBackgroundColor);
    color: var(--globalSecondLight);
  }
`;
