import * as Yup from "yup";

const FormSchemaSmall = Yup.object().shape({
    nameSmall: Yup.string()
        .min(2,"Must be longer then 2 characters")
        .max(20,"Must be short then 20 characters")
        .required("Required")
});

export default FormSchemaSmall;