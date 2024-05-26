'use client'
import { useState } from 'react'
import { Button } from '@/app/components/Button'
import { FadeIn } from '@/app/components/FadeIn'
import { TextInput } from '@/app/contact/TextInput'

export function ContactForm() {
  const emailToSend = 'siwebofficiel@gmail.com';
  
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

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors = {
        name: formData.name === '',
        email: formData.email === '',
        message: formData.message === ''
      };
  
      if (newErrors.name || newErrors.email || newErrors.message) {
        setErrors(newErrors);
      } else {
        const mailtoLink = `mailto:${emailToSend}?subject=[FAQ][SIGL] Question du site vitrine&body=Bonjour,%0D%0A%0D%0AL'étudiant ${formData.name} (${formData.email}) vous a envoyé cette question via la FAQ du site vitrine :%0D%0A%0D%0A${formData.message}%0D%0A%0D%0ACordialement,%0D%0A%0D%0A-- %0D%0AFAQ site vitrine SIGL`;
        window.location.href = mailtoLink;
      }
  };
  
 
  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} error={errors.name}/>
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            error={errors.email}
            value={formData.email}
            onChange={handleChange}
          />
          <TextInput label="Question" name="message" value={formData.message} onChange={handleChange} error={errors.message}/>
        </div>
        <Button type="submit" className="mt-10">
          Submit your question !
        </Button>
      </form>
    </FadeIn>
  )
}