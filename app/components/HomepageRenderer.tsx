'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Scale, Gavel, BookOpen, Shield, FileText, Landmark } from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const courtServices = [
  { icon: Scale, title: 'Civil Litigation', description: 'Fair resolution of disputes between parties through established legal procedures and due process.' },
  { icon: Gavel, title: 'Criminal Proceedings', description: 'Administration of criminal justice with impartiality, ensuring rights of all parties are protected.' },
  { icon: BookOpen, title: 'Family Law', description: 'Compassionate handling of family matters including custody, divorce, and domestic relations.' },
  { icon: Shield, title: 'Protective Orders', description: 'Swift processing of protective orders to ensure the safety of vulnerable individuals.' },
  { icon: FileText, title: 'Court Records', description: 'Public access to court documents, filings, and case information in accordance with law.' },
  { icon: Landmark, title: 'Appeals', description: 'Review of lower court decisions with thorough analysis and adherence to legal precedent.' },
]

const credentials = [
  'Judicial Excellence Award',
  'State Bar Accredited',
  'ABA Recognized',
]

const iconShowcase = [
  { icon: Scale, label: 'Civil' },
  { icon: Gavel, label: 'Criminal' },
  { icon: BookOpen, label: 'Family' },
  { icon: Shield, label: 'Protection' },
  { icon: FileText, label: 'Records' },
  { icon: Landmark, label: 'Appeals' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Court Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Court Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Divisions of the Court
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our court provides comprehensive judicial services across multiple divisions, ensuring fair and efficient administration of justice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courtServices.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
              Recognition & Accreditation
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {credentials.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {iconShowcase.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-xs font-medium text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Courthouse
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              A Tradition of Justice
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Serving the Westfield community with integrity and dedication to the rule of law.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&fit=crop', alt: 'Courthouse exterior' },
              { src: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&q=80&fit=crop', alt: 'Legal library and research' },
              { src: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&q=80&fit=crop', alt: 'Scales of justice' },
              { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Professional court proceedings' },
            ].map((photo, i) => (
              <div key={i} className="relative h-56 rounded-lg overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-primary-800">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">WDC</span>
                </div>
                <span className="text-lg font-bold text-white font-display">Westfield District Court</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Committed to the fair and impartial administration of justice, serving the community with integrity since 1872.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Court Services</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/divisions" className="hover:text-accent-400 transition-colors">Divisions</a></li>
                <li><a href="/judges" className="hover:text-accent-400 transition-colors">Judges</a></li>
                <li><a href="/resources" className="hover:text-accent-400 transition-colors">Resources</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">Court News</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Information</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/about" className="hover:text-accent-400 transition-colors">About the Court</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact</a></li>
                <li><a href="/resources" className="hover:text-accent-400 transition-colors">Filing Information</a></li>
                <li><a href="/resources" className="hover:text-accent-400 transition-colors">Forms & Documents</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li>500 Justice Way</li>
                <li>Westfield, PA 19428</li>
                <li className="pt-1">
                  <a href="mailto:clerk@westfieldcourt.gov" className="hover:text-accent-400 transition-colors">clerk@westfieldcourt.gov</a>
                </li>
                <li>
                  <a href="tel:5558901203" className="hover:text-accent-400 transition-colors">(555) 890-1203</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Westfield District Court. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
