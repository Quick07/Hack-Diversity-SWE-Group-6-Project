import { StyledInput } from './index';
import { Label } from 'semantic-ui-react';
import React from 'react';
import { fleurimondColors } from '../utils/theme';

export default function TextInput(props) {
  return (
    <div>
      <Label color={fleurimondColors.roboticRed}>{props.name}</Label>
      <StyledInput
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
