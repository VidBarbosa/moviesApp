import { RequestInfo, WhiteCard } from '@components/index';
import { useAuthStore } from '@stores/index';

export const Dashboard = () => {

  const userName = useAuthStore( state => state.user?.name || 'No user' );

  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <WhiteCard centered>
          <h2>Osos</h2>
        </WhiteCard>


        <WhiteCard centered>
          <h2>Persona</h2>
        </WhiteCard>


        <WhiteCard centered>
          <h2>Tareas</h2>
        </WhiteCard>


        <WhiteCard centered>
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>


        <WhiteCard centered>
          <h2>Auth</h2>
          <p>{ userName }</p>
        </WhiteCard>


        <WhiteCard centered className="col-span-3">
          <RequestInfo />
        </WhiteCard>

      </div>

    </>
  );
};