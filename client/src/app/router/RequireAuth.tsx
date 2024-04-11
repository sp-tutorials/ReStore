import { useAppSelector } from "../store/configureStore.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const {user} = useAppSelector(state => state.account);
  const location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return <Outlet />
}