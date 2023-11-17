<template>
  <div id="app" :class="{ correct: correctChoice }">
      <div>
        <div 
          class="quarter top-left" 
          @click="quarterClicked('topLeft'), playAudio(0)" 
          :class="{ active: topLeft }"
        >
      </div>

        <div 
          class="quarter top-right" 
          @click="quarterClicked('topRight'), playAudio(1)" 
          :class="{ active: topRight }"
        >
      </div>
      </div>

      <div>
        <div 
          class="quarter bottom-left" 
          @click="quarterClicked('bottomLeft'), playAudio(2)" 
          :class="{ active: bottomLeft }"
        >
      </div>

        <div 
          class="quarter bottom-right" 
          @click="quarterClicked('bottomRight'), playAudio(3)" 
          :class="{ active: bottomRight }"
        >
      </div>
      </div>
      <button @click="newGame">Старт</button>
      <h2> {{ score }} </h2>
      <button @click="changeDifficulty(0)" :class="{selected: selected[0]}">Легко</button>
      <button @click="changeDifficulty(1)" :class="{selected: selected[1]}">Cредне</button>
      <button @click="changeDifficulty(2)" :class="{selected: selected[2]}">Сложно</button>
  </div>
</template>

<script>
import sound1 from './assets/simonSound1.mp3'
import sound2 from './assets/simonSound2.mp3'
import sound3 from './assets/simonSound3.mp3'
import sound4 from './assets/simonSound4.mp3'

export default {
  name: 'SimonGame',
  data() {
    return {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    correctChoice: false,
    sequence: [],
    sequenceToGuess: [],
    elementsToAdd: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
    sounds: [sound1, sound2, sound3, sound4],
    difficulty: 900,
    selected: [true, false, false]
    }
  },
  methods: { 
    newGame() {
      this.sequence = [];
      setTimeout(() => {
        this.goToNextLevel();
      }, 1000)
    },

    addSequenceElement() {
      this.sequence.push(this.elementsToAdd[Math.floor(Math.random() * this.elementsToAdd.length)])
      this.sequenceToGuess = [...this.sequence]
    },

    changeDifficulty(value) {
      this.selected = [false, false, false]
      switch(value) {
        case 0: 
          this.difficulty = 900;
          break
        case 1: 
          this.difficulty = 600;
          break
        case 2: 
          this.difficulty = 200;
          break
      }
      this.selected[value] = true
      this.resetState()
    },

    playAudio(quarter) {
      let sound = new Audio(this.sounds[quarter]);
      sound.play()
    },
      
    resetState() {
      this.topLeft = false
      this.topRight = false
      this.bottomLeft = false
      this.bottomRight = false
    },

    goToNextLevel() {
      this.addSequenceElement()
      this.resetState()
      this.startSequence(this.sequenceToGuess[0])
    },

    quarterClicked(quarterClicked) {
      if (this.sequenceToGuess[0] === quarterClicked) {
        this.playAudio(quarterClicked)
        this[quarterClicked] = true
        this.correctChoice = true
        setTimeout(() => {
          this.resetState()
          this.correctChoice = false
        }, 400)
        
        setTimeout(() => {
          this.sequenceToGuess.shift()
          if (this.sequenceToGuess.length === 0) {
            this.goToNextLevel()
          }
        }, 1000)

      } else {
        alert(`Вы проиграли! ${this.score}`)
      }

    },

    startSequence(quarter) {
      this[quarter] = true
      this.playAudio(quarter)
      
      setTimeout(() => {
        this.resetState();
        this.sequenceToGuess.shift();

        if (this.sequenceToGuess.length !== 0) {
          setTimeout(() => {
            this.startSequence(this.sequenceToGuess[0]);
            // this.changeDifficulty(value)
          }, this.difficulty);
        } else {
          this.sequenceToGuess = [...this.sequence];
        }

      }, 300);
    },
  },
  computed: {
    score() {
      const value = this.sequence.length - 1
      return value < 0 ? `Счет : 0` : `Счет : ${value}`
    }
  }
}

</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 0;
}

#app {
  padding-top: 10vh;
  height: 100vh;
  text-align: center;
  background-color: #3e3e3e;
}

.correct {
  box-shadow: inset 0 0 0 5px rgb(126, 255, 126);
  transition: all .3s ease-out;
}

button {
  margin: 20px 10px;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  background-color: rgb(12, 128, 174);
  color: white;
  transition: all .2s ease;
  cursor: pointer;

    &:hover {
      box-shadow: inset 0 0 0 3px white;
    }
}

h2 {
  font-size: 14px;
  color: white;
}

.quarter {
    display: inline-block;
    width:200px;
    height:200px;
    border: 3px solid #3e3e3e;
    cursor: pointer;
    transition: all .3s ease;

      &:hover {
        box-shadow: inset 0 0 0 3px #3e3e3e;
      }
}

.top-left {
  border-top-left-radius: 100%;
   background: rgb(164, 255, 111);
}

.top-right {
  border-top-right-radius: 100%;
  background: rgb(255, 111, 111);
}
.bottom-left {
  border-bottom-left-radius: 100%;
  background: rgb(255, 245, 111);
}

.bottom-right {
  border-bottom-right-radius: 100%;
  background: rgb(142, 234, 255);
}

.active {
  filter: invert(1);
}

.selected {
  box-shadow: inset 0 0 0 3px white;
}

</style>
