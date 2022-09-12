import React from "react";
import { map, path, prop } from "ramda";
import Section from "../components/section";
import CONTINENT_QUERY from "../../API/gqlCalls/getContinent";
import withLoadingData from "../withLoadingData";
import DetailsList from "../components/detailsList";

const text =
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

const ContinentDetails = withLoadingData((props) => {
  const continentDetails = props |> path(["data", "continent"]);
  const countries = continentDetails |> path(["countries"]);

  const itemsList = [
    {
      id: 1,
      tag: <h3>{continentDetails.name}</h3>,
    },
    {
      id: 2,
      tag: <p>Code: {continentDetails.code}</p>,
    },
    {
      id: 3,
      tag: (
        <div style={{ fontSize: "10px" }}>
          Countries:{" "}
          <ul style={{ listStyle: "none" }}>
            {countries
              |> map((country) => (
                <li key={prop("code", country)}>{prop("name", country)}</li>
              ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Section title="Continent Details" text={text}>
      <DetailsList list={itemsList} />
    </Section>
  );
}, CONTINENT_QUERY);

export default ContinentDetails;
