import React from "react";
import UserCard from "./UserCard";
import { UserInformation } from "./App";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Title = styled.h1`
  text-align: center;
  margin: 2rem;
`;

type HomePageProps = {
  userInformation: UserInformation[];
};

function HomePage({ userInformation }: HomePageProps) {
  return (
    <div>
      <Title>User Information</Title>
      <Card>
        {userInformation.map((item) => {
          return (
            <UserCard
              name={item.name}
              userName={item.username}
              website={item.website}
              id={item.id}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default HomePage;
