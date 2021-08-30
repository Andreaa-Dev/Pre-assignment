import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.7rem;
  background-color: #8cb5f4;
  border: 1px solid #8cb5f4;
  width: 50%;
  padding: 1rem;
`;

export type DetailsInformation = {
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  id: number;
};

type Params = {
  userID: string;
};

function DetailsInformation() {
  const params = useParams<Params>();

  const url = `https://jsonplaceholder.typicode.com/users/${params.userID}`;

  const [detailsInformation, setDetailsInformation] =
    useState<DetailsInformation | null>(null);

  const fetchData = async () => {
    const data = await axios.get(url);
    const detailsData = data.data;
    setDetailsInformation(detailsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (detailsInformation) {
    return (
      <Card>
        <h1>Details information</h1>
        <Item>
          <p>Name: {detailsInformation.name}</p>
          <p>Username:{detailsInformation.username}</p>
          <p>Email:{detailsInformation.email}</p>
          <p>Phone:{detailsInformation.phone}</p>
          <p>Company:{detailsInformation.company.name}</p>
          <p>Website: {detailsInformation.website}</p>
          <p>
            Address:
            <ul>
              <li> Street: {detailsInformation.address.street}</li>
              <li> Suite: {detailsInformation.address.suite}</li>
              <li> City: {detailsInformation.address.city}</li>
              <li> Zipcode: {detailsInformation.address.zipcode}</li>
            </ul>
          </p>
        </Item>
      </Card>
    );
  }
  return <></>;
}

export default DetailsInformation;
