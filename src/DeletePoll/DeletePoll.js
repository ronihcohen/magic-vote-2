import React from "react";
import { Mutation } from "react-apollo";

import { GET_POLLS, DELETE_POLL } from "../queries";

const DeletePoll = ({ id }) => {
  return (
    <Mutation
      mutation={DELETE_POLL}
      update={(cache, { data: { deletePoll } }) => {
        const { allPolls } = cache.readQuery({ query: GET_POLLS });
        cache.writeQuery({
          query: GET_POLLS,
          data: {
            allPolls: allPolls.filter(current => {
              return deletePoll.id != current.id;
            })
          }
        });
      }}
    >
      {DeletePoll => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              DeletePoll({
                variables: { id: id },
                optimisticResponse: {
                  __typename: "Mutation",
                  deletePoll: {
                    id: id,
                    __typename: "Poll"
                  }
                }
              });
            }}
          >
            <button type="submit">X</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default DeletePoll;
