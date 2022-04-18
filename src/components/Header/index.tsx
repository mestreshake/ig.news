import { Container, Content } from "./styles";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <a className="active">Home</a>
          <a>Posts</a>
        </nav>
      </Content>
    </Container>
  );
}
