import React, { useEffect, useState } from "react";
import { add, length, multiply, path, slice } from "ramda";
import Pagination from "../components/pagination";
import LanguagesList from "../components/languagesList";
import LANGUAGES_QUERY from "../../API/gqlCalls/getLanguages";
import Section from "../components/section";
import withLoadingData from "../withLoadingData";

const languagesText =
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

const Languages = withLoadingData((props) => {
  const [languagesList, setLanguagesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    setLanguagesList(path(["data", "languages"], props));
  }, [props]);

  const currentDataCount = () => {
    const firstPageIndex = multiply(currentPage - 1, itemsPerPage);
    const lastPageIndex = add(firstPageIndex, itemsPerPage);
    return languagesList |> slice(firstPageIndex, lastPageIndex);
  };

  const currentData = currentDataCount();

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Section title="Languages list" text={languagesText}>
        <div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={length(languagesList)}
            paginate={handlePaginate}
            currentPage={currentPage}
            adjacentPages={3}
          />
          <LanguagesList list={currentData} />
        </div>
      </Section>
    </div>
  );
}, LANGUAGES_QUERY);

export default Languages;
