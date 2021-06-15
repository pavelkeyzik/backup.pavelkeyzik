import { init, send } from 'emailjs-com';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { appConfig } from '../config';

if (appConfig.emailJS.userId) {
  init(appConfig.emailJS.userId);
}

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('Please, provide your Name'),
  email: Yup.string()
    .email('Looks like this E-mail is not valid')
    .required('Please, provide your E-mail'),
  message: Yup.string()
    .min(20, 'The Message field must be at least 20 characters')
    .max(300, 'The Message field must be at most 300 characters')
    .required('Please, provide some message'),
});

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormFields = {
  name: '',
  email: '',
  message: '',
};

const fieldNames: { [K in keyof FormFields]: string } = {
  name: 'name',
  email: 'email',
  message: 'message',
};

function useContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [sendMessageError, setSendMessageError] = useState<string | undefined>(
    undefined
  );
  const [isEmailSent, setIsEmailSent] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: ContactFormSchema,
    validateOnMount: true,
    onSubmit(values) {
      if (appConfig.emailJS.templateId && appConfig.emailJS.serviceId) {
        setIsSending(true);
        setIsEmailSent(false);

        send(appConfig.emailJS.serviceId, appConfig.emailJS.templateId, {
          name: values.name,
          email: values.email,
          message: values.message,
        })
          .then(() => {
            setIsEmailSent(true);
          })
          .catch(() => {
            setSendMessageError(
              'Looks like there is something wrong with sending E-mail letters. Please, try again later...'
            );
            setIsEmailSent(false);
          })
          .finally(() => {
            setIsSending(false);
          });
      }
    },
  });

  const values: FormFields = {
    email: formik.values.email,
    name: formik.values.name,
    message: formik.values.message,
  };

  const errors: { [K in keyof FormFields]: string | undefined } = {
    email:
      formik.touched.email && formik.errors.email
        ? formik.errors.email
        : undefined,
    name:
      formik.touched.name && formik.errors.name
        ? formik.errors.name
        : undefined,
    message:
      formik.touched.message && formik.errors.message
        ? formik.errors.message
        : undefined,
  };

  return {
    fieldNames,
    values,
    errors: {
      ...errors,
      sendMessageError,
    },
    isEmailSent,
    isSending,
    getFieldProps: formik.getFieldProps,
    submitForm: formik.submitForm,
    isAbleToSubmit: formik.isValid,
  };
}

export { useContactForm };
