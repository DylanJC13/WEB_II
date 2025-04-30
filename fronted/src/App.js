import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_DIPLOMAS = gql`
  query GetDiplomas {
    diplomas(first: 10) {
      id
      estudiante
      metadataURI
    }
  }
`;

function MostrarDiplomas() {
  const { loading, error, data } = useQuery(GET_DIPLOMAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error <span role="img" aria-label="sad face">😢</span></p>;

  return (
    <div>
      <h2><span role="img" aria-label="diploma">📜</span> Diplomas emitidos</h2>
      {data.diplomas.map((diploma) => (
        <div key={diploma.id}>
          <p><strong>Estudiante:</strong> {diploma.estudiante}</p>
          <p><strong>Metadata URI:</strong> {diploma.metadataURI}</p>
        </div>
      ))}
    </div>
  );
}

export default MostrarDiplomas;
