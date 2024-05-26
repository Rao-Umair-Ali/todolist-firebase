







import React,{ useState,useEffect } from 'react';
import './App.css';
import { addDoc, collection, doc, getDocs, updateDoc,deleteDoc } from 'firebase/firestore';
import { db } from './firebase-config';
function App(){
 const [newName,setNewName]=useState("");
 const [newAge,setNewAge]=useState(0);
 const [users,setuser]=useState([]);
 const userCollectionData=collection(db,"users");

const createUser=async()=>{
await addDoc(userCollectionData,{name:newName,age:Number(newAge)});

}
 
const updatefield=async(id,age)=>{
  const userDoc = doc(db,"users",id);
  const newfield={age:age+1};
  await updateDoc(userDoc,newfield);

}


const deletefield=async(id)=>{
  const userDoc = doc(db,"users",id);
  await deleteDoc(userDoc);


}

 useEffect(()=>{
  const getUsers=async()=>{
   const data=await getDocs(userCollectionData);
   setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
getUsers()


 },[])
 
 
 
  return (
    <div className="App" >
      <input placeholder='Name. ....' onChange={(event)=>{setNewName(event.target.value);}}/>
      <input type='number' placeholder='Age. ....' onChange={(event)=>{setNewAge(event.target.value);}}/>
      
      <button onClick={createUser} > create user</button>
      
      {users.map((user)=>{
return <div>
<h1>Name:{user.name}</h1>
<p>age:{user.age}</p>
<button onClick={()=>{updatefield(user.id,user.age)}}> update</button>
<button onClick={()=>{deletefield(user.id)}}> delete</button>




</div>

      })}
    </div>
  );
}

export default App;



