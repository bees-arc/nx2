'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const serviceOptions = [
  'Website Design',
  'Next.js Development',
  'UI/UX Design',
  'Design System',
  'Speed & SEO Audit',
  'Full Redesign',
];

const budgetRanges = [
  '< $5,000',
  '$5k — $10k',
  '$10k — $25k',
  '$25k — $50k',
  '$50k+',
];

const timelineOptions = [
  'Immediately',
  'Within 2 weeks (Standard Sprint)',
  '1-2 months',
  'Exploring options',
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Website Design']);
  const [selectedBudget, setSelectedBudget] = useState<string>('$10k — $25k');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Within 2 weeks (Standard Sprint)');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    details: '',
  });

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? (prev.length > 1 ? prev.filter((s) => s !== srv) : prev) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  if (formStatus === 'success') {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Inquiry Transmitted</h3>
        <p className={styles.successDesc}>
          Thank you, {formData.name || 'there'}. We have received your project details.
          Our team will analyze your requirements and get back to you within 24 business hours.
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setFormStatus('idle');
            setFormData({ name: '', email: '', company: '', website: '', details: '' });
          }}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* ─── 01. SERVICES SELECTION ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>01</span>
          <span>What do you need help with?</span>
        </label>
        <div className={styles.pillsGrid}>
          {serviceOptions.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => toggleService(service)}
              >
                <span className={styles.pillCheck}>{isSelected ? '✓' : '+'}</span>
                <span>{service}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 02. BUDGET ESTIMATE ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>02</span>
          <span>Estimated project investment</span>
        </label>
        <div className={styles.pillsGrid}>
          {budgetRanges.map((range) => {
            const isSelected = selectedBudget === range;
            return (
              <button
                type="button"
                key={range}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => setSelectedBudget(range)}
              >
                <span>{range}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 03. TIMELINE ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>03</span>
          <span>Target launch window</span>
        </label>
        <div className={styles.pillsGrid}>
          {timelineOptions.map((opt) => {
            const isSelected = selectedTimeline === opt;
            return (
              <button
                type="button"
                key={opt}
                className={`${styles.pillBtn} ${isSelected ? styles.pillBtnActive : ''}`}
                onClick={() => setSelectedTimeline(opt)}
              >
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 04. PERSONAL & PROJECT DETAILS ─── */}
      <div className={styles.fieldGroup}>
        <label className={styles.groupLabel}>
          <span className={styles.stepNum}>04</span>
          <span>About you & your venture</span>
        </label>

        <div className={styles.inputsRow}>
          <div className={styles.inputField}>
            <label htmlFor="name" className={styles.inputLabel}>Your Name *</label>
            <input
              id="name"
              required
              type="text"
              placeholder="e.g. Nathan Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.inputLabel}>Work Email *</label>
            <input
              id="email"
              required
              type="email"
              placeholder="e.g. nathan@venture.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.inputField}>
            <label htmlFor="company" className={styles.inputLabel}>Company / Project Name</label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Acme Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="website" className={styles.inputLabel}>Current Website (if applicable)</label>
            <input
              id="website"
              type="url"
              placeholder="https://"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className={styles.textInput}
            />
          </div>
        </div>

        <div className={styles.inputField} style={{ marginTop: '1.25rem' }}>
          <label htmlFor="details" className={styles.inputLabel}>Project Overview & Objectives *</label>
          <textarea
            id="details"
            required
            rows={4}
            placeholder="Tell us what you're building, what challenges you're facing, and what success looks like."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className={styles.textArea}
          />
        </div>
      </div>

      {/* ─── SUBMISSION ─── */}
      <div className={styles.submitRow}>
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="btn btn--primary btn--lg"
        >
          {formStatus === 'submitting' ? 'Transmitting RFP...' : 'Submit Project Brief →'}
        </button>

        <div className={styles.submitGuarantees}>
          <div className={styles.guaranteeItem}>
            <span>🔒</span>
            <span>NDA protected</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span>⚡</span>
            <span>24h guaranteed response</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span>🤝</span>
            <span>Zero obligation consultation</span>
          </div>
        </div>
      </div>
    </form>
  );
}
