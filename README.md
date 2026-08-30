# EasyLife — Adaptive Accessibility Platform for Older Adults (60+)

> *"Don't learn the interface. Let the interface learn you."*

**EasyLife** is an adaptive, accessibility-first digital companion platform engineered for older adults (60+) and individuals with limited digital literacy, visual or hearing impairments, cognitive challenges, or language preferences. Instead of forcing elderly users to adapt to complicated technology, EasyLife dynamically adapts the interface, text scaling, speech synthesis, contrast, and assistance level to match the user's preferred way of interacting.

---

## 🔗 Live Links & Repository

- **GitHub Repository**: [https://github.com/karthick67t/easylife](https://github.com/karthick67t/easylife)
- **Local Dev Server**: `http://localhost:5173/`

---

## 🌐 Dynamic Multi-Language Engine Fixed & Fully Verified

EasyLife includes a real-time reactive multi-language translation engine (`LanguageContext.tsx` + `useLanguage()`). Switching the language selector dynamically translates the **entire application** across:
- **English**: Default clean public-service text
- **Tamil (தமிழ்)**: Full Tamil translation (e.g. *"ஈசி லைஃப் (EasyLife)"*, *"மருத்துவ சேவை"*, *"அவசர உதவி"*)
- **Hindi (हिंदी)**: Full Hindi translation (e.g. *"स्वास्थ्य सेवा"*, *"आपातकालीन"*, *"मैं अटक गया हूँ"*)
- **Malayalam (മലയാളം)**: Full Malayalam translation (e.g. *"ആരോഗ്യം"*, *"അടിയന്തിരം"*, *"സഹായം"*)
- **Telugu (తెలుగు)**: Full Telugu translation (e.g. *"వైద్య సేవలు"*, *"అత్యవసరం"*, *"నాకు సహాయం కావాలి"*)

---

## 🎯 Problem Statement & Target Audience

### **The Target Group**: Older Adults Aged 60+
Many older adults face immense friction when interacting with conventional technology:
- **Small typography & poor contrast**: Eye strain from 12px secondary fonts and low-contrast grey text.
- **Technical jargon**: Confusion caused by bureaucratic terms like *"disbursement"*, *"annuity"*, and *"supporting documentation"*.
- **Memory load**: Anxiety from remembering medical schedules, doctor appointment dates, and complex login credentials.
- **Fear of making mistakes**: Paralysis caused by fear of clicking wrong buttons or causing accidental financial loss.
- **Digital scams & fraud**: Vulnerability to urgent phishing SMS, suspicious bank warnings, and OTP theft.
- **Language barriers**: Digital portals defaulting strictly to complex English without local context.

### **The EasyLife Solution**
EasyLife acts as an **adaptive accessibility layer** over everyday digital services:
1. **Light Green + White Public-Service Aesthetic**: Built with Apple-level simplicity (`#F8FAF8` background, `#FFFFFF` cards, `#16834B` primary green, `#CFE8DA` borders).
2. **Adaptive Experience Engine**: Dynamically scales text (18px–26px), enforces high contrast, activates read-aloud speech, and switches language context (**English, Tamil, Hindi, Malayalam, Telugu**).
3. **Plain Language Jargon Transformer ("Explain This")**: Converts official legal/government text into 1-sentence everyday language.
4. **Visual Task Guide ("Show Me")**: Step-by-step interactive workflow guidance.
5. **Message Safety Checker ("Scam Shield")**: Educational assistant detecting urgent keywords, link risks, and OTP safety rules.
6. **Instant Recovery ("I'm Stuck")**: One-tap persistent helper offering plain-language recovery options without judgment.
7. **Daily Timeline ("My Day")**: Memory-friendly vertical schedule organizing appointments, medicines, and check-ins.
8. **Caregiver Privacy Controls ("Trusted Circle")**: Quick family calling (Priya & Arun) while strictly restricting banking access by default.

---

## 🤖 Prompt Engineering Architecture (Prompt Lab)

EasyLife includes a dedicated **Prompt Lab** (`/prompt-lab`) demonstrating our structured AI prompt engineering pipeline to hackathon judges:

```
┌─────────────────────────────────────────────────────────┐
│ 01 — USER CONTEXT                                       │
│ Older adult (60+), Tamil language, Large text (22px),   │
│ Limited digital literacy, Needs step-by-step guidance.  │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│ 02 — STRUCTURED ACCESSIBILITY PROMPT                    │
│ "You are EasyLife, an accessibility-first assistant."   │
│ Rules: Plain language, short active sentences, max 2    │
│ sentences, explain jargon, offer read aloud, never      │
│ ask for OTPs/PINs, require double confirmation.          │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│ 03 — ACCESSIBLE OUTPUT RESULT                           │
│ "You need to show an ID document (Aadhaar or Passport)."│
│ [Read Aloud Audio Transcript + Next Action Trigger]     │
└───────────────────────────┬─────────────────────────────┘
```

---

## 🗺️ 18 Complete Routes Implemented

| Route | Page Name | Key Features & Implementation Details |
| :--- | :--- | :--- |
| `/` | **Home** | Hero section, Adaptive Status Card, Voice Mic interaction, 6 main services, signature feature highlights. |
| `/prompt-lab` | **Prompt Lab** | Structured prompt architecture showcase & live interactive transformer demo for judges. |
| `/problem` | **The Problem** | Visual Before vs After comparison cards for 8 core elderly friction points. |
| `/research` | **User Research** | Senior user mindsets, key quotes, persona archetypes (Lakshmi 68 & Rajan 74). |
| `/demo` | **Guided Demo Mode** | Cinematic 6-step presentation controller for pitch presentations. |
| `/healthcare` | **Healthcare** | Hospital finder, doctor selector, 4-step booking wizard, medicine reminders, Confidence Check. |
| `/money` | **Money & Banking** | Safe payment simulator ("Before You Pay"), pension guide, OTP/PIN safety warnings. |
| `/travel` | **Travel** | Text-first step-by-step transport directions (Bus & Train) without complex maps. |
| `/government` | **Government Services** | Senior schemes, Aadhaar helper, Explain This jargon simplifier. |
| `/emergency` | **Emergency** | One-touch simulated emergency calls (Ambulance 108, Police 100, Fire 101, Family, GPS location). |
| `/family` | **Trusted Circle** | Family contacts (Priya & Arun), instant calls/messages, caregiver permission toggles. |
| `/my-day` | **My Day** | Vertical daily task timeline with medicine checkoff buttons. |
| `/scam-shield` | **Scam Shield** | Interactive SMS/email message safety analyzer checking suspicious texts. |
| `/accessibility` | **Accessibility Settings** | Full live settings dashboard (Text size, High Contrast, Read Aloud, Motion, Language, Reset). |
| `/help` | **Help Center** | Plain-language FAQ, assistant actions, human help options. |
| `/why-we-built` | **Why We Built** | Problem statement, accessibility philosophy, and validation personas. |
| `/design-principles` | **Design Principles** | 7 large numbered cards (01 Simplicity First to 07 Trust & Safety) with real EasyLife examples. |
| `/accessibility-audit` | **Accessibility Audit** | 20-point WCAG & cognitive checklist with **20/20 readiness score**. |

---

## 🛠️ Technology Stack & Libraries

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Custom WCAG Accessibility Tokens
- **Icons**: Lucide React Icons
- **Routing**: React Router v7 (`HashRouter` for zero 404 deployment)
- **Speech Synthesis**: Web Speech API (`window.speechSynthesis`)
- **Speech Recognition**: Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) with simulated fallback
- **State & Persistence**: React Context (`AccessibilityContext`, `LanguageContext`, `AppContext`) + `localStorage`

