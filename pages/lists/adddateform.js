import { useRouter } from "next/router";
import Link from "next/link";
import Form from "@/components/addDateForm";

export default function showForm() {
  return (
    <>
      <h2> Form </h2>
      <Form />
    </>
  );
}
