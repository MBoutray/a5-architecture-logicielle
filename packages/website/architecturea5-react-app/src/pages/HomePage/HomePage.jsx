import Mission from '../../components/Mission/Mission';
import mafia from "../../assets/mafia.jpg"
import killer from "../../assets/killer.jpg"
import tsunami from "../../assets/tsunami.jpg"

function Home() {
  return (
    <>
        <div>
            <h1 className="text-4xl font-bold text-center text-white my-10">Urgent missions</h1>
        </div>
        <div className='flex justify-around'>
          <Mission url={mafia} title="Stop the mafia" link="/mafia"/>
          <Mission url={killer} title="Kill the target" link="/kill"/>
          <Mission url={tsunami} title="Tsunami" link="/tsunami"/>
        </div> 
    </>

  );
}

export default Home;
