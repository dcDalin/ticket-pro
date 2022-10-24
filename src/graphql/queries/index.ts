import { gql } from '@apollo/client';

export const CHECK_USER_PROFILE_EXISTS = gql`
  query CheckUserProfileExists($id: uuid = "") {
    profile_by_pk(id: $id) {
      id
    }
  }
`;

export const FETCH_USER_PROFILE_BY_PK = gql`
  query FetchUserNameByPk($id: uuid = "") {
    profile_by_pk(id: $id) {
      userName
    }
  }
`;

export const FETCH_USER_PROFILE_BY_USER_NAME = gql`
  query FetchUserProfileByUserName($_eq: String = "reload") {
    profile(where: { userName: { _eq: $_eq } }) {
      id
      userName
      user {
        avatarUrl
        createdAt
        displayName
        lastSeen
      }
    }
  }
`;
