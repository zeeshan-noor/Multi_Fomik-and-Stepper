import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
interface Props {
  handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{  email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext()
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <Button type="submit" variant='contained' color='primary'>Submit</Button>

      </Form>
    </Formik>
  );
};

export default FormThree;