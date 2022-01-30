import React, { lazy, Suspense, useState } from "react";
import { Container, Row, Column, Heading } from "../Components/styles/Grid";
import ProgressBar from "../Components/Progress";
const Header = React.lazy(() => import("../Components/Header"));
const CardLayout = lazy(() => import("../Components/ReUsable/Card"));
const SideNav = lazy(() => import("../Components/SideNav"));

export default function Dashboard() {
  const [state, setState] = useState('start')

  return (
    <>
      <Container>
        <Header />
        <Row>
          <Column size={2.5}>
            <Suspense
              fallback={<ProgressBar color={"#ff7979"} width={"100%"} />}
            >
              <SideNav />
            </Suspense>
          </Column>
          <Column size={9.5}>
            <Suspense
              fallback={<ProgressBar color={"#ff7979"} width={"100%"} />}
            >
              <CardLayout title="BISMILLAH" />
            </Suspense>
          </Column>
        </Row>
      </Container>
    </>
  );
}
