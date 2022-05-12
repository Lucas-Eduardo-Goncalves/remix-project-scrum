import type { ActionFunction } from "@remix-run/node";
import { SignInComponent } from "~/features/SignIn";

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);
  return console.log(values);
}

export default function Index() {
  return <SignInComponent />
}
