import { gql } from '@apollo/client';

export const ADD_USERNAME_TO_PROFILE = gql`
  mutation AddUserNameToProfile($id: uuid = "", $userName: String = "") {
    insert_profile_one(object: { id: $id, userName: $userName }) {
      id
    }
  }
`;
