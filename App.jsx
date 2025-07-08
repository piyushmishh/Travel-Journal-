import Header from "./components/Header"
import Entry from "./components/Entry"
import MountFuji from './assets/mountfuji.webp'

import data from "./data"

export default function App(){
  const entryel=data.map((entry)=>{
    return(
      <Entry
         img={entry.img}
         title={entry.title}
         country={entry.country}
         googlemaplinks={entry.googlemaplinks}
         dates={entry.dates}
         text={entry.text}
      />
    )
  })
  
  
  return (
    <>
    <Header/>
    <main>
       {entryel}
    </main>
    </>
  )
}

/*
LIBRARIES->
COLLECTION OF REUSABLE CODE | REDUCE THE NEED TO WRITE REPETITIVE CODE FROM SCRATCH
YOU CONTROL HOW/WHEN ITS USED , NO BOUNDARIES */

/*
FRAMEWORK-> 
PREDETERMINED ARCHITECTURE:EXPECTS TO FOLLOW SPECIFIED PATTERN OF DEVELOPEMENT
WORK WITHIN BOUNDARIES SET BY FRAMEWORK
"RIGHT" AND "WRONG " WAY TO USE IT */

