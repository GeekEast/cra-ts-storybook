import React from 'react';
import { Button } from './Button';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: "Button",
    decorators: [withKnobs]
  };

export const Text = () => (
  <Button>
    <div>hello</div>
  </Button>
);

export const X = () => (
    <Button>
        <div>world</div>
    </Button>
)

// Knobs for React props
export const withAButton = () => (
    <button disabled={boolean("Disabled", false)}>
      {text("Label", "Hello Storybook")}
    </button>
  );
  
// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
