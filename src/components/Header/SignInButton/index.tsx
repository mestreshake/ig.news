import { FaGithub } from "react-icons/fa";

import { Button, CloseIcon } from "./styles";
export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <Button type="button">
      <FaGithub color="#04D361" />
      Thiago Hartman
      <CloseIcon color="#737380" />
    </Button>
  ) : (
    <Button type="button">
      <FaGithub color="#EBA417" />
      Sign In with Github
    </Button>
  );
}
