import React from 'react'
import {Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button';
interface Props {
    handleNext: () => void
  }

const Formone: React.FC<Props> = ({ handleNext }) =>
{

    return (
       
            <Formik
            initialValues={{ firstName: '' }}
             validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required')
              })}
              onSubmit={(values) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  handleNext();
                }, 800);
              }}
            >
                 <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <br />

        <Button type="submit" variant='contained' color='primary'>Submit</Button>

      </Form>

            </Formik>
       
    )
}

export default Formone; 
