import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Header from "./components/Header";
import Shuffle from 'shuffle-array';

class App extends Component {
  // Setting this.state.characters to the characters json array
   state = {
    characters,
    guess:characters.id,
    TopScore: 0,
    CurrentScore: 0
  };

  handleClick = (clicked)=> {
    console.log (this.guess)
    let newState = { clicked:false  };
console.log(newState)
    // console.log("clicked: " )
    if (newState) {
      this.setState({ newState:true })
      // Object.assign({newState:true})
      this.shuffleImages()
      this.setState({ CurrentScore: this.state.CurrentScore + 1 });
      this.setState({ TopScore: this.state.CurrentScore + 1 });
    }else {
  alert("you lose")
  this.setState({ CurrentScore: 0 });
    }
  };



  shuffleImages= ()  => {
    this.setState({characters: Shuffle(characters)   });
    
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>
            {" "}
            Memory clicky game CurrentScore: {this.state.CurrentScore}
            
            Top Score{this.state.TopScore}
          </Title>
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
