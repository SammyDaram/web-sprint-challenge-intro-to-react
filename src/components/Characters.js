import React, {useState} from "react";
import Character from "./Character";
// const dummyData = [
//     {
//       birth_year: "19BBY",
//       created: "2014-12-09T13:50:51.644000Z",
//       edited: "2014-12-20T21:17:56.891000Z",
//       eye_color: "blue",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/2/', 
//             'https://swapi.dev/api/films/3/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "male",
//       hair_color: "blond",
//       height: "172",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "77",
//       name: "Luke Skywalker",
//       skin_color: "fair",
//       species: [],
//       starships:['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
//       url: "https://swapi.dev/api/people/1/",
//       vehicles:['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/']
//     },
    
//     {
//       birth_year: "112BBY",
//       created: "2014-12-10T15:10:51.357000Z",
//       edited: "2014-12-20T21:17:50.309000Z",
//       eye_color: "yellow",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/2/', 
//             'https://swapi.dev/api/films/3/', 
//             'https://swapi.dev/api/films/4/', 
//             'https://swapi.dev/api/films/5/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "n/a",
//       hair_color: "n/a",
//       height: "167",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "75",
//       name: "C-3PO",
//       skin_color: "gold",
//       species: ['https://swapi.dev/api/species/2/'],
//       starships: [],
//       url: "https://swapi.dev/api/people/2/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "33BBY",
//       created: "2014-12-10T15:11:50.376000Z",
//       edited: "2014-12-20T21:17:50.311000Z",
//       eye_color: "red",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/2/', 
//             'https://swapi.dev/api/films/3/', 
//             'https://swapi.dev/api/films/4/', 
//             'https://swapi.dev/api/films/5/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "n/a",
//       hair_color: "n/a",
//       height: "96",
//       homeworld: "https://swapi.dev/api/planets/8/",
//       mass: "32",
//       name: "R2-D2",
//       skin_color: "white, blue",
//       species: ['https://swapi.dev/api/species/2/'],
//       starships: [],
//       url: "https://swapi.dev/api/people/3/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "41.9BBY",
//       created: "2014-12-10T15:18:20.704000Z",
//       edited: "2014-12-20T21:17:50.313000Z",
//       eye_color: "yellow",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/2/', 
//             'https://swapi.dev/api/films/3/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "male",
//       hair_color: "none",
//       height: "202",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "136",
//       name: "Darth Vader",
//       skin_color: "white",
//       species: [],
//       starships: ['https://swapi.dev/api/starships/13/'],
//       url: "https://swapi.dev/api/people/4/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "19BBY",
//       created: "2014-12-10T15:20:09.791000Z",
//       edited: "2014-12-20T21:17:50.315000Z",
//       eye_color: "brown",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/2/', 
//             'https://swapi.dev/api/films/3/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "female",
//       hair_color: "brown",
//       height: "150",
//       homeworld: "https://swapi.dev/api/planets/2/",
//       mass: "49",
//       name: "Leia Organa",
//       skin_color: "light",
//       species: [],
//       starships: [],
//       url: "https://swapi.dev/api/people/5/",
//       vehicles: ['https://swapi.dev/api/vehicles/30/']
//     },
  
//     {
//       birth_year: "52BBY",
//       created: "2014-12-10T15:52:14.024000Z",
//       edited: "2014-12-20T21:17:50.317000Z",
//       eye_color: "blue",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/5/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "male",
//       hair_color: "brown, grey",
//       height: "178",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "120",
//       name: "Owen Lars",
//       skin_color: "light",
//       species: [],
//       starships: [],
//       url: "https://swapi.dev/api/people/6/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "47BBY",
//       created: "2014-12-10T15:53:41.121000Z",
//       edited: "2014-12-20T21:17:50.319000Z",
//       eye_color: "blue",
//       films:['https://swapi.dev/api/films/1/', 
//             'https://swapi.dev/api/films/5/', 
//             'https://swapi.dev/api/films/6/'],
//       gender: "female",
//       hair_color: "brown",
//       height: "165",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "75",
//       name: "Beru Whitesun lars",
//       skin_color: "light",
//       species: [],
//       starships: [],
//       url: "https://swapi.dev/api/people/7/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "unknown",
//       created: "2014-12-10T15:57:50.959000Z",
//       edited: "2014-12-20T21:17:50.321000Z",
//       eye_color: "red",
//       films: ['https://swapi.dev/api/films/1/'],
//       gender: "n/a",
//       hair_color: "n/a",
//       height: "97",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "32",
//       name: "R5-D4",
//       skin_color: "white, red",
//       species: ['https://swapi.dev/api/species/2/'],
//       starships: [],
//       url: "https://swapi.dev/api/people/8/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "24BBY",
//       created: "2014-12-10T15:59:50.509000Z",
//       edited: "2014-12-20T21:17:50.323000Z",
//       eye_color: "brown",
//       films: ['https://swapi.dev/api/films/1/'],
//       gender: "male",
//       hair_color: "black",
//       height: "183",
//       homeworld: "https://swapi.dev/api/planets/1/",
//       mass: "84",
//       name: "Biggs Darklighter",
//       skin_color: "light",
//       species: [],
//       starships: ['https://swapi.dev/api/starships/12/'],
//       url: "https://swapi.dev/api/people/9/",
//       vehicles: []
//     },
  
//     {
//       birth_year: "57BBY",
//       created: "2014-12-10T16:16:29.192000Z",
//       edited: "2014-12-20T21:17:50.325000Z",
//       eye_color: "blue-gray",
//       films:['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/'],
//       gender: "male",
//       hair_color: "auburn, white",
//       height: "182",
//       homeworld: "https://swapi.dev/api/planets/20/",
//       mass: "77",
//       name: "Obi-Wan Kenobi",
//       skin_color: "fair",
//       species: [],
//       starships:['https://swapi.dev/api/starships/48/', 
//                 'https://swapi.dev/api/starships/59/', 
//                 'https://swapi.dev/api/starships/64/', 
//                 'https://swapi.dev/api/starships/65/', 
//                 'https://swapi.dev/api/starships/74/'],
//       url: "https://swapi.dev/api/people/10/",
//       vehicles: ['https://swapi.dev/api/vehicles/38/'],
//         }
//   ]


const Characters = (props) => {
    const [openData, setOpenData] = useState(false)
    return (
        <div>    
            <div className="Character-wrapper">
                {props.list.name}  
                <button onClick={() => setOpenData(!openData)}>+</button>     
            </div> 
            {openData && <Character list={props.list} /> }
        </div>
    
    )
}

export default Characters;