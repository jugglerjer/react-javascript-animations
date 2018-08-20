import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import Modes from "./Modes";
import "./ModeRadioGroup.css";

const ModeRadioGroup = props => (
  <RadioGroup
    className="radios"
    name="mode"
    selectedValue={props.mode}
    onChange={props.onModeChange}
  >
    {Modes.map((mode, index) => (
      <label
        key={mode.value}
        className={props.mode === index ? "selected" : ""}
      >
        <Radio value={index} />
        {mode.displayName}
      </label>
    ))}
  </RadioGroup>
);

export default ModeRadioGroup;
