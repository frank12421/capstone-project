import AddPlaceForm from "@/components/Places/AddPlaceForm";
import StyledNavigationLink, {
  StyledNavigationContainer,
} from "@/components/Styling/Navigation";
import { StyledMain } from "@/components/Styling/Main";
import { StyledHeader } from "@/components/Styling/Header";
import Image from "next/image";

export default function addPlace() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Neuen Standort anlegen</h1>
        <StyledNavigationContainer>
          <StyledNavigationLink
            navigationlink="/lists/placelist"
            color="transparent"
          >
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/arrow-left.svg"}
              priority={true}
            />
          </StyledNavigationLink>
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <AddPlaceForm />
      </StyledMain>
    </>
  );
}
