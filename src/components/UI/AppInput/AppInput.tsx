import React, { forwardRef, HTMLProps } from 'react';
import { ErrorMessage, SCAppInput } from "./AppInput.styled";

interface IInputProps extends HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = forwardRef<HTMLInputElement, IInputProps>(
  ({ type, placeholder, errorMessage, isError, required, ...props }, ref) => {
    return (
      <div>
        <SCAppInput
          ref={ref} // Пробросьте ссылку внутри компонента
          $isError={isError || false}
          type={type}
          placeholder={placeholder}
          required={required}
          {...props}
        />
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);
