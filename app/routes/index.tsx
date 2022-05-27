import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { SignInComponent } from "~/features/SignIn";
import { handleLoginUser, checkUserLoggedIn } from "~/features/SignIn/api";

export const loader: LoaderFunction = async ({ request }) => {
  return await checkUserLoggedIn({ request });
}

export const action: ActionFunction = async ({ request }) => {
  return await handleLoginUser({ request });
};

export default function Index() {
  return <SignInComponent />
}
