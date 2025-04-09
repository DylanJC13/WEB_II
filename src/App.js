import { gql, useQuery } from '@apollo/client';

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
  if (error) return <p>Error 😢</p>;

  return (
    <div>
      <h2>📜 Diplomas emitidos</h2>
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
