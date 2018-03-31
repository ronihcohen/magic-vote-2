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
