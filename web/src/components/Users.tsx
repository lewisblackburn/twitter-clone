import React from "react";
import { gql, useQuery } from "@apollo/client";

interface IUser {
   id: string;
   name: string;
}

const USERS_QUERY = gql`
   query USERS_QUERY {
      users {
         id
         name
      }
   }
`;

export const Users = () => {
   const { loading, error, data } = useQuery(USERS_QUERY);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>{error.message}</p>;
   return (
      <div>
         {data.users.map((user: IUser) => (
            <p>{user}</p>
         ))}
      </div>
   );
};
