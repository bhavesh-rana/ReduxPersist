import {gql} from '@apollo/client';

export const CONTINENT_QUERY = gql`
  mutation Mutation($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      name
      email
      id
    }
  }
`;

export const GET_USERSDATA = gql`
  query Query {
    users {
      data {
        id
        name
        username
        email
      }
    }
  }
`;

export const DELETE_DATA = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;

export const FILTER_DATA = gql`
  query Query($options: PageQueryOptions) {
    users(options: $options) {
      data {
        name
        id
      }
    }
  }
`;

export const GET_PHOTOS = gql`
  query Query {
    photos {
      data {
        url
        id
      }
    }
  }
`;
