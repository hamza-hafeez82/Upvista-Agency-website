"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, User, Mail, Phone } from "lucide-react";
import SuccessPopup from "./SuccessPopup";

interface ApplicationFormProps {
  personalityAnswers: number[];
  technicalAnswers: { [key: number]: string };
  selectedPosition: string;
  onSubmit: (data: unknown) => void;
}

export default function ApplicationForm({
  personalityAnswers,
  technicalAnswers,
  selectedPosition,
  onSubmit
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cvFile: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setErrors(prev => ({ ...prev, cvFile: "File size must be less than 10MB" }));
        return;
      }
      setFormData(prev => ({ ...prev, cvFile: file }));
      if (errors.cvFile) {
        setErrors(prev => ({ ...prev, cvFile: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    }
    
    if (!formData.cvFile) {
      newErrors.cvFile = "CV file is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Convert CV file to base64 for email attachment
      let cvBase64 = null;
      let cvFileName = null;
      
      if (formData.cvFile) {
        cvBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(formData.cvFile!);
        });
        cvFileName = formData.cvFile.name;
      }

      // Create assessment report
      const assessmentReport = {
        personalityAssessment: personalityAnswers,
        technicalAssessment: {
          position: selectedPosition,
          answers: technicalAnswers
        },
        applicationData: {
          ...formData,
          cvFile: null, // Remove file object, we'll send base64 separately
          cvBase64: cvBase64,
          cvFileName: cvFileName
        },
        timestamp: new Date().toISOString()
      };
      
      // Submit to your backend API
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentReport)
      });
      
      if (response.ok) {
        onSubmit(assessmentReport);
        // Show success popup
        setShowSuccessPopup(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Application Form</h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
          Complete your application for the <span className="text-purple-400 font-semibold">{selectedPosition}</span> position.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-white font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full p-3 md:p-4 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none text-sm md:text-base ${
                  errors.fullName ? "border-red-500" : "border-gray-600 focus:border-purple-500"
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-4 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-600 focus:border-purple-500"
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full p-4 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none ${
                errors.phone ? "border-red-500" : "border-gray-600 focus:border-purple-500"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-white font-medium mb-2">
              <Upload className="w-4 h-4 inline mr-2" />
              CV Upload * (Max 10MB)
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-300 mb-2">
                  {formData.cvFile ? formData.cvFile.name : "Click to upload your CV"}
                </p>
                <p className="text-gray-400 text-sm">PDF, DOC, or DOCX files only</p>
              </label>
            </div>
            {errors.cvFile && <p className="text-red-400 text-sm mt-1">{errors.cvFile}</p>}
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-white font-medium mb-2">
              <FileText className="w-4 h-4 inline mr-2" />
              Cover Letter *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={6}
              className={`w-full p-4 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none resize-none ${
                errors.coverLetter ? "border-red-500" : "border-gray-600 focus:border-purple-500"
              }`}
              placeholder="Tell us why you&apos;re interested in this position and what makes you a great fit..."
            />
            {errors.coverLetter && <p className="text-red-400 text-sm mt-1">{errors.coverLetter}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              }`}
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        candidateName={formData.fullName}
        position={selectedPosition}
        onClose={handleCloseSuccessPopup}
      />
    </motion.div>
  );
}
