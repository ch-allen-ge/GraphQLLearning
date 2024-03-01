import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, gql } from '@apollo/client';

const getAllGames = gql`
  query GetAllGames {
    games {
      id,
      title,
      platform
    }
  }
`;

function DisplayGames() {
  const { loading, error, data } = useQuery(getAllGames);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.games.map(({ id, title, platform }) => (
    <div key={id}>
      {title} {platform}
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>

      <DisplayGames />
    </div>
  );
}
