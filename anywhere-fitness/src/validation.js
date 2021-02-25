import * as yup from 'yup';

const FormSchema = yup.object().shape({
  username: yup 
  .string()
  .required('Please enter a vaild username')
  .min(2, 'Must be longer than two characters'),

  password: yup
  .string()
  .required('Please enter a password')
  .min(2, 'Must be longer than two characters')
})

export default FormSchema