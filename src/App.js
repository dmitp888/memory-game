import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Header from "./components/Header";
import Scores from "./components/Scores";

import Shuffle from 'shuffle-array';

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    TopScore: 0,
    CurrentScore: 0
  };

  handleClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.characters.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly ?
      this.shuffleImages(newData)
      : this.lostGame()
  };
  lostGame = () => {
    this.setState({ CurrentScore: 0 });
  }

  shuffleImages = (newData) => {
    this.setState({ characters: Shuffle(newData) });
    this.setState({ CurrentScore: this.state.CurrentScore + 1 });
    this.setState({ TopScore: this.state.CurrentScore + 1 });
  }

  render() {
    return (
        <Wrapper>
          <Header>
            <Title>
              Game of Thrones Memory Game
             </Title>
            <Scores>
              Current Score: {this.state.CurrentScore}
              {<p></p>}
              Top Score: {this.state.TopScore}
            </Scores>
          </Header>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              clicked={character.clicked}
              handleClick={this.handleClick}
              shuffleImages={this.shuffleImages}
            />
          ))}
        </Wrapper>
    );
  }
}

export default App;
