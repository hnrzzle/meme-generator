import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

const fonts = ['impact', 'arial', 'bowlby', 'roboto'];

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'Insert Headline Here',
      footer: 'Insert Footer Here',
      image: 'https://imgflip.com/s/meme/One-Does-Not-Simply.jpg',
      color: '#ffffff',
      fonts,
      selected: 'impact'
    };
  }

  handleHeaderChange({ target }) {
    this.setState({ header: target.value });

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

  handleFontChange({ target }) {
    this.setState({ selected: target.value });
  }

  render() {
    const { header, image, footer, color, fonts, selected } = this.state;

    return (
      <main>
        <h1>Meme Generator</h1>
        <fieldset>
          <div>
            <label>
              Header:
              <input
                value={header}
                onChange={event => this.handleHeaderChange(event)}
              />
            </label>
            <label>
              Footer:
              <input
                value={footer}
                onChange={event => this.handleHeaderChange(event)}
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
            <label>
              Meme Font:
              <select value={selected} onChange={event => this.handleFontChange(event)}>
                {fonts.map(font => <option key={font}>{font}</option>)}
              </select>
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
          <div>
            <button onClick={() => this.handleExport()}>
              Save This Meme
            </button>
          </div>
          <div
            className="image-container"
            ref={node => this.imageExport = node}
          >
            <div 
              className={ selected }
              style={{ color }}
            >
              <h1 className="meme-header">{header}</h1>
              {/* <h1 className="meme-footer">{footer}</h1> */}
            </div>
            <img src={image}/>
          </div>
        </section>
      </main>
    );
  }
}