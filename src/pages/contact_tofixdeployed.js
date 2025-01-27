import { useState, useEffect } from 'react';
import { Meta } from '../components';
import { Container } from '../components/layout';
import {
  ContactForm,
  ContactHeader,
  ContactLinks,
  ContactQuote,
} from '../components/contact';

const initialValue = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // prevent submit with empty values
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    setFormData(initialValue);
    setLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 4500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Meta title="contact" />
      <Container>
        <ContactHeader />
        <ContactForm
          {...{ formData, handleSubmit, handleChange, loading, success }}
        />
        <ContactLinks />
        <ContactQuote />
      </Container>
    </>
  );
}
