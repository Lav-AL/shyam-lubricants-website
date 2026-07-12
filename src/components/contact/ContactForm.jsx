import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react"

// Zod Schema for form validation
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(50),
  phoneNumber: z.string().min(10, "Valid phone number required").max(15),
  email: z.string().email("Please enter a valid email address"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      inquiryType: "",
      subject: "",
      message: ""
    }
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Form data submitted:", data)
      setSubmitStatus('success')
      reset() // Clear form on success
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-6 text-brand-red">
            <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center border border-brand-red/10 shadow-sm">
              <Mail size={32} />
            </div>
          </div>
          <div className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Drop Us A Message</div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Send an Inquiry
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a question? Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-silver/40 rounded-3xl p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
        >
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="text-green-800 font-bold text-lg mb-1">Message Sent Successfully</h4>
                <p className="text-green-700">Thank you for contacting SHYAM LUBRICANTS. Our team will get back to you shortly.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-start gap-4">
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="text-red-800 font-bold text-lg mb-1">Something went wrong</h4>
                <p className="text-red-700">We couldn't process your request at this time. Please try calling us directly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Full Name *</label>
                <input 
                  type="text"
                  {...register("fullName")}
                  className={`w-full px-6 py-4 bg-gray-100 border ${errors.fullName ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs font-medium mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Phone Number *</label>
                <input 
                  type="tel"
                  {...register("phoneNumber")}
                  className={`w-full px-6 py-4 bg-gray-100 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300`}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs font-medium mt-1">{errors.phoneNumber.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Email Address *</label>
                <input 
                  type="email"
                  {...register("email")}
                  className={`w-full px-6 py-4 bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>}
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Inquiry Type *</label>
                <select 
                  {...register("inquiryType")}
                  className={`w-full px-6 py-4 bg-gray-100 border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300 appearance-none`}
                >
                  <option value="">Select an option...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Dealer Inquiry">Dealer Inquiry</option>
                  <option value="Distributor Inquiry">Distributor Inquiry</option>
                  <option value="Support">Support</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-xs font-medium mt-1">{errors.inquiryType.message}</p>}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Subject *</label>
              <input 
                type="text"
                {...register("subject")}
                className={`w-full px-6 py-4 bg-gray-100 border ${errors.subject ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300`}
                placeholder="How can we help?"
              />
              {errors.subject && <p className="text-red-500 text-xs font-medium mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark-grey uppercase tracking-wide">Message *</label>
              <textarea 
                {...register("message")}
                rows="6"
                className={`w-full px-6 py-4 bg-gray-100 border ${errors.message ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'} shadow-inner text-dark-grey placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all duration-300 resize-none`}
                placeholder="Please provide details about your inquiry..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full px-12 py-5 bg-brand-red text-white font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg mt-4 shadow-[0_8px_25px_rgba(216,27,33,0.35)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-red-dark hover:shadow-[0_12px_30px_rgba(216,27,33,0.45)] hover:-translate-y-1'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
