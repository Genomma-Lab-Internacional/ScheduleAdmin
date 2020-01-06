import React, { useState } from 'react';
// import './App.css';
import readExcel from "read-excel-file"
import axios from "axios"

export default function App() {
  const [ file ] = useState({})
  const [ fileEdited ] = useState({})

  const uploadFile = (e) => {
    e.persist()
		readExcel(e.target.files[0])
			.then( rows => {
				file["table"] = rows
      })
			.catch(e => console.log(e))
  }

  const workingData = () => {
    let skuagenomma = []
    for( let i=0; i<file.table.length; i++ ) {
      skuagenomma.push(file.table[i][0])
    }
    console.log(skuagenomma)
    fileEdited["table"] = skuagenomma
    // SetFile({"table":skuagenomma})
    axios.post("https://olc2yttb2b.execute-api.us-east-1.amazonaws.com/dev/miscelanea/constant-array",fileEdited)
    .then( e => console.log(e) )
    .catch( e => console.log(e) )
  }


  return (
    <div>
    <input onChange={uploadFile} type="file"/>
    <br/>
    <button onClick={workingData}>Trabaja los datos</button>
    {file.table ? <p>{file.table}</p>:<p>No data</p>}
    </div>
  );
}