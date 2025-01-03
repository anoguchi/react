import React from "react";

import GenerativeArt from "./GenerativeArt";

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);
  const [colorTheme, setColorTheme] = React.useState("basic");
  const [shape, setShape] = React.useState("circles");

  return (
    <>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />

      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label htmlFor="num-of-lines" className="control-heading">
                Number of Lines:
              </label>
              <input
                id="num-of-lines"
                value={numOfLines}
                type="range"
                min="1"
                max="15"
                onChange={(event) => {
                  setNumOfLines(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="control-heading" htmlFor="color-theme">
                Color Theme:
              </label>
              <select
                id="color-theme"
                value={colorTheme}
                onChange={(event) => {
                  setColorTheme(event.target.value);
                }}
              >
                <option value="basic">Basic</option>
                <option value="monochrome">Monochrome</option>
                <option value="froot-loops">Froot Loops</option>
                <option value="spooky">Spooky Night</option>
              </select>
            </div>
            <div className="col">
              <div className="control-heading">Shape:</div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input
                    name="shape"
                    id="shape-circle"
                    type="radio"
                    value="circles"
                    checked={shape === "circles"}
                    onChange={(event) => {
                      setShape(event.target.value);
                    }}
                  />
                  <label htmlFor="shape-circle">Circles</label>
                </div>
                <div className="radio-option">
                  <input
                    name="shape"
                    id="shape-polygon"
                    type="radio"
                    value="polygons"
                    checked={shape === "polygons"}
                    onChange={(event) => {
                      setShape(event.target.value);
                    }}
                  />
                  <label htmlFor="shape-polygon">Polygons</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
