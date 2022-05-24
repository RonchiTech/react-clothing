import { FormInputLabel, Group, FormInput } from './input.styles';
const Input = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInput {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default Input;
