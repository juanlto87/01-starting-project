import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
  const [SelectedTopic, setSelectedTopic] = useState();

  function handleSelect(SelectedButton) {
    setSelectedTopic(SelectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          onClick={() => {
            handleSelect("components");
          }}
          isSelected={SelectedTopic === "components" ? true : false}
        >
          Components
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("jsx");
          }}
          isSelected={SelectedTopic === "jsx" ? true : false}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("props");
          }}
          isSelected={SelectedTopic === "props" ? true : false}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("state");
          }}
          isSelected={SelectedTopic === "state" ? true : false}
        >
          State
        </TabButton>
      </menu>
      {!SelectedTopic && <p>Click on a Button</p>}
      {SelectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[SelectedTopic].title}</h3>
          <p>{EXAMPLES[SelectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[SelectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
