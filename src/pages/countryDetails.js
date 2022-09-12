import React from "react";
import { indexOf, map, path, prop } from "ramda";
import Section from "../components/section";
import COUNTRY_QUERY from "../../API/gqlCalls/getCountry";
import withLoadingData from "../withLoadingData";
import DetailsList from "../components/detailsList";

const textDetails =
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

const CountryDetails = withLoadingData((props) => {
  const countryDetails = props |> path(["data", "country"]);

  const itemsList = [
    {
      id: 1,
      tag: (
        <h3>
          {countryDetails.name} {countryDetails.emoji}
        </h3>
      ),
    },
    { id: 2, tag: <p>Code: {countryDetails.code}</p> },
    { id: 3, tag: <p>Capital: {countryDetails.capital}</p> },
    { id: 4, tag: <p>Currency: {countryDetails.currency}</p> },
    { id: 5, tag: <p>Continent: {prop("name", countryDetails.continent)}</p> },
    { id: 6, tag: <p>Phone: {countryDetails.phone}</p> },
    {
      id: 7,
      tag: (
        <div style={{ fontSize: "10px" }}>
          Languages:{" "}
          <ul style={{ listStyle: "none" }}>
            {countryDetails.languages
              |> map((lang) => (
                <li key={prop("code", lang)}>{prop("name", lang)}</li>
              ))}
          </ul>
        </div>
      ),
    },
    {
      id: 8,
      tag: (
        <div style={{ fontSize: "10px" }}>
          States:{" "}
          <ul style={{ listStyle: "none" }}>
            {countryDetails.states
              |> map((state) => (
                <li key={indexOf(state, countryDetails.states)}>
                  {prop("name", state)}
                </li>
              ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Section title="Country Details" text={textDetails}>
      <DetailsList list={itemsList} />
    </Section>
  );
}, COUNTRY_QUERY);

export default CountryDetails;
