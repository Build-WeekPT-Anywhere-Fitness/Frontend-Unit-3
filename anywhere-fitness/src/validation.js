import * as yup from 'yup';
//Form Validation
const FormSchema = yup.object().shape({
  username: yup 
  .string()
  .required('Please enter a vaild username')
  .min(2, 'Must be longer than two characters'),

  password: yup
  .string()
  .required('Please enter a password')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
  ),

  instructorBox: yup
  .boolean()
})

export default FormSchema