import React from "react";
import { Random } from "react-animated-text";
import { Wave } from "react-animated-text";

export const Jumper = () => {
  return (
    <Random
      text="Shop on the Burbuy App Free on Play Store!"
      effect="jump"
      effectChange={2.0}
      effectDuration={0.3}
    />
  );
};

export const Waver = () => {
  return (
    <Wave
      text="Thank You For Doing Business With Us"
      effect="stretch"
      effectChange={2.0}
    />
  );
};
