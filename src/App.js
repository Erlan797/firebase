import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { auth, db } from "./config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import './App.css'
function App() {
  const [moiveList,setMovieList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newRealeseDate, setNewRealeseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const moiveCollectionRef = collection(db,'movies');

    const getMovieList = async () => {
      try{
        const data = await getDocs(moiveCollectionRef);
        const filteredData = data.docs.map((doc) =>({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      }catch(err){
        console.error(err);
      }
      }; 
      const deleteMovie = async (id) => {
        const movieDoc = doc(db,'movies',id)
        await deleteDoc(movieDoc);
      }
        const newTitle = async (id) => {
        const movieDoc = doc(db,'movies',id)
        await updateDoc(movieDoc,{title:updatedTitle});
      }
        useEffect(() => {
      getMovieList();
  }, []);
  const onSubmitMovie = async () =>{
    try{await addDoc(moiveCollectionRef, 
      {title: newMovieTitle,
      realesedDate: newRealeseDate,
      recievedAnOscar: isNewMovieOscar,
      userId: auth?.currentUser.uid,
    });
      getMovieList();
      }catch(err){
        console.error(err);
      }
    }
  return (
    <>
    <div><Auth /></div>
    {/* <div id="regis">Registration</div>
    
    <div>
      <input placeholder="MovieTitle" 
      onChange={(e) => setNewMovieTitle(e.target.value)}/>
      <input placeholder="Released Date..." type="number"
      onChange={(e) => setNewRealeseDate(Number(e.target.value))}
      />
      <input type="checkbox" 
      checked={isNewMovieOscar} 
      onChange={(e) => setIsNewMovieOscar(e.target.checked)}/>
      <label>Recieved an Oscar</label>
      <button onClick={onSubmitMovie}> Submit Movie</button>
    </div>
    <div>
      {moiveList.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <p>Date: {movie.realesedDate}</p>
          <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          <input placeholder="New Title" onChange={(e) => setUpdatedTitle(e.target.value)}/>
          <button onClick={() => newTitle(movie.id)}>New Upload</button>
        </div>
      ))}
    </div> */}
    </>
  );
}

export default App;
