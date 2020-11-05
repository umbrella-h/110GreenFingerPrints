'use strict';

//the like button is a no-JSX-practice

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You, Sochirasama, Ni and '+ Math.floor(Math.random() * (589 - 555) + 555) +' others liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

//the game is a practice with JSX.

//class Square extends React.Component {
function Square(props){
  /*constructor(props){
    super(props);
    this.state = {
      value: null,      
    };
  }no state, so use function is enough, rather than extending React.Component
  render() {
    return (
      <button
        className="square"
        style={{color: "#FDF4D9"}}
        onClick= {()=> this.props.onClick({value:'X'})}
      >        
        {this.props.value}
      </button>
    );
  }*/
  let xColor = "#FDF4D9";
  if (props.value=='O'){
    xColor = "#EF4D4E";
  }
  return (
    <button 
      className="square"
      style={{color: xColor}}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  //Board controls Square
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,           
    });
  }   
  
  renderSquare(i) {
    //return <Square  value={i} />;
    
    // use "()" so JS will not add ";" after "return"
    //***"state" is private, so we have to send a function from Board tp Square
    return( <Square
              value={this.state.squares[i]}
              onClick={()=> this.handleClick(i)}
             />
      );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
