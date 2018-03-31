import React from "react";
import { Mutation } from "react-apollo";

import { GET_POLLS, CREATE_POLL } from "../queries";

const CreatePoll = () => {
  let input;

  return (
    <Mutation
      mutation={CREATE_POLL}
      update={(cache, { data: { createPoll } }) => {
        const { allPolls } = cache.readQuery({ query: GET_POLLS });
        cache.writeQuery({
          query: GET_POLLS,
          data: { allPolls: allPolls.concat([createPoll]) }
        });
      }}
    >
      {createPoll => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value) {
                return;
              }
              createPoll({
                variables: { name: input.value },
                optimisticResponse: {
                  __typename: "Mutation",
                  createPoll: {
                    id: Math.random(),
                    __typename: "Poll",
                    name: input.value
                  }
                }
              });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Create Poll</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default CreatePoll;
