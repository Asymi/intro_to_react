import React from 'react'
import Button from './button.js'

class App extends React.Component {

  // state =
  //   {
  //     liked: "like"
  //   }
  //
  // likeButton = e => {
  //   e.preventDefault()
  //   if (this.state.liked == "like") {
  //   this.setState({liked: "liked"})
  // } else {
  //   this.setState({liked: "like"})
  // }
  // }

  render() {
    const artistName = 'Red Hot Chili Peppers'
    const topSongs = [
      {
      id:0,
      name: 'Under the Bridge',
    },
    {
      id:1,
      name:'Californication',
    },
    {
      id:2,
      name:'Can`t Stop',
    },
    {
      id:3,
      name:'Snow (Hey Oh)',
    },
    {
      id:4,
      name:'Dani California'
    }
  ]
    const artistInfo = 'One of the most successful acts in rock history, singer Anthony Kiedis, bassist Flea, drummer Chad Smith and guitarist John Frusciante, have sold more than 60 million albums, including five multi-platinum LPs, and won six Grammy Awards.'
    const topAlbums = [
      {
        id: 0,
        name: 'Californication',
        year: 1999
      },
      {
        id: 1,
        name: 'By The Way',
        year: 2002
      },
      {
        id: 2,
        name: 'Stadium Arcadium',
        year: 2006
      }
    ]

    return (
      // this.topSongs.map(st => <button id={st.id}>LIKE<this.setState({ [st.id]: e.target})
      <main className="main">

        <h1>{artistName}</h1>
        <p>{artistInfo}</p>
        <h2>Most Popular Songs</h2>
        <ol>
            {topSongs.map(item => {
              // console.log(this.state)
              // this.setState({ [document.getElementById("item.id")]: document.getElementById('item.id')})
              return <li key={item.id}>{item.name}<Button/></li>
            })}
        </ol>

        <h2>Most Popular Albums</h2>
        <ul>
            {topAlbums.map(item => {
              return <li key={item.id}>{item.name} - {item.year}</li>
            })}
        </ul>

      </main>

    )

  }
}

export default App
