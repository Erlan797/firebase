import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [moiveList,setMovieList] = useState([])
  const moiveCollectionRef = collection(db,'movies');
  useEffect(() => {
    const getMovieList = async () => {
      try{
        const data = await getDocs(moiveCollectionRef);
        console.log(data)
      }catch(err){
        console.error(err);
      }
      };
      getMovieList();
  }, [])
  
  return (
    <>
    <div><Auth /></div>
    </>
  );
}

export default App;
