import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.object().shape({
        primary: Yup.string()
            .matches(/^\d{11}$/, "Primary Mobile Number must be 11 digits")
            .required("Primary Mobile Number is required"),

        secondary: Yup.string().test({
            name: 'isSecondaryValid',
            message: 'Secondary Mobile Number must be 11 digits',
            test: function (value) {
                if (value && value.length > 0) {
                    return /^[0-9]{11}$/.test(value);
                }
                return true; // Validation is not applied when field is empty
            },
        }),
    }),
    address: Yup.object().shape({
        present: Yup.string().required("Address is required"),
        city: Yup.object()
            .shape({
                _id: Yup.string().required("City ID is required"),
                label: Yup.string().required("City label is required"),
                value: Yup.string().required("City value is required"),
            })
            .test('is-filled', 'City is required', function (value: any) {
                const { _id, label, value: cityValue } = value || {};
                return _id && label && cityValue;
            }),
    }),

    gender: Yup.object().shape({
        _id: Yup.string().required("Gender ID is required"),
        label: Yup.string().required("Gender label is required"),
        value: Yup.string().required("Gender value is required"),
    }).test('is-filled', 'Gender is required', function (value: any) {
        const { _id, label, value: genderValue } = value || {};
        return _id && label && genderValue;
    }),

    rank: Yup.object().shape({
        _id: Yup.string().required("Rank ID is required"),
        label: Yup.string().required("Rank label is required"),
        value: Yup.string().required("Rank value is required"),
    }).test('is-filled', 'Rank is required', function (value: any) {
        const { _id, label, value: rankValue } = value || {};
        return _id && label && rankValue;
    }),

    status: Yup.object().shape({
        _id: Yup.string().required("Status ID is required"),
        label: Yup.string().required("Status label is required"),
        value: Yup.string().required("Status value is required"),
    }).test('is-filled', 'Status is required', function (value: any) {
        const { _id, label, value: roleValue } = value || {};
        return _id && label && roleValue;
    }),

    role: Yup.object().shape({
        _id: Yup.string().required("Role ID is required"),
        label: Yup.string().required("Role label is required"),
        value: Yup.string().required("Role value is required"),
    }).test('is-filled', 'Role is required', function (value: any) {
        const { _id, label, value: roleValue } = value || {};
        return _id && label && roleValue;
    }),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
    description: Yup.string(),
});

export const userUpdateSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.object().shape({
        primary: Yup.string()
            .matches(/^\d{11}$/, "Primary Mobile Number must be 11 digits")
            .required("Primary Mobile Number is required"),

        secondary: Yup.string().test({
            name: 'isSecondaryValid',
            message: 'Secondary Mobile Number must be 11 digits',
            test: function (value) {
                if (value && value.length > 0) {
                    return /^[0-9]{11}$/.test(value);
                }
                return true; // Validation is not applied when field is empty
            },
        }),
    }),
    address: Yup.object().shape({
        present: Yup.string().required("Address is required"),
    }),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string()
        .test('passwordValid', 'Password must be at least 6 characters long', function (value) {
            if (value && value.length > 0) {
                return value.length >= 6;
            }
            return true; // Validation is not applied when the field is empty
        }),
    confirmPassword: Yup.string()
        .test('isPassword', 'Confirm password required', function (value) {
            const { password } = this.parent;
            if (password && !value) {
                return false; // If there is a password, confirmPassword is required
            }
            return true; // Validation passed
        })
        .test('isPasswordMatched', 'Password must be matched', function (value) {
            const { password } = this.parent;
            if (password !== value) {
                return false; // Passwords do not match
            }
            return true; // Validation passed
        }),
    description: Yup.string(),
});