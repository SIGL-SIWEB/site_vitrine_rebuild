'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/app/components/Button'
import { FadeIn } from '@/app/components/FadeIn'
import { TextInput } from '@/app/contact/TextInput'
import { useTranslation } from 'react-i18next'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify'

export function ContactForm() {
  const { t } = useTranslation();

  useEffect(() => emailjs.init("F3uSlHjS6irw_7HkA"), []);
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      setErrors({
        ...errors,
        [e.target.name]: false
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const serviceId = "service_mtybz65";
      const templateId = "template_p63mfs9";

      const newErrors = {
        name: formData.name === '',
        email: formData.email === '',
        message: formData.message === ''
      };

      if (newErrors.name || newErrors.email || newErrors.message) {
        setErrors(newErrors);
      } else {
        setLoading(true);
        try {
          await emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            message: formData.message
          });
          toast.success(t('contact.toast'));
          setFormData({ name: '', email: '', message: '' });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
  };
  
 
  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t('contact.email.name')} name="name" autoComplete="name" value={formData.name} onChange={handleChange} error={errors.name}/>
          <TextInput
            label={t('contact.email.email')}
            type="email"
            name="email"
            autoComplete="email"
            error={errors.email}
            value={formData.email}
            onChange={handleChange}
          />
          <TextInput label={t('contact.email.question')} name="message" value={formData.message} onChange={handleChange} error={errors.message}/>
        </div>
        <Button type="submit" className={`mt-10 ${loading ? 'bg-gray-400' : ''}`} disabled={loading}>
          {loading ? t('contact.sending') : t('contact.button')}
        </Button>
      </form>
    </FadeIn>
  )
}