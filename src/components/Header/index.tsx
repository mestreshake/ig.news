import { Container, Content } from "./styles";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { SignInButton } from "./SignInButton";
import { ActiveLink } from "../../ActiveLink";

export function Header() {
  return (
    <Container>
      <Content>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
}
