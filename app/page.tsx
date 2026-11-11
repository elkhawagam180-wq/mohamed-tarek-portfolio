"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "201010474569";

const content = {
  ar: {
    nav: ["الرئيسية", "عني", "الخدمات", "الأعمال", "تواصل"],
    eyebrow: "مطور حلول رقمية · مستقل",
    intro: "أحوّل الأفكار إلى",
    highlight: "تجارب رقمية ذكية.",
    description:
      "أنا محمد طارق. أبني حلولاً رقمية تجمع بين الذكاء الاصطناعي وتطوير الويب والأتمتة، مع تركيز على تجربة استخدام واضحة ونتيجة عملية.",
    primary: "ابدأ مشروعك",
    secondary: "اكتشف خدماتي",
    availability: "متاح للتعاون على مشاريع جديدة",
    scroll: "اكتشف المزيد",
    aboutKicker: "01 / نبذة عني",
    aboutTitle: "أفكر في الحل قبل أن أكتب سطراً من الكود.",
    aboutText:
      "كل مشروع يبدأ بفهم المشكلة والهدف الحقيقي. بعد ذلك أختار التقنية المناسبة، وأحوّل الفكرة إلى تجربة سهلة الاستخدام وقابلة للتطوير.",
    principles: ["فهم المشكلة", "اختيار التقنية", "تنفيذ قابل للتطوير"],
    servicesKicker: "02 / ماذا أقدم",
    servicesTitle: "أدوات رقمية تخدم أهدافك.",
    servicesIntro:
      "من فكرة أولية إلى منتج جاهز للاستخدام — أساعدك في بناء الحل المناسب.",
    services: [
      ["01", "حلول الذكاء الاصطناعي", "تطبيق تقنيات AI لتحليل البيانات، تحسين العمليات، وبناء تجارب أكثر ذكاءً."],
      ["02", "تطوير مواقع الويب", "مواقع سريعة ومتجاوبة تجمع بين التصميم المميز والأداء وتجربة المستخدم."],
      ["03", "الأتمتة وربط الأنظمة", "ربط الأدوات والخدمات وتحويل المهام المتكررة إلى تدفقات عمل تلقائية."],
      ["04", "روبوتات المحادثة", "مساعدات ذكية تجيب عن الأسئلة وتدعم العملاء اعتماداً على بيانات المشروع."],
      ["05", "تطبيقات الموبايل", "واجهات وتجارب تطبيقات عملية تركّز على احتياجات المستخدم وسهولة الاستخدام."],
      ["06", "حلول تقنية مخصصة", "تحليل احتياجك وتصميم حل مناسب لطبيعة عملك وأهدافك."],
    ],
    workKicker: "03 / أعمال مختارة",
    workTitle: "الجودة تظهر في التفاصيل.",
    workIntro:
      "هنا سنعرض مشاريع منفّذة فعلياً، مع توضيح التحدي والحل والتقنيات المستخدمة.",
    workBadge: "قريباً",
    workPlaceholder: "مساحة لمشروعك القادم",
    workNote:
      "لن نضيف أي مشروع أو نتيجة غير حقيقية. أرسل لي أعمالك لنحوّلها إلى دراسات حالة احترافية.",
    processKicker: "04 / طريقة العمل",
    processTitle: "خطوات واضحة. من البداية للنهاية.",
    steps: [
      ["01", "نستكشف", "نفهم فكرتك، جمهورك، والمشكلة التي تريد حلها."],
      ["02", "نخطط", "نحدد النطاق والأولويات والتقنيات المناسبة."],
      ["03", "نبني", "ننفذ الحل ونراجع التفاصيل معك خطوة بخطوة."],
      ["04", "نطلق", "نسلّم تجربة جاهزة ونساعدك على الانطلاق."],
    ],
    contactKicker: "05 / لنتحدث",
    contactTitle: "عندك فكرة تستحق التنفيذ؟",
    contactText:
      "احكي لي عنها. خلينا نحدد أفضل طريقة لتحويلها إلى مشروع حقيقي.",
    contactButton: "إرسال عبر واتساب",
    formName: "الاسم",
    formNamePlaceholder: "اكتب اسمك",
    formContact: "رقم الهاتف أو البريد الإلكتروني",
    formContactPlaceholder: "وسيلة التواصل المناسبة",
    formService: "الخدمة المطلوبة",
    formServicePlaceholder: "اختر الخدمة",
    formServices: ["حلول الذكاء الاصطناعي", "تطوير مواقع الويب", "الأتمتة وربط الأنظمة", "روبوتات المحادثة", "تطبيقات الموبايل", "حلول تقنية مخصصة", "خدمة أخرى"],
    formDetails: "تفاصيل المشروع",
    formDetailsPlaceholder: "احكي لي عن فكرتك واحتياجاتك...",
    formHint: "بعد الضغط، هتفتح محادثة واتساب برسالتك جاهزة للمراجعة والإرسال.",
    formRequired: "من فضلك املأ البيانات المطلوبة.",
    footer: "صُنع باهتمام بواسطة محمد طارق.",
    backTop: "العودة للأعلى",
    language: "English",
    menu: "القائمة",
    close: "إغلاق",
  },

  en: {
    nav: ["Home", "About", "Services", "Work", "Contact"],
    eyebrow: "Digital solutions developer · Freelancer",
    intro: "I turn ideas into",
    highlight: "intelligent digital experiences.",
    description:
      "I'm Mohamed Tarek. I build digital solutions across AI, web development, and automation, with a focus on clear experiences and practical outcomes.",
    primary: "Start a project",
    secondary: "Explore services",
    availability: "Available for new projects",
    scroll: "Discover more",
    aboutKicker: "01 / ABOUT",
    aboutTitle: "I think about the solution before writing a line of code.",
    aboutText:
      "Every project starts with understanding the real problem and goal. Then I choose the right technology and turn the idea into an intuitive, scalable experience.",
    principles: [
      "Understand the problem",
      "Choose the right tools",
      "Build to scale",
    ],
    servicesKicker: "02 / WHAT I DO",
    servicesTitle: "Digital tools built around your goals.",
    servicesIntro:
      "From an early idea to a product ready to use — I help build the right solution.",
    services: [
      ["01", "AI Solutions", "Apply AI to data analysis, process improvement, and smarter digital experiences."],
      ["02", "Web Development", "Fast, responsive websites combining distinctive design, performance, and usability."],
      ["03", "Automation & Integrations", "Connect tools and turn repetitive tasks into reliable automated workflows."],
      ["04", "AI Chatbots", "Helpful assistants that answer questions and support customers using your business data."],
      ["05", "Mobile Applications", "Practical app experiences focused on real user needs and usability."],
      ["06", "Custom Solutions", "Understand your needs and design a technical solution around your goals."],
    ],
    workKicker: "03 / SELECTED WORK",
    workTitle: "Good work lives in the details.",
    workIntro:
      "This space will showcase real projects, including the challenge, solution, and tools used.",
    workBadge: "Coming soon",
    workPlaceholder: "Room for the next great project",
    workNote:
      "No invented projects or results. Share your work and we'll turn it into polished case studies.",
    processKicker: "04 / HOW I WORK",
    processTitle: "A clear process, from start to finish.",
    steps: [
      ["01", "Discover", "Understand your idea, audience, and the problem to solve."],
      ["02", "Plan", "Define the scope, priorities, and the right technology."],
      ["03", "Build", "Develop the solution and review the details together."],
      ["04", "Launch", "Deliver a ready-to-use experience and help you get started."],
    ],
    contactKicker: "05 / LET'S TALK",
    contactTitle: "Have an idea worth building?",
    contactText:
      "Tell me about it. Let's find the right way to turn it into a real project.",
    contactButton: "Send via WhatsApp",
    formName: "Your name",
    formNamePlaceholder: "Enter your name",
    formContact: "Phone number or email",
    formContactPlaceholder: "Your preferred contact method",
    formService: "Service needed",
    formServicePlaceholder: "Choose a service",
    formServices: ["AI Solutions", "Web Development", "Automation & Integrations", "AI Chatbots", "Mobile Applications", "Custom Solutions", "Other"],
    formDetails: "Project details",
    formDetailsPlaceholder: "Tell me about your idea and what you need...",
    formHint: "WhatsApp will open with your message ready for you to review and send.",
    formRequired: "Please complete the required fields.",
    footer: "Made with care by Mohamed Tarek.",
    backTop: "Back to top",
    language: "العربية",
    menu: "Menu",
    close: "Close",
  },
};

