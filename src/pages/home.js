import React from "react";
import { path } from "ramda";
import Section from "../components/section";
import CONTINENTS_QUERY from "../../API/gqlCalls/getContinents";
import ContinentsList from "../components/continentsList";
import withLoadingData from "../withLoadingData";

const homeText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus\n" +
  "        laoreet non curabitur gravida. Dignissim diam quis enim lobortis\n" +
  "        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
  "        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
  "        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
  "        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
  "        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
  "        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
  "        officia deserunt mollit anim id est laborum.";

const Home = withLoadingData(
  (props) => (
    <Section
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      text={homeText}
    >
      <ContinentsList list={path(["data", "continents"], props)} />
    </Section>
  ),
  CONTINENTS_QUERY
);

export default Home;
