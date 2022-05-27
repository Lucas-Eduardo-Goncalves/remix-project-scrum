import { createCookieSessionStorage } from "@remix-run/node";

const { getSession: getAuthSession , commitSession: commitAuthSession } = 
  createCookieSessionStorage({
    cookie: {
      domain: "project-scrum-auth-user",
      expires: new Date(Date.now() + 60_000),
      maxAge: 60,
      secrets: ["s3cret1"],
      name: "projectscrum-authCookie",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: true,
    },
  });

export { getAuthSession, commitAuthSession };