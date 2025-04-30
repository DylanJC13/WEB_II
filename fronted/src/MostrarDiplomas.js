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

export default function MostrarDiplomas() {
  const { loading, error, data } = useQuery(GET_DIPLOMAS);
  if (loading) return <p>Cargando…</p>;
  if (error) return <p>Error 😢</p>;
  return (
    <div>
      <h2><span role="img" aria-label="diploma">📜</span> Diplomas emitidos</h2>
      {data.diplomas.map(d => (
        <div key={d.id}>
          <p><strong>Estudiante:</strong> {d.estudiante}</p>
          <p><strong>URI:</strong> {d.metadataURI}</p>
        </div>
      ))}
    </div>
  );
}
