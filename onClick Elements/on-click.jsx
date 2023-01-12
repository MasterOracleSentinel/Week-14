"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    // TODO: Your task is to add onClick listeners to each of the elements within the container-div <div>
    // This is the only place you need to edit for this activity.
    //// "copy of above": <span id="span-element">I am SPAN</span> 

    //
    // // "copy of above:" <span id="span-element-2" className="button">
        //   I am SPAN
        // </span>
    return (
      <div className="container-div">
        <div onClick={(e) => this.handleClick(e)} div id="div-element">I am DIV</div>

        <span onClick={(e) => this.handleClick(e)} span id="span-element">I am a SPAN!</span>
        
        <br></br>

        <button onClick={(e) => this.handleClick(e)} button id="button-element">I am Button</button>
        <br></br>

        <a onClick={(e) => this.handleClick(e)} a id="link-element" href="">
          I am LINK
        </a>

        <div onClick={(e) => this.handleClick(e)} div id="div-element-2" className="button">
          I am DIV
        </div>

        <span onClick={(e) => this.handleClick(e)} span id="span-element-2" className="button">
          I am SPAN
        </span>

        <br></br>

        <button onClick={(e) => this.handleClick(e)} button id="button-element-2" className="button">
          I am Button
        </button>
        <br></br>

        <a onClick={(e) => this.handleClick(e)} a id="link-element-2" className="button" href="">
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
