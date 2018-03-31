import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_POLL = gql`
  mutation createPoll($name: String!) {
    createPoll(name: $name) {
      name
    }
  }
`;

const GET_POLLS = gql`
  {
    allPolls {
      name
    }
  }
`;

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
              createPoll({ variables: { name: input.value } });
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
