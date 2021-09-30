export const requiredField = (value) =>
{
    if (value) return undefined;
    return "Filed is required";
}

//Замыкание

export const maxLenghtCreator = (maxLength) => (value) => 
{
    if (!value) return undefined;
    if (value.length > maxLength) return "Max length is " + maxLength + " symbols";
    return undefined;
}

