/* tslint:disable */
import algoliasearch from "algoliasearch";
import styled from "styled-components";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import {
  InstantSearch,
  Configure,
  SearchBox,
  Hits,
} from "react-instantsearch-dom";
import "@algolia/autocomplete-theme-classic";
import { useEffect } from "react";

import {
  Highlight,
  connectRefinementList,
  RefinementList,
} from "react-instantsearch-dom";
type RefinementProp = {
  items: any;
  isFromSearch: any;
  refine: any;
  searchForItems: any;
  createURL: any;
};

const Hit = ({ hit }: any): JSX.Element => {
  console.log(hit);
  return (
    <div style={{ border: "1px solid white" }}>
      {" "}
      <p>{hit.name}</p>
    </div>
  );
};
console.log(Hits);

const SearchBar = (): JSX.Element => {
  const searchClient = algoliasearch(
    "UORHJCOG49",
    "74fb98e8049e4753ce230f010774b425"
  );
  // const searchClient = algoliasearch(appId, apiKey);
  const Container = styled.div`
    margin: 0 auto;
    max-width: 640px;
    width: 100%;
  `;

  return (
    <>
      <Container>
        <InstantSearch indexName="space-centers" searchClient={searchClient}>
          <Configure
            facets="*,planet_code"
            facetFilters={[["planet_code:EAR"]]}
            hitsPerPage={10}
          />
          <SearchBox />

          <Hits hitComponent={Hit} />
        </InstantSearch>
      </Container>
    </>
  );
};

export default SearchBar;
