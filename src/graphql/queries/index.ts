import { gql } from '@apollo/client';

export const CHECK_USER_PROFILE_EXISTS = gql`
  query CheckUserProfileExists($id: uuid = "") {
    profile_by_pk(id: $id) {
      id
    }
  }
`;

export const FETCH_USER_NAME_BY_PK = gql`
  query FetchUserNameByPk($id: uuid = "") {
    profile_by_pk(id: $id) {
      userName
    }
  }
`;
