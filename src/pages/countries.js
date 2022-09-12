import React, { useEffect, useState} from "react";
import { add, length, multiply, path, slice } from "ramda";
import Pagination from "../components/pagination";
import CountriesList from "../components/countriesList";
import COUNTRIES_QUERY from "../../API/gqlCalls/getCountries";
import Section from "../components/section";
import withLoadingData from "../withLoadingData";
import Modal from "../components/modal";
import PrintButton from "../components/printButton";

const countriesText =
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

const Countries = withLoadingData((props) => {
  const [countriesList, setCountriesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    setCountriesList(path(["data", "countries"], props));
  }, [props]);

  const currentDataCount = () => {
    const firstPageIndex = multiply(currentPage - 1, itemsPerPage);
    const lastPageIndex = add(firstPageIndex, itemsPerPage);
    return countriesList |> slice(firstPageIndex, lastPageIndex);
  };

  const currentData = currentDataCount();

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Section title="Countries list" text={countriesText}>
        <div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={length(countriesList)}
            paginate={handlePaginate}
            currentPage={currentPage}
            adjacentPages={3}
          />
          <PrintButton onClick={() => setIsOpen(true)} text="Print full countries list"/>
          <CountriesList list={currentData} />
        </div>
      </Section>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <CountriesList list={countriesList}/>
      </Modal>
    </div>
  );
}, COUNTRIES_QUERY);

export default Countries;
