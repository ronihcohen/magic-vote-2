import React from "react";
import { Query } from "react-apollo";

import { GET_POLLS } from "../queries";
import DeletePoll from "../DeletePoll/DeletePoll";

const PollsList = () => (
  <Query query={GET_POLLS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error.</p>;

      return data.allPolls.map(({ name, id }) => (
        <div key={id}>
          <p>{`${name}`}</p>
          <DeletePoll id={id} />
        </div>
      ));
    }}
  </Query>
);

export default PollsList;
