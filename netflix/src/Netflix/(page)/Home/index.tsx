import Popular from "../../components/Popular";
import Slider from "./../../components/Slider/index";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <div>
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </div>
    </>
  );
};

export default Home;
