import type { ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { CreateRoomComponent } from "~/features/CreateRoom";

export const action: ActionFunction = () => {
  return redirect("/room/25")
}

export default function() {
  return <CreateRoomComponent />
}