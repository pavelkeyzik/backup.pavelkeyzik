import styled from '@emotion/styled';
import { FormEvent } from 'react';
import { Button } from '../components/Button';
import { ContentWidth } from '../components/ContentWidth';
import { AlertCirlceIcon } from '../components/icons/AlertCirlceIcon';
import { AlertOctagonIcon } from '../components/icons/AlertOctagonIcon';
import { FormControl, Input, TextArea } from '../components/Input';
import { Layout } from '../components/Layout';
import { useContactForm } from '../hooks/use-contact-form';

function ContactPage() {
  const form = useContactForm();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.submitForm();
  }

  return (
    <Layout>
      <ContentWidth>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <FormControl label="Name:" error={form.errors.name}>
            <Input
              {...form.getFieldProps(form.fieldNames.name)}
              placeholder="Name"
              disabled={form.isSending || form.isEmailSent}
            />
          </FormControl>
          <FormControl label="E-mail:" error={form.errors.email}>
            <Input
              {...form.getFieldProps(form.fieldNames.email)}
              placeholder="E-mail"
              disabled={form.isSending || form.isEmailSent}
            />
          </FormControl>
          <FormControl label="Message:" error={form.errors.message}>
            <TextArea
              {...form.getFieldProps(form.fieldNames.message)}
              placeholder="Your message"
              rows={5}
              disabled={form.isSending || form.isEmailSent}
            />
          </FormControl>
          <Button
            style={{ marginTop: 16 }}
            disabled={
              !form.isAbleToSubmit || form.isSending || form.isEmailSent
            }
          >
            {form.isSending ? 'Sending message...' : 'Send message'}
          </Button>
          {form.errors.sendMessageError ? (
            <ErrorMessage>
              <AlertOctagonIcon /> {form.errors.sendMessageError}
            </ErrorMessage>
          ) : null}
          {form.isEmailSent ? (
            <SuccessMessage>
              <AlertCirlceIcon />
              Your message has been sent successfuly. I'll answer you as soon as
              I can
            </SuccessMessage>
          ) : null}
        </form>
      </ContentWidth>
    </Layout>
  );
}

const SuccessMessage = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.successMessage};

  & > * {
    margin-right: 8px;
  }
`;

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.errorMessage};

  & > * {
    margin-right: 8px;
  }
`;

export default ContactPage;
