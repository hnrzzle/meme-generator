import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Insert Headline Here',
      footer: 'Insert Footer Here',
      image: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg',
      color: '#ffffff'
    };
  }

  handleTitleChange({ target }) {
    this.setState({ title: target.value });

  }

  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  handleColorChange({ target }) {
    this.setState({ color: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleExport() {
    dom2image.toBlob(this.imageExport).then(blob => {
      fileSaver.saveAs(blob, 'meme.png');
    });
  }

  render() {
    const { title, image, footer, color } = this.state;

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
            <label>
              Text Color:
              <input
                type="color"
                value={color}
                onChange={event => this.handleColorChange(event)}
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
          <div>
            <label>
              Upload Your Image:
              <input
                type="file"
                onChange={event => this.handleUpload(event)}
              />
            </label>
          </div>
          <div className="image-container"
            ref={node => this.imageExport = node}
          >
            <img src={image}/>
          </div>
          <div>
            <button onClick={() => this.handleExport()}>
              Save This Meme
            </button>
          </div>
        </section>
      </main>
    );
  }
}