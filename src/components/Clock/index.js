import {
  hourNeedle,
  innerRingStyles,
  minNeedle,
  ringStyles,
  secondsNeedle,
} from "./styles";

const Ring = () => {
  let minutes = 0,
    hours = 0,
    seconds = 0;
  return (
    <div style={ringStyles}>
      <div style={innerRingStyles}>
        <div style={secondsNeedle}></div>
        <div style={minNeedle}></div>
        <div style={hourNeedle}></div>
      </div>
    </div>
  );
};

export const Clock = () => {
  return <Ring />;
};
