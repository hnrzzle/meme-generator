import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Insert Headline Here',
      image: null
    };
  }

  handleTitleChange({ target }) {
    this.setState({ title: target.value });

  }

  render() {
    const { title, image } = this.state;

    return (
      <main>
        <h1>Meme Generator</h1>
        <fieldset>
          <div>
            <label>
              Text:
              <input
                value={title}
                onChange={event => this.handleTitleChange(event)}
              />
            </label>
          </div>
        </fieldset>
  
      </main>
    );


  }
}