import Banner from './Banner';
import Fruits from './fruits';

function Home() {
  return <>
  <Banner />
  <div className="all-content p-10">
  <Fruits />  
  </div>
  
  </>;
}

export default Home;