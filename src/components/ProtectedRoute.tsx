import { Navigate } from "react-router-dom";

type Props = {
  redirectPath?: string;
  children: React.ReactNode;
  check: boolean;
};

const ProtectedRoute = ({ children, check, redirectPath = "/" }: Props) => (
  <>
    {check ? children : <Navigate to={redirectPath} />}
  </>
);

export default ProtectedRoute;
