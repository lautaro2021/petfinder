import React from "react";
import styled from "styled-components";

function Select({
  id,
  type = "text",
  placeholder,
  label,
  onChange,
  name,
  value,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  value?: any;
}) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} name={name} value={value}>
        <option value="" disabled>
          {placeholder}
        </option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
      </select>
    </StyledInput>
  );
}

export default Select;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-size: 14px;

  label {
    font-weight: 500;
  }

  select {
    padding: 10px 15px;
    border-radius: 100px;
    border: 1px solid #e1e1e1;

    &:focus {
      outline: 0;
      border: 1px solid #c5c5c5;
    }
  }
`;
