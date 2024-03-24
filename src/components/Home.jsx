import { useSelector } from "react-redux";
function Home() {
  
  const data = useSelector(store => store.user); // Assuming 'name' is your reducer key  
  const handle = () => {

    console.log('froms tate', data);
  }
  return (
    <>
      <h1>Home Component</h1>
      <button onClick={() => handle()}>Click</button>
      
    </>
  );
}

export default Home;
