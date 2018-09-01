import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const SelectOption = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`;

const Selections = ({ selections, onChange }) => {
  return (
    <Select onChange={e => onChange(e.target.value)}>
      {selections.map(selection => (
        <SelectOption key={selection} value={selection}>
          {selection}
        </SelectOption>
      ))}
    </Select>
  );
};

export default Selections;
