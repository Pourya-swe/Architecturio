import { useState, FormEvent } from "react";
import Button from "../UI/Button";
import styles from "./ContactForm.module.scss";
import { ClassList } from "../../Utils/Class-List/ClassList";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+98\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    setErrors(newErrors);
    // Check if we have any errors, if we do, it will return false.
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    let newValue = value;
    // Turn the phone number into a standard format.
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.startsWith("98") && digits.length === 12) {
        newValue = "+" + digits;
      } else if (digits.startsWith("09") && digits.length === 11) {
        newValue = "+98" + digits.slice(1);
      } else if (digits.startsWith("9") && digits.length === 10) {
        newValue = "+98" + digits;
      } else {
        newValue = value;
      }
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Reset success message
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {submitSuccess && (
        <div className={styles.successAlert} role="alert">
          <strong className={styles.strong}>Success! </strong>
          <span>Your message has been sent. We'll get back to you soon.</span>
        </div>
      )}

      {/* Name */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={ClassList(styles.input, errors.name && styles.error)}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email (e.g., example@email.com)"
          value={formData.email}
          onChange={handleChange}
          className={ClassList(styles.input, errors.email && styles.error)}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      {/* Phone number */}
      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number <span className={styles.required}>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number (e.g., 09123456789)"
          value={formData.phone}
          onChange={handleChange}
          className={ClassList(styles.input, errors.phone && styles.error)}
        />
        {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
      </div>

      {/* Subject Options */}
      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Consultation">Project Consultation</option>
          <option value="Career Opportunities">Career Opportunities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={ClassList(styles.textarea, errors.message && styles.error)}
        ></textarea>
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
