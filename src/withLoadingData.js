import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "./components/loading";
import Error from "./components/error";

const withLoadingData = (Component, query) => (props) => {
  const { match } = props;
  const { params } = match;
  const { data, loading, error } = useQuery(query, {
    variables: params,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;
  return <Component data={data} loading={loading} error={error} />;
};

export default withLoadingData;
