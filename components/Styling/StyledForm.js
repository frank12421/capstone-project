import styled from "styled-components";

export const FormContainer = styled.form`
  width: 95%;
  margin: 20px;
  padding: 20px 0px;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  // background-color: var(--globalPlaceBackgroundColor);
  border-radius: var(--globalborderradius);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