---

## 📦 Local Setup & Running Instructions

```bash
# 1. Clone the repository
git clone https://github.com/karthick67t/easylife.git

# 2. Navigate to project directory
cd easylife

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to test the application.

---

## 🚀 Production Build & Deployment

```bash
npm run build
```
Generates clean, minified production assets in the `dist/` directory with zero TypeScript or CSS errors.

---

## ♿ 20-Point Accessibility Audit Checklist (WCAG 2.2 AA)

- [x] **1. Readable large text**: Supports 18px, 22px, and 26px font scaling across all components.
- [x] **2. Sufficient contrast**: High contrast mode with black/yellow contrast ratio exceeding WCAG AAA.
- [x] **3. Keyboard navigation**: All interactive elements accessible via Tab and Enter keys.
- [x] **4. Visible focus indicators**: Bright 4px green outline rings applied to active focus targets.
- [x] **5. Screen-reader-friendly labels**: Semantic HTML landmarks (`<header>`, `<main>`, `<nav>`) and `aria-label` attributes.
- [x] **6. Meaningful alt text**: Icons paired with visible descriptive text labels.
- [x] **7. Descriptive buttons**: Action verbs used throughout (no generic "Click Here").
- [x] **8. Large touch targets**: All buttons maintain a minimum target height of 52px.
- [x] **9. No color-only information**: Status indicators use icons, text titles, and borders.
- [x] **10. No flashing content**: Zero flashing elements or high-frequency strobing triggers.
- [x] **11. Reduced motion**: Global reduced-motion toggle disables non-essential animations.
- [x] **12. Clear form labels**: Explicit label associations for all inputs.
- [x] **13. Plain-language errors**: Technical jargon replaced with simple 1-sentence explanations.
- [x] **14. Undo and cancel**: Clear confirmation dialogs before appointments or payment actions.
- [x] **15. Consistent navigation**: Persistent top header and bottom emergency bar across all 18 routes.
- [x] **16. Language selection**: Multi-language switcher supporting English, Tamil, Hindi, Malayalam, and Telugu.
- [x] **17. Read Aloud**: Integrated Web Speech Synthesis and Web Speech Recognition APIs.
- [x] **18. Important action confirmation**: Confidence Check and emergency modal double-confirmation workflows.
- [x] **19. Mobile responsive**: Fully responsive mobile-first grid layout tested down to 320px screens.
- [x] **20. No advanced technical knowledge required**: Includes Explain This, Show Me, and I'm Stuck assistive tools.
