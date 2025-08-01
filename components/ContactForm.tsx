"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare, Phone } from "lucide-react";
import { AuroraText } from "./magicui/aurora-text";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { sendMessageToTelegram } from "@/hooks/telegram";
import { z } from "zod";

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-ZÀ-ỹ\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{10,15}$/.test(val), {
      message: "Invalid phone number format"
    }),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});

    try {
      // Validate form data with Zod
      const validatedData = contactFormSchema.parse(formData);

      const formattedMessage = `
    📩 *New Contact Information* 📩
    📞 *Phone Number:* ${validatedData.phone || "N/A"}
    👤 *Name:* ${validatedData.name}
    📧 *Email:* ${validatedData.email}
    📝 *Subject:* ${validatedData.subject}
    💬 *Message:* ${validatedData.message}
    
    🚀 *Sent from the portfolio!*`;
      
      await sendMessageToTelegram(formattedMessage);

      // Create mailto link as fallback
      const mailtoLink = `mailto:phat2911@gmail.com?subject=${encodeURIComponent(
        validatedData.subject
      )}&body=${encodeURIComponent(
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone || "N/A"}\n\nMessage:\n${validatedData.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const validationErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            validationErrors[issue.path[0] as string] = issue.message;
          }
        });
        setValidationErrors(validationErrors);
        setSubmitStatus("idle");
      } else {
        // Handle other errors (network, etc.)
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
      if (submitStatus !== "idle") {
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    }
  };

  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="text-4xl font-bold tracking-tighter">
          <AuroraText>GET IN TOUCH</AuroraText>
        </h1>

        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind? I'd love to hear about it. Send me a
                message and let's discuss how we can bring your ideas to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`border-primary/20 focus:border-primary/40 ${
                      validationErrors.name ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  {validationErrors.name && (
                    <p className="text-sm text-red-500 mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`border-primary/20 focus:border-primary/40 ${
                      validationErrors.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  {validationErrors.email && (
                    <p className="text-sm text-red-500 mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`border-primary/20 focus:border-primary/40 ${
                    validationErrors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {validationErrors.phone && (
                  <p className="text-sm text-red-500 mt-1">{validationErrors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`border-primary/20 focus:border-primary/40 ${
                    validationErrors.subject ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {validationErrors.subject && (
                  <p className="text-sm text-red-500 mt-1">{validationErrors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`border-primary/20 focus:border-primary/40 resize-none ${
                    validationErrors.message ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {validationErrors.message && (
                  <p className="text-sm text-red-500 mt-1">{validationErrors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-600 font-medium"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
