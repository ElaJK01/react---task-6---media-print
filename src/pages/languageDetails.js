import React from "react";
import { path } from "ramda";
import Section from "../components/section";
import GET_LANG_INFO from "../../API/gqlCalls/getLanguageInfo";
import withLoadingData from "../withLoadingData";
import DetailsList from "../components/detailsList";

const languageText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus\n" +
  "        laoreet non curabitur gravida. Dignissim diam quis enim lobortis\n" +
  "        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
  "        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
  "        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
  "        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n";

const LanguageDetails = withLoadingData((props) => {
  const languageDetails = props |> path(["data", "language"]);

  const itemsList = [
    { id: 1, tag: <p>Language Name: {languageDetails.name}</p> },
    { id: 2, tag: <p>Code: {languageDetails.code}</p> },
    { id: 3, tag: <p>Native: {languageDetails.native}</p> },
  ];

  return (
    <Section title="Language Details" text={languageText}>
      <DetailsList list={itemsList} />
    </Section>
  );
}, GET_LANG_INFO);

export default LanguageDetails;
