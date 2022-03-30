import List from "../../components/List";
import Maps from "../../components/Map";
import { Aside, GridLayout, Main } from "./style";

const Landing = (): JSX.Element => {
  return (
    <GridLayout>
      <Aside>
        <List />
      </Aside>
      <Main>
        <Maps />
      </Main>
    </GridLayout>
  );
};

export default Landing;
