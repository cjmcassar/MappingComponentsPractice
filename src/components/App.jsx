import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. create entry component
//2. create props to replace the hardcoded data
//3. Map through the emoji array and render entry components
//3a. import emoji array
//3

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
