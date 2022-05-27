import { json, redirect } from "@remix-run/node";
import { commitAuthSession, getAuthSession } from "~/services/AuthCookie";

type IHandleLoginUser = {
  request: Request;
}

type ICheckUserLoggedIn = {
  request: Request;
}

export async function handleLoginUser({ request }: IHandleLoginUser) {
  const session = await getAuthSession(request.headers.get("Cookie"));
  
  const formData = await request.formData();
  
  const name = formData.get("name");
  const password = formData.get("name");
  
  if(!name || !password) {
    session.flash("error", "Invalid username/password");
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitAuthSession(session),
      },
    });
  };
  
  const userData = JSON.stringify({ name, password });
  session.set("userId", userData);
  
  return redirect("/createroom", {
    headers: {
      "Set-Cookie": await commitAuthSession(session),
    }
  })
}

export async function checkUserLoggedIn({ request }: ICheckUserLoggedIn) {
  const session = await getAuthSession(
    request.headers.get("Cookie")
  );

  if (session.has("project-scrum-auth-user")) {
    return redirect("/createroom");
  }
  
  const data = { error: session.get("error") };

  return json(data, {
    headers: {
      "Set-Cookie": await commitAuthSession(session),
    },
  });
}