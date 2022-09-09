import { StyledFormField, StyledLabel, StyledLabelText } from "./styled";

export const Select = ({ fieldName, name, value, onChange, option }) => {

    return (
        <StyledLabel>
            <StyledLabelText>{fieldName}</StyledLabelText>
            <StyledFormField
                as="select"
                name={name}
                value={value}
                onChange={onChange}
            >
                {option}
            </StyledFormField>
        </StyledLabel>
    );
};

export const Input = ({ fieldName, value, onChange }) => {
    return (
        <StyledLabel>
            <StyledLabelText>{fieldName}</StyledLabelText>
            <StyledFormField
                min="0.01"
                value={value}
                onChange={onChange}
                type="number"
                step="0.01"
                required
                placeholder="10.00"
            >
            </StyledFormField>
        </StyledLabel>
    );

};