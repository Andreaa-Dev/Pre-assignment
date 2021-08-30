import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  border: black 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;

const Logo = styled.div`
  border: 1px solid #8cb5f4;
  border-radius: 50%;
  background-color: #8cb5f4;
  height: 4rem;
  width: 4rem;
  text-align: center;
  font-size: 3rem;
  padding: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
`;

const Text = styled.div`
  margin-top: 1rem;
`;

const Link = styled.a`
  margin: 1rem;
`;

type UserCardProps = {
  name: string;
  userName: string;
  website: string;
  id: number;
};

function UserCard({ name, userName, website, id }: UserCardProps) {
  return (
    <Card>
      <Logo>{name.slice(0, 1)}</Logo>
      <Title>{name}</Title>
      <Text>@{userName}</Text>
      <Link href="http://{website}">http://{website}</Link>
      <Button id={id} />
    </Card>
  );
}

export default UserCard;
