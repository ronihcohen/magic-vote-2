import gql from "graphql-tag";

export const CREATE_POLL = gql`
  mutation createPoll($name: String!) {
    createPoll(name: $name) {
      id
      name
    }
  }
`;

export const GET_POLLS = gql`
  {
    allPolls {
      id
      name
    }
  }
`;

export const DELETE_POLL = gql`
  mutation deletePoll($id: ID!) {
    deletePoll(id: $id) {
      id
    }
  }
`;
