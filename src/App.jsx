import React, { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { Phone, Calendar, MapPin, Clock, ShieldCheck, ChevronRight, HeartPulse } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const BRAND = {
  blue: '#0C3C78',
  green: '#4CA57A',
  gray: '#F3F5F7',
  accent: '#6FB1FF',
  dark: '#0A2540'
}

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'Source Sans 3, Noto Sans, Inter, system-ui' }}>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const TopBar = () => (
  <div className="w-full text-white text-sm" style={{ backgroundColor: BRAND.blue }}>
    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
      <p className="opacity-90">1901 Route 130 South, North Brunswick, NJ 08902</p>
      <a href="tel:17326581102" className="inline-flex items-center gap-2 font-semibold">
        <Phone className="w-4 h-4" /> (732) 658-1102
      </a>
    </div>
  </div>
)

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND.blue }}>
          W
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-slate-900">Walk In Medical Center</p>
          <p className="text-xs text-slate-500">North Brunswick, NJ</p>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {[
          ['/', 'Home'],
          ['/about', 'About the Doctor'],
          ['/services', 'Our Services'],
          ['/patient-info', 'Patient Information'],
          ['/insurance', 'Insurance'],
          ['/contact', 'Contact & Location'],
          ['/request-appointment', 'Appointment Request']
        ].map(([to, label]) => (
          <NavLink key={to} to={to} className={({isActive})=>`hover:underline ${isActive? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a href="tel:17326581102" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-white shadow" style={{ backgroundColor: BRAND.green }}>
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <Link to="/request-appointment" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white shadow" style={{ backgroundColor: BRAND.blue }}>
          <Calendar className="w-4 h-4" /> Request Appointment
        </Link>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <section className="relative">
    <div className="relative h-[520px] overflow-hidden">
      <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Compassionate Family Care in North Brunswick</h1>
            <p className="mt-3 text-lg md:text-xl text-white/90">Walk-Ins Welcome • Same-day Appointments • 30+ Years Experience</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:17326581102" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[#0A2540] font-semibold" style={{ backgroundColor: BRAND.gray }}>
                <Phone className="w-5 h-5" /> Call (732) 658-1102
              </a>
              <Link to="/request-appointment" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: BRAND.green }}>
                <Calendar className="w-5 h-5" /> Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Section = ({ title, subtitle, children }) => (
  <section className="py-14 md:py-18">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-2xl mb-8">
        {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: BRAND.blue }}>{title}</h2>}
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
)

const AboutPreview = () => (
  <Section title="About Dr. Atiya Nadeem" subtitle="Board-Certified Family Physician with 30+ years experience">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <div className="w-full h-full grid place-items-center text-slate-500 text-sm">[Photo Placeholder – 600×800]</div>
      </div>
      <div className="space-y-4">
        <p>Dr. Nadeem provides comprehensive care for individuals and families across all ages. Patients appreciate her warm bedside manner, attentive listening, and practical guidance that empowers healthier lives.</p>
        <div className="flex flex-wrap gap-2">
          {['Minimal waits','Walk-ins welcome','Open Mon–Sat','Telehealth available','30+ years experience'].map((pill)=> (
            <span key={pill} className="px-3 py-1 rounded-full text-sm bg-[#F3F5F7] text-slate-700 border border-slate-200">{pill}</span>
          ))}
        </div>
        <Link to="/about" className="inline-flex items-center gap-2 text-[color:var(--link,#0C3C78)] font-semibold">
          Learn more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </Section>
)

const ServicesPreview = () => (
  <Section title="Our Services" subtitle="Comprehensive family care, from preventive visits to urgent concerns.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        'Family Medicine','Walk-In Care','Telehealth','Preventive Care','Acute Illness & Injury','Chronic Disease Management','Women\'s Health','Men\'s Health','Pediatric Care'
      ].map((srv)=> (
        <div key={srv} className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="h-40 bg-slate-100 grid place-items-center text-slate-500 text-sm">[Photo Placeholder]</div>
          <div className="p-4">
            <h3 className="font-semibold text-slate-900">{srv}</h3>
            <Link to="/services" className="mt-2 inline-flex items-center gap-1 text-sm text-[color:var(--link,#0C3C78)]">See details <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

const InsurancePreview = () => (
  <Section title="Insurance Accepted" subtitle="Most major plans accepted. Please call to verify your specific plan.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {['Anthem BCBS','Aetna','Blue Cross Blue Shield','ChoiceCare','Cigna','United Healthcare','Medicare','Medicaid','Horizon BCBS','Oxford'].map(n => (
        <div key={n} className="px-4 py-3 rounded-lg bg-[#F3F5F7] border border-slate-200 text-slate-700">{n}</div>
      ))}
    </div>
  </Section>
)

const HoursLocation = () => (
  <Section title="Hours & Location">
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-3 text-slate-700"><Clock className="w-5 h-5" /> Hours</div>
        <ul className="text-slate-700 space-y-1">
          <li>Monday–Friday: 9:00 AM – 5:00 PM</li>
          <li>Saturday: 9:00 AM – 1:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-3 text-slate-700"><MapPin className="w-5 h-5" /> Address</div>
        <p className="text-slate-700">1901 Route 130 South, North Brunswick, NJ 08902</p>
      </div>
      <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="h-40 bg-slate-100 grid place-items-center text-slate-500 text-sm">[Map Placeholder]</div>
      </div>
    </div>
  </Section>
)

const FinalCTA = () => (
  <section className="py-14 md:py-18">
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-2xl p-8 md:p-10 text-white overflow-hidden relative" style={{ backgroundColor: BRAND.blue }}>
        <HeartPulse className="absolute right-6 top-6 w-16 h-16 opacity-20" />
        <h3 className="text-2xl md:text-3xl font-semibold">Your Family’s Health Is Our Priority – Walk‑ins Welcome Today</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="tel:17326581102" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#0A2540] font-semibold">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <Link to="/request-appointment" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#4CA57A] text-white font-semibold">
            <Calendar className="w-5 h-5" /> Request Appointment
          </Link>
        </div>
      </div>
    </div>
  </section>
)

// Pages
const HomePage = () => (
  <Layout>
    <Hero />
    <AboutPreview />
    <ServicesPreview />
    <InsurancePreview />
    <HoursLocation />
    <FinalCTA />
  </Layout>
)

const PageShell = ({ title, children }) => (
  <Layout>
    <div className="bg-[#F3F5F7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold" style={{ color: BRAND.blue }}>{title}</h1>
      </div>
    </div>
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </section>
  </Layout>
)

const AboutPage = () => (
  <PageShell title="About Dr. Atiya Nadeem">
    <div className="grid md:grid-cols-3 gap-10 items-start">
      <div className="md:col-span-1">
        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm grid place-items-center text-slate-500">[Photo Placeholder – 600×800]</div>
      </div>
      <div className="md:col-span-2 space-y-5">
        <p>Dr. Atiya Nadeem, MD, is a Board-Certified Family Physician with over three decades of experience caring for individuals and families. Her approach blends evidence‑based medicine with a warm, personal touch.</p>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Credentials</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Medical School: People’s Medical College (1991)</li>
            <li>Residency: University of Medicine and Dentistry of New Jersey (UMDNJ)</li>
            <li>Affiliated Hospital: Robert Wood Johnson University Hospital</li>
            <li>30+ years caring for families</li>
          </ul>
        </div>
        <blockquote className="border-l-4 pl-4 italic text-slate-700" style={{ borderColor: BRAND.green }}>
          “My goal is to provide the highest quality medical care in a welcoming environment where every patient feels heard, respected, and cared for.”
        </blockquote>
      </div>
    </div>
  </PageShell>
)

const ServicesPage = () => (
  <PageShell title="Our Services">
    <div className="space-y-8">
      {[
        {title:'Family Medicine (all ages)', body:'We provide comprehensive care for children, adults, and seniors. From routine checkups to managing ongoing conditions, we focus on long‑term relationships that support your health at every stage.'},
        {title:'Walk‑In Care (no appointment needed)', body:'Visit us when you need prompt attention for minor illnesses, injuries, or urgent concerns. We keep waits minimal and make it easy to get care when you need it.'},
        {title:'Telehealth', body:'Receive care from home through secure virtual visits for many concerns such as medication follow‑ups, cold/flu symptoms, and more.'},
        {title:'Preventive Care (physical exams, immunizations)', body:'Stay on track with annual physicals, school and work forms, cancer screenings, and recommended vaccines tailored to your age and risk factors.'},
        {title:'Acute Illness & Injury Treatment', body:'Whether it’s a sore throat, ear infection, sprain, or minor cut, we provide timely evaluation and treatment so you can feel better sooner.'},
        {title:'Chronic Disease Management (diabetes, hypertension, etc.)', body:'We partner with you to manage conditions like diabetes, high blood pressure, asthma, and thyroid disorders with practical plans you can follow.'},
        {title:"Women’s Health (gynecology, menopause)", body:'Compassionate care for annual exams, contraception, menopause management, and common gynecologic concerns.'},
        {title:"Men’s Health (prostate, testosterone)", body:'Focused support for prostate health, hormone concerns, and preventive screenings to keep you well.'},
        {title:'Pediatric Care (well‑child, vaccines)', body:'From newborn care to teen wellness, we provide growth checkups, vaccines, school forms, and guidance for parents.'},
      ].map(({title, body}) => (
        <div key={title} className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 h-36 rounded-lg bg-slate-100 border border-slate-200 grid place-items-center text-slate-500 text-sm">[Photo Placeholder]</div>
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-slate-700">{body}</p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
)

const InsurancePage = () => (
  <PageShell title="Insurance Accepted">
    <p className="text-slate-700 mb-6">Most major plans accepted. Please call <a href="tel:17326581102" className="font-semibold underline">(732) 658‑1102</a> to verify your specific plan.</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {['Anthem Blue Cross Blue Shield','Aetna','Blue Cross Blue Shield','ChoiceCare','Cigna','United Healthcare','Medicare','Medicaid','Horizon Blue Cross Blue Shield','Oxford Health Plans'].map(n => (
        <div key={n} className="px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm">{n}</div>
      ))}
    </div>
  </PageShell>
)

const PatientInfoPage = () => (
  <PageShell title="Patient Information">
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">What to bring</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Insurance card</li>
            <li>Photo ID</li>
            <li>Current medication list</li>
            <li>Relevant medical records</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">New patient welcome</h3>
          <p className="text-slate-700">We’re glad you’re here. Our team will guide you through paperwork and answer any questions so your first visit is smooth and comfortable.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-2">Walk‑ins and same‑day appointments</h3>
          <p className="text-slate-700">Walk‑ins are welcome during business hours for urgent needs. For shorter waits, call ahead and we’ll reserve a same‑day time whenever possible.</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-2">FAQ</h3>
        <div className="space-y-4 text-slate-700">
          <div>
            <p className="font-semibold">Do I need an appointment?</p>
            <p>Walk‑ins are welcome. Appointments are recommended for physicals or chronic care follow‑ups.</p>
          </div>
          <div>
            <p className="font-semibold">Do you see children?</p>
            <p>Yes, we care for patients of all ages, including infants, children, and teens.</p>
          </div>
          <div>
            <p className="font-semibold">Is there parking?</p>
            <p>Yes, free on‑site parking is available.</p>
          </div>
          <div>
            <p className="font-semibold">Do you offer telehealth?</p>
            <p>Yes, virtual visits are available for many concerns. Call us to schedule.</p>
          </div>
        </div>
      </div>
    </div>
  </PageShell>
)

const ContactPage = () => {
  const [form, setForm] = useState({ full_name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if(res.ok) setStatus('Thank you! We will be in touch.')
      else setStatus(data?.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <PageShell title="Contact & Location">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
            <p>1901 Route 130 South, North Brunswick, NJ 08902</p>
            <p className="mt-2"><span className="font-semibold">Phone:</span> <a href="tel:17326581102" className="underline">(732) 658‑1102</a></p>
            <div className="h-56 mt-4 rounded-lg bg-slate-100 grid place-items-center text-slate-500 text-sm">[Map Placeholder]</div>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Hours</h3>
            <ul className="text-slate-700 space-y-1">
              <li>Monday–Friday: 9:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <Link to="/request-appointment" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md text-white" style={{ backgroundColor: BRAND.blue }}>
              <Calendar className="w-4 h-4" /> See Walk‑In Hours
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Contact Form</h3>
            <p className="text-sm text-slate-600 mb-3">Do not submit personal health information here.</p>
            <form onSubmit={submit} className="space-y-3">
              <input required value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} placeholder="Full Name" className="w-full px-3 py-2 rounded-md border border-slate-300" />
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full px-3 py-2 rounded-md border border-slate-300" />
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message" rows={4} className="w-full px-3 py-2 rounded-md border border-slate-300" />
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white" style={{ backgroundColor: BRAND.green }}>
                Send Message
              </button>
            </form>
            {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
          </div>
        </div>
      </div>
    </PageShell>
  )
}

const AppointmentPage = () => {
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', preferred_datetime: '', message: '', confirmed_no_phi: false })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    if (!form.confirmed_no_phi) {
      setStatus('Please confirm that you will not include medical information.')
      return
    }
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/appointments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if(res.ok) setStatus('Thank you! We will call to confirm your appointment.')
      else setStatus(data?.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <PageShell title="Secure Appointment Request">
      <div className="max-w-2xl">
        <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
          <p className="text-sm text-red-700 font-medium">This form is for appointment requests and general inquiries only. Do NOT submit personal health information or medical details.</p>
          <form onSubmit={submit} className="mt-4 space-y-3">
            <input required value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} placeholder="Full Name" className="w-full px-3 py-2 rounded-md border border-slate-300" />
            <div className="grid sm:grid-cols-2 gap-3">
              <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="w-full px-3 py-2 rounded-md border border-slate-300" />
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full px-3 py-2 rounded-md border border-slate-300" />
            </div>
            <input value={form.preferred_datetime} onChange={e=>setForm({...form, preferred_datetime:e.target.value})} placeholder="Preferred Date/Time" className="w-full px-3 py-2 rounded-md border border-slate-300" />
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message (non‑medical)" rows={4} className="w-full px-3 py-2 rounded-md border border-slate-300" />
            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" required checked={form.confirmed_no_phi} onChange={e=>setForm({...form, confirmed_no_phi:e.target.checked})} />
              <span>I confirm I will NOT include symptoms, diagnoses, medications or any medical information in this form.</span>
            </label>
            <button className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-white" style={{ backgroundColor: BRAND.blue }}>
              Submit Request
            </button>
          </form>
          {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
        </div>
      </div>
    </PageShell>
  )
}

const Footer = () => (
  <footer className="mt-16 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-slate-600">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <p className="font-semibold text-slate-900">Walk In Medical Center</p>
          <p>1901 Route 130 South, North Brunswick, NJ 08902</p>
          <p className="mt-1"><a href="tel:17326581102" className="underline">(732) 658‑1102</a></p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Hours</p>
          <p>Mon–Fri 9:00 AM – 5:00 PM</p>
          <p>Sat 9:00 AM – 1:00 PM</p>
          <p>Sun Closed</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li><Link to="/services" className="underline">Services</Link></li>
            <li><Link to="/insurance" className="underline">Insurance</Link></li>
            <li><Link to="/request-appointment" className="underline">Appointment Request</Link></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Walk In Medical Center. All rights reserved.</p>
    </div>
  </footer>
)

// App only renders routes; BrowserRouter is provided in src/main.jsx
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/patient-info" element={<PatientInfoPage />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/request-appointment" element={<AppointmentPage />} />
    </Routes>
  )
}

export default App