export default function Home() {
  const [dark, setDark] = useState(true);
  const [english, setEnglish] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = english ? content.en : content.ar;

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!name || !contact || !service || !details) {
      alert(t.formRequired);
      return;
    }

    const message = english
      ? `Hello Mohamed, I'm ${name}.\\nMy contact: ${contact}.\\nService needed: ${service}.\\nProject details: ${details}`
      : `أهلاً محمد، أنا ${name}.\\nوسيلة التواصل: ${contact}.\\nالخدمة المطلوبة: ${service}.\\nتفاصيل المشروع: ${details}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    event.currentTarget.reset();
  }

  const bg = dark ? "#0b100d" : "#f5f5ef";
  const surface = dark ? "#111914" : "#ffffff";
  const surfaceAlt = dark ? "#151e18" : "#e9ede4";
  const text = dark ? "#f2f4ed" : "#17231b";
  const muted = dark ? "#a1ada3" : "#657168";
  const border = dark
    ? "rgba(235,245,235,.12)"
    : "rgba(23,35,27,.14)";
  const lime = "#b6d77a";

  const navIds = ["home", "about", "services", "work", "contact"]; return (
    <main
      dir={english ? "ltr" : "rtl"}
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: english
          ? "'Manrope', sans-serif"
          : "'Alexandria', sans-serif",
      }}
      className="min-h-screen overflow-hidden transition-colors duration-300"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        html { scroll-behavior: smooth; }

        ::selection {
          background: #b6d77a;
          color: #101810;
        }

        .site-link {
          transition: color .25s ease, opacity .25s ease;
        }

        .site-link:hover {
          color: #b6d77a;
        }

        .service-row {
          transition: background .25s ease, padding .25s ease;
        }

        .service-row:hover {
          background: rgba(182,215,122,.045);
        }

        .outline-button {
          transition: border-color .25s ease, background .25s ease, transform .25s ease;
        }

        .outline-button:hover {
          border-color: #b6d77a !important;
          transform: translateY(-2px);
        }

        .primary-button {
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(182,215,122,.18);
          background: #c6e58b !important;
        }

        .orb {
          animation: float 9s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% {
            transform: translate3d(0,0,0) rotate(0deg);
          }
          50% {
            transform: translate3d(0,-13px,0) rotate(4deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          borderColor: border,
          backgroundColor: dark
            ? "rgba(11,16,13,.88)"
            : "rgba(245,245,239,.9)",
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#home"
            aria-label="Mohamed Tarek home"
            className="text-xl font-extrabold tracking-[-.09em]"
          >
            MT<span style={{ color: lime }}>.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {t.nav.map((item, i) => (
              <a
                key={item}
                href={`#${navIds[i]}`}
                className="site-link text-xs font-medium"
                style={{ color: muted }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((v) => !v)}
              aria-label="Switch theme"
              className="outline-button grid h-9 w-9 place-items-center rounded-full border text-base"
              style={{ borderColor: border, color: text }}
            >
              {dark ? "☼" : "☾"}
            </button>

            <button
              type="button"
              onClick={() => setEnglish((v) => !v)}
              className="outline-button rounded-full border px-3 py-2 text-[11px] font-semibold"
              style={{ borderColor: border, color: text }}
            >
              {t.language}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="outline-button rounded-full border px-3 py-2 text-xs md:hidden"
              style={{ borderColor: border, color: text }}
              aria-expanded={menuOpen}
            >
              {menuOpen ? t.close : t.menu}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="grid gap-1 border-t px-5 py-3 md:hidden"
            style={{ borderColor: border }}
          >
            {t.nav.map((item, i) => (
              <a
                key={item}
                href={`#${navIds[i]}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm"
                style={{ color: text }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[690px] max-w-[1440px] items-center gap-12 px-5 py-24 md:min-h-[780px] md:grid-cols-[1.15fr_.85fr] md:px-10 md:py-32"
      >
        <div
          className="pointer-events-none absolute -top-32 start-[-10rem] h-[34rem] w-[34rem] rounded-full blur-[120px]"
          style={{ background: "rgba(143,184,91,.10)" }}
        />

        <div className="relative z-10">
          <div
            className="mb-8 flex items-center gap-3 text-xs font-medium tracking-wide"
            style={{ color: muted }}
          >
            <span className="h-px w-10" style={{ background: lime }} />
            {t.eyebrow}
          </div>

          <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.7rem)] font-semibold leading-[1.08] tracking-[-.065em]">
            {t.intro}
            <br />
            <span style={{ color: lime }}>{t.highlight}</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: muted }}
          >
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="primary-button rounded-full px-7 py-4 text-sm font-bold"
              style={{ background: lime, color: "#172014" }}
            >
              {t.primary} <span className="ms-2">↗</span>
            </a>

            <a
              href="#services"
              className="outline-button rounded-full border px-7 py-4 text-sm font-semibold"
              style={{ borderColor: border, color: text }}
            >
              {t.secondary}
            </a>
          </div>

          <div
            className="mt-16 flex items-center gap-3 text-xs"
            style={{ color: muted }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
                style={{ background: lime }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: lime }}
              />
            </span>
            {t.availability}
          </div>
        </div>

        {/* ABSTRACT VISUAL */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center">
          <div
            className="absolute inset-[7%] rounded-full border"
            style={{ borderColor: border }}
          />

          <div
            className="absolute inset-[18%] rounded-full border"
            style={{
              borderColor: border,
              transform: "rotate(-25deg) scaleX(.78)",
            }}
          />

          <div
            className="orb absolute inset-[24%] rounded-[36%] border"
            style={{
              borderColor: "rgba(182,215,122,.35)",
              background:
                "radial-gradient(circle at 35% 28%, rgba(182,215,122,.24), rgba(31,54,37,.12) 48%, transparent 72%)",
              boxShadow: "0 0 100px rgba(182,215,122,.08)",
              transform: "rotate(35deg)",
            }}
          />

          <div
            className="absolute h-[34%] w-[34%] rounded-full blur-2xl"
            style={{ background: "rgba(182,215,122,.18)" }}
          />

          <div
            className="relative grid h-28 w-28 place-items-center rounded-[2rem] border text-4xl font-black tracking-[-.1em] shadow-2xl md:h-36 md:w-36 md:text-5xl"
            style={{
              borderColor: "rgba(182,215,122,.45)",
              background: surface,
              color: lime,
              boxShadow: "0 20px 90px rgba(0,0,0,.25)",
            }}
          >
            MT<span className="text-2xl">.</span>
          </div>

          <span
            className="absolute end-[8%] top-[20%] h-3 w-3 rounded-full"
            style={{
              background: lime,
              boxShadow: "0 0 25px rgba(182,215,122,.7)",
            }}
          />

          <span
            className="absolute bottom-[17%] start-[13%] h-2 w-2 rounded-full"
            style={{ background: lime }}
          />

          <span
            className="absolute bottom-[12%] end-[22%] rounded-full border px-4 py-2 text-[10px] tracking-[.2em]"
            style={{ borderColor: border, color: muted }}
          >
            AI · WEB · AUTOMATION
          </span>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 start-5 hidden items-center gap-3 text-[10px] tracking-[.2em] md:flex"
          style={{ color: muted }}
        >
          <span className="h-px w-8" style={{ background: lime }} />
          {t.scroll}
        </a>
      </section>
      {/* ABOUT */}
      <section
        id="about"
        className="border-y"
        style={{ borderColor: border, background: surfaceAlt }}
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-32">
          <p
            className="text-xs font-semibold tracking-[.16em]"
            style={{ color: lime }}
          >
            {t.aboutKicker}
          </p>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-.045em] md:text-6xl">
              {t.aboutTitle}
            </h2>

            <p
              className="mt-8 max-w-2xl text-base leading-8"
              style={{ color: muted }}
            >
              {t.aboutText}
            </p>

            <div
              className="mt-12 grid gap-4 border-t pt-6 sm:grid-cols-3"
              style={{ borderColor: border }}
            >
              {t.principles.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span className="text-xs" style={{ color: lime }}>
                    0{i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p
              className="mb-5 text-xs font-semibold tracking-[.16em]"
              style={{ color: lime }}
            >
              {t.servicesKicker}
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-.045em] md:text-6xl">
              {t.servicesTitle}
            </h2>
          </div>

          <p
            className="max-w-md text-sm leading-7"
            style={{ color: muted }}
          >
            {t.servicesIntro}
          </p>
        </div>

        <div className="border-t" style={{ borderColor: border }}>
          {t.services.map(([number, title, description]) => (
            <article
              key={number}
              className="service-row grid gap-4 border-b py-7 md:grid-cols-[5rem_1fr_1fr_auto] md:items-center md:gap-8 md:py-9"
              style={{ borderColor: border }}
            >
              <span className="text-xs" style={{ color: lime }}>
                {number}
              </span>

              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {title}
              </h3>

              <p
                className="max-w-xl text-sm leading-7"
                style={{ color: muted }}
              >
                {description}
              </p>

              <span
                className="hidden text-xl md:block"
                style={{ color: lime }}
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section
        id="work"
        className="border-y"
        style={{ borderColor: border, background: surfaceAlt }}
      >
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <p
            className="mb-5 text-xs font-semibold tracking-[.16em]"
            style={{ color: lime }}
          >
            {english ? "03 / SELECTED PROJECTS" : "03 / مشاريع مختارة"}
          </p>

          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-.045em] md:text-6xl">
              {english
                ? "Ideas turned into real digital products."
                : "من الفكرة إلى تجربة رقمية متكاملة."}
            </h2>

            <p
              className="max-w-md text-sm leading-7"
              style={{ color: muted }}
            >
              {english
                ? "A selection of digital products and solutions I have built, spanning education, AI assistants, and web experiences."
                : "مجموعة من المشاريع الرقمية التي قمت بتنفيذها، بين منصات التعليم والذكاء الاصطناعي وتجارب الويب."}
            </p>
          </div>

          {[
            {
              number: "01",
              name: "ALLAMNA",
              subtitle: english
                ? "Smart Learning Platform"
                : "منصة تعليم رقمي ذكية",
              description: english
                ? "An integrated digital learning platform bringing students, teachers, parents, and institutions into one experience. It presents learning content and educational services through a dedicated web platform."
                : "منصة تعليمية رقمية تجمع الطلاب والمدرسين وأولياء الأمور والمؤسسات في تجربة واحدة، وتقدم المحتوى والخدمات التعليمية من خلال منصة ويب مخصصة.",
              tags: ["EdTech", "Web Platform", "AI"],
              url: "https://allamna-dxkj.whacka.app/",
              image: "/projects/allamna.webp",
              mark: "A",
              visual:
                "radial-gradient(circle at 70% 25%, rgba(182,215,122,.22), transparent 35%), linear-gradient(135deg,#14251c,#0b100d)",
            },
            {
              number: "02",
              name: "Nursery Smart Assistant",
              subtitle: english
                ? "AI Telegram Assistant"
                : "مساعد ذكي للحضانات",
              description: english
                ? "A Telegram chatbot designed for nursery-related communication and assistance, giving users a conversational way to interact with the service."
                : "روبوت محادثة عبر تيليجرام مخصص لمجال الحضانات، يوفّر طريقة سهلة للتفاعل وطلب المساعدة والمعلومات من خلال المحادثة.",
              tags: ["Telegram Bot", "AI Assistant", "Automation"],
              url: "https://t.me/NurserySmartAssistantBot",
              image: "/projects/nursery.webp",
              mark: "N",
              visual:
                "radial-gradient(circle at 25% 35%, rgba(90,170,150,.25), transparent 35%), linear-gradient(135deg,#102923,#0b100d)",
            },
            {
              number: "03",
              name: "NextJeel",
              subtitle: english
                ? "Family Guidance & Development"
                : "منصة التوجيه الأسري والتطوير",
              description: english
                ? "A website presenting family guidance and personal development services, organizing information about the initiative and its offerings in a clear digital experience."
                : "موقع إلكتروني لعرض خدمات التوجيه الأسري والتطوير، وتنظيم المعلومات الخاصة بالمبادرة وخدماتها في تجربة رقمية واضحة وسهلة التصفح.",
              tags: ["Web Development", "Digital Experience"],
              url: "https://nextjeel.com/",
              image: "/projects/nextjeel.webp",
              mark: "NJ",
              visual:
                "radial-gradient(circle at 75% 30%, rgba(190,160,110,.22), transparent 35%), linear-gradient(135deg,#292319,#0b100d)",
            },
            {
              number: "04",
              name: "ArtEntry",
              subtitle: english
                ? "Creative Digital Experience"
                : "تجربة رقمية إبداعية",
              description: english
                ? "A dedicated web project with its own creative identity and online presence, built to present the ArtEntry brand through a focused digital experience."
                : "مشروع ويب بهوية إبداعية وحضور رقمي مستقل، تم تنفيذه لتقديم ArtEntry من خلال تجربة إلكترونية مخصصة.",
              tags: ["Web Development", "Brand Experience"],
              url: "https://artentry.co/",
              image: "/projects/artentry.webp",
              mark: "AE",
              visual:
                "radial-gradient(circle at 30% 30%, rgba(190,130,170,.22), transparent 35%), linear-gradient(135deg,#291b29,#0b100d)",
            },
            {
              number: "05",
              name: "Egypt Gateway",
              subtitle: english
                ? "Digital Web Platform"
                : "بوابة رقمية",
              description: english
                ? "An independent web project developed under the Egypt Gateway identity, providing a dedicated online presence for the platform."
                : "مشروع ويب مستقل بهوية Egypt Gateway، تم تنفيذه لتقديم البوابة من خلال حضور إلكتروني وتجربة رقمية مخصصة.",
              tags: ["Web Development", "Digital Platform"],
              url: "https://egypt-gateway.com/",
              image: "/projects/egypt-gateway.webp",
              mark: "EG",
              visual:
                "radial-gradient(circle at 70% 25%, rgba(182,215,122,.20), transparent 35%), linear-gradient(135deg,#1b2920,#0b100d)",
            },
          ].map((project) => (
            <article
              key={project.number}
              className="group mb-6 grid overflow-hidden border md:grid-cols-[1fr_1fr]"
              style={{ borderColor: border, background: surface }}
            >
              <div className="relative min-h-[230px] overflow-hidden bg-black md:min-h-[330px]">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute bottom-5 start-5 text-xs tracking-[.2em] text-white/80">
                  PROJECT / {project.number}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs" style={{ color: lime }}>
                    {project.number} / 05
                  </span>

                  <span
                    className="rounded-full border px-3 py-1 text-[10px]"
                    style={{ borderColor: border, color: muted }}
                  >
                    {english ? "Built by me" : "تنفيذ وتطوير"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm font-medium" style={{ color: lime }}>
                  {project.subtitle}
                </p>

                <p className="mt-6 text-sm leading-8" style={{ color: muted }}>
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-2 text-[10px]"
                      style={{ borderColor: border, color: muted }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button mt-8 inline-flex w-fit items-center gap-3 rounded-full px-6 py-3 text-xs font-bold"
                  style={{ background: lime, color: "#172014" }}
                >
                  {english ? "Visit project" : "زيارة المشروع"} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* PROCESS */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <p
          className="mb-5 text-xs font-semibold tracking-[.16em]"
          style={{ color: lime }}
        >
          {t.processKicker}
        </p>

        <h2 className="mb-14 max-w-3xl text-3xl font-semibold leading-tight tracking-[-.045em] md:text-6xl">
          {t.processTitle}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map(([number, title, description]) => (
            <article
              key={number}
              className="border-t pt-6"
              style={{ borderColor: border }}
            >
              <span className="text-xs" style={{ color: lime }}>
                {number}
              </span>

              <h3 className="mt-7 text-xl font-semibold">{title}</h3>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: muted }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t"
        style={{ borderColor: border, background: surfaceAlt }}
      >
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <p
            className="mb-6 text-xs font-semibold tracking-[.16em]"
            style={{ color: lime }}
          >
            {t.contactKicker}
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.15] tracking-[-.055em] md:text-7xl">
            {t.contactTitle}
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <p
              className="max-w-xl text-base leading-8"
              style={{ color: muted }}
            >
              {t.contactText}
            </p>

            <form
              onSubmit={handleContactSubmit}
              className="grid gap-5 rounded-2xl border p-5 sm:p-8"
              style={{ borderColor: border, background: surface }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span>{t.formName}</span>
                  <input
                    name="name"
                    required
                    placeholder={t.formNamePlaceholder}
                    className="min-w-0 rounded-xl border px-4 py-3 outline-none transition focus:border-[#b6d77a]"
                    style={{ borderColor: border, background: bg, color: text }}
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span>{t.formContact}</span>
                  <input
                    name="contact"
                    required
                    placeholder={t.formContactPlaceholder}
                    className="min-w-0 rounded-xl border px-4 py-3 outline-none transition focus:border-[#b6d77a]"
                    style={{ borderColor: border, background: bg, color: text }}
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm">
                <span>{t.formService}</span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#b6d77a]"
                  style={{ borderColor: border, background: bg, color: text }}
                >
                  <option value="" disabled>
                    {t.formServicePlaceholder}
                  </option>

                  {t.formServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                <span>{t.formDetails}</span>
                <textarea
                  name="details"
                  required
                  rows={5}
                  placeholder={t.formDetailsPlaceholder}
                  className="w-full resize-y rounded-xl border px-4 py-3 leading-7 outline-none transition focus:border-[#b6d77a]"
                  style={{ borderColor: border, background: bg, color: text }}
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6" style={{ color: muted }}>
                  {t.formHint}
                </p>

                <button
                  type="submit"
                  className="primary-button inline-flex w-fit items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold"
                  style={{ background: lime, color: "#172014" }}
                >
                  {t.contactButton} <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t px-5 py-7 md:px-10"
        style={{ borderColor: border }}
      >
        <div
          className="mx-auto flex max-w-[1440px] flex-col gap-4 text-xs md:flex-row md:items-center md:justify-between"
          style={{ color: muted }}
        >
          <span>© 2026 Mohamed Tarek</span>
          <span>{t.footer}</span>

          <a href="#home" className="site-link">
            {t.backTop} ↑
          </a>
        </div>
      </footer>
    </main>
  );
}