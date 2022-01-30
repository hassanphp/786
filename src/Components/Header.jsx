import {
  TopHeaderLeft,
  TopHeaderRight,
  Nav,
  Logo,
  Image,
} from "./styles/Header";
import { Row, Column, Container } from "./styles/Grid";
import { TypoGraphy } from "./styles/TypoGraphy";
import { Flex } from "./styles/Flex";

export default function Header() {
  return (
    <Container>
      <Row>
        <TopHeaderLeft>
          <Column size={2.5}>
            <TypoGraphy fontsize="15px" fontWeight="400" >
              Levels Health
            </TypoGraphy>
          </Column>
        </TopHeaderLeft>
        <TopHeaderRight>
          <Column size={9.5}>
            <TypoGraphy >
              Levels Health
            </TypoGraphy>
          </Column>
        </TopHeaderRight>
      </Row>
    </Container>
  );
}
