import gql from 'graphql-tag';

const PICKUP_MESSAGES = gql`
  query {
    pickupMessages {
      _id
      destinatary_user_email
      description
      user_name
      user_email
    }
  }
`;

export default PICKUP_MESSAGES;