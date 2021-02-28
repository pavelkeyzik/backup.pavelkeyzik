import styled from '@emotion/styled';
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <RootInput {...props} />;
}

function TextArea(
  props: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) {
  return <RootTextArea {...props} />;
}

type FormControlProps = {
  label?: string;
  error?: string;
  children?: React.ReactNode;
};

function FormControl(props: FormControlProps) {
  return (
    <FormControlRoot>
      {props.label ? <FormControlLabel>{props.label}</FormControlLabel> : null}
      {props.children}
      {props.error ? <FormControlError>{props.error}</FormControlError> : null}
    </FormControlRoot>
  );
}

const RootInput = styled.input`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 10px 14px;
  background: ${(props) => props.theme.color.inputBackground};
  color: ${(props) => props.theme.color.inputForeground};
  border: 4px solid ${(props) => props.theme.color.inputBorder};
  outline: none;
  font-family: inherit;
  font-size: 1rem;

  :focus {
    border: 4px solid ${(props) => props.theme.color.inputBorderFocus};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

const RootTextArea = styled.textarea`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 10px 14px;
  background: ${(props) => props.theme.color.inputBackground};
  color: ${(props) => props.theme.color.inputForeground};
  border: 4px solid ${(props) => props.theme.color.inputBorder};
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  resize: none;

  :focus {
    border: 4px solid ${(props) => props.theme.color.inputBorderFocus};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

const FormControlRoot = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const FormControlLabel = styled.div`
  color: ${(props) => props.theme.color.inputLabel};
  margin-bottom: 8px;
`;

const FormControlError = styled.div`
  color: ${(props) => props.theme.color.errorMessage};
  margin-top: 8px;
  font-size: 1rem;
`;

export { FormControl, Input, TextArea };
