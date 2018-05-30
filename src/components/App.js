import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Insert Headline Here',
      footer: 'Insert Footer Here',
      image: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg'
    };
  }

  handleTitleChange({ target }) {
    this.setState({ title: target.value });

  }

  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  render() {
    const { title, image, footer } = this.state;

    return (
      <main>
        <h1>Meme Generator</h1>
        <fieldset>
          <div>
            <label>
              Header:
              <input
                value={title}
                onChange={event => this.handleTitleChange(event)}
              />
            </label>
            <label>
              Footer:
              <input
                value={footer}
                onChange={event => this.handleTitleChange(event)}
              />
            </label>
          </div>
        </fieldset>
        <section>
          <div>
            <label>
              Link your image here:
              <input onChange={event => this.handleImageSrc(event)}/>
            </label>
          </div>

          <img src={image}/>
        </section>
      </main>
    );
  }
}