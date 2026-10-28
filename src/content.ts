export interface Project {
  id: string;
  label: string;
  title: string;
  tagline: string;
  intro: string;
  bullets: readonly string[];
  outcomeLabel: string;
  outcome: string;
  tracks: readonly string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export interface SkillHighlight {
  title: string;
  body: string;
}

export const content = {
  name: "Anisha Karmakar",
  description:
    "Anisha Karmakar, full stack engineer who loves building clear, accessible, human-centered web experiences with React and TypeScript.",
  skipLink: "Skip to content",
  navigationLabel: "Primary navigation",
  menuOpenLabel: "Open navigation menu",
  menuCloseLabel: "Close navigation menu",
  theme: {
    lightLabel: "Light theme",
    darkLabel: "Dark theme",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Values", href: "#values" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Curiosities", href: "#curiosities" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    headline: "Hi, I am Anisha",
    subheadline: "I build thoughtful, human-feeling software for the web.",
    supportingLine:
      "Full stack engineer with a soft spot for the front end, based in the San Francisco Bay Area.",
    experienceLine: "7 years of building and shipping software, from the automotive industry to enterprise security.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
  },
  about: {
    label: "About me",
    paragraphs: [
      "I am a software engineer who fell for the place where code meets people: the moment a screen just makes sense to whoever is using it.",
      "I was born and raised in Calcutta, a city that runs on stories, music, and conversation. Growing up Bengali meant growing up around music, dance, and storytelling, and around the people who live for them. Bengal’s long lineage of poets, painters, and thinkers is in my bones. It’s where my creativity comes from, and it’s why I still believe the things we build should carry a little soul.",
      "I started out studying electronics and communication, learning how signals travel and how systems talk to each other. That curiosity never left. It just found a new home in the browser. Along the way I’ve worked across the stack and spent time in the world of data, where I learned how much good software depends on trust, clarity, and care for the information it handles.",
      "Then life rolled the dice and one fine morning, I landed in San Francisco Bay Area, without a single clue of what's ahead. It was equal parts terrifying and thrilling, and it taught me that starting from zero is just another way of building something new.",
      "I am the happiest building websites, applications & shaping interfaces that feel calm, fast, and obvious, and wiring them to backends that quietly do their job. I like understanding a problem all the way down before I touch the keyboard, and I like it even more when the result is something people don’t have to think about."
    ],
    portraitAlt: "Portrait of Anisha Karmakar",
  },
  values: {
    label: "Values",
    title: "What I care about",
    items: [
      {
        title: "Clarity over cleverness",
        body: "I'd rather write code that's easy to read than code that's easy to admire. The next person to open the file might be me, six months from now.",
      },
      {
        title: "Interfaces that respect people",
        body: "Accessible, responsive, and kind to every device and every user. Good design is mostly about removing friction.",
      },
      {
        title: "Getting the foundations right",
        body: "Clean data, sensible structure, and tests I can trust make everything built on top feel effortless.",
      },
      {
        title: "Working well with others",
        body: "The best software I've seen came from teams that asked good questions, shared context freely, and made each other better.",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "What I bring to the table",
    intro: "I can build the product and I can steer the project: from the first line of code to the final launch, I care about getting things made well and delivered calmly.",
    tabs: [
      {
        id: "build",
        label: "Build",
        groups: [
          { title: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
          { title: "Frontend", skills: ["React", "React Hooks", "Context API", "Redux", "Next.js", "Web Components", "Responsive Web Design", "Material UI", "Tailwind CSS", "Webpack", "Vite"] },
          { title: "Backend and APIs", skills: ["Node.js", "Python", "REST APIs", "API Design", "API Integration", "API Testing", "Microservices", "Asynchronous Processing", "Distributed Systems"] },
          { title: "Cloud and security", skills: ["AWS", "Azure", "GCP", "Cloudflare", "Serverless Workflows", "OAuth 2.0", "JWT", "Identity and Access Management", "Secure API Integration"] },
          { title: "Testing and DevOps", skills: ["Git", "Jest", "React Testing Library", "Unit / Integration / Regression Testing", "Jenkins", "CI/CD", "Build and Release Processes", "Monitoring and Logging"] },
          { title: "Engineering craft", skills: ["System Design", "Software Architecture", "Object-Oriented Design", "Performance Optimization", "Reliability Engineering", "Debugging", "Root-Cause Analysis", "Incident Management", "Agile/Scrum", "Code Reviews"] },
          { title: "AI integration", skills: ["LLM APIs", "AI/ML API Integration", "Streaming Responses", "Asynchronous AI Workflows", "AI Agents"] },
        ] satisfies readonly SkillGroup[],
      },
      {
        id: "deliver",
        label: "Deliver",
        groups: [
          { title: "Program delivery and governance", skills: ["Technical Program and Project Management", "End-to-End Program Planning", "Requirements through Launch", "Milestone and Dependency Management", "RAID Framework", "Risk Mitigation and Escalation", "Change Management", "Acceptance Criteria", "Scope and Schedule Management", "Executive Status Reporting"] },
          { title: "Stakeholder leadership", skills: ["Cross-Functional Leadership", "Senior Stakeholder Communication", "Release Coordination", "Incident Management", "Operational Readiness", "Post-Delivery Follow-Up", "Time-to-Market Improvement"] },
          { title: "Cloud, platform and infrastructure", skills: ["AWS", "Microsoft Azure", "GCP", "Cloudflare", "Serverless and Event-Driven Systems", "Microservices", "Distributed Systems", "REST APIs", "API Testing"] },
          { title: "Identity and security", skills: ["IAM", "Active Directory", "Azure JIT", "Workload Identity Federation", "HashiCorp Vault", "Privileged Access Management (PAM)", "API Gateway", "AWS Lambda", "EventBridge", "SNS", "DynamoDB"] },
          { title: "Analytics, AI and delivery methods", skills: ["AI Agents", "LLM API Integration", "KPI and Metrics Reporting", "KPI Dashboards", "Operational Analytics", "Bottleneck Analysis", "Agile (sprint planning, backlog and dependency management)", "Python", "VBA", "ReactJS"] },
        ] satisfies readonly SkillGroup[],
      },
    ],
    highlights: [
      { title: "From idea to launch", body: "I can take a project from the first requirement all the way to release, writing the code and keeping the plan on track." },
      { title: "Engineers and stakeholders, both fluent", body: "I translate between technical teams and decision-makers so everyone stays aligned." },
      { title: "Secure and reliable by default", body: "Identity, access, and reliability are part of how I build, not an afterthought." },
      { title: "AI that actually ships", body: "I connect language models and AI agents to real workflows, with streaming, async processing, and clear success criteria." },
    ] satisfies readonly SkillHighlight[],
  },
  curiosities: {
    label: "Curiosities",
    title: "What I am curious about",
    items: [
      "How small details in an interface change the way something feels to use",
      "The long road from raw data to something a person can actually understand",
      "Performance: why some pages feel instant and others feel heavy, and what it takes to close that gap",
      "How AI is reshaping the way we build, and how to use it as a thoughtful collaborator rather than a shortcut",
      "The hardware-to-software stack I started in, and how all those layers still shape what we ship today",
    ],
  },
  howIWork: {
    label: "How I work",
    title: "Start with why. Make something real. Keep refining.",
    body: "I start by asking why before how. I like to break a big problem into small, honest steps, build something real early, and keep refining. I am comfortable owning a feature from idea to production, and just as comfortable stepping back to ask whether we should build it at all. I am a steady communicator, a patient debugger, and a lifelong learner who still gets a small thrill when something finally works.",
  },
  beyondTheCode: {
    label: "A little more",
    title: "Beyond the code",
    body: "Away from the keyboard, I’m a creative at heart. I draw, I cook, I read far too many books, and I’ll happily get lost in my own little world for an afternoon. I’m also passionate about photography: I love noticing how light, color, and framing can turn an ordinary moment into something worth keeping. I call myself a delusional optimist. I think you have to be a little bit insane to believe things will work out for you, and I’d rather be that kind of insane. It’s the same energy I bring to everything I make.",
  },
  whyIBuild: {
    title: "Why I build",
    body: "I code because it’s the closest thing I know to magic: you start with an idea only you can see, and with enough patience and curiosity it becomes something real that other people can use. The freedom to create something new and put my own vision into the world is what keeps me in this field.",
  },
  projects: {
    label: "Projects",
    title: "Things I've built",
    items: [
      {
        id: "project-security",
        label: "PROJECT ONE · ABOUT 4 YEARS",
        title: "Securing access, end to end",
        tagline: "An internal security platform I took from a blank page to production, and then looked after.",
        intro: "I owned this one from the first conversation to the last incident.",
        bullets: [
          "Analyzed business needs and turned them into clear requirements, acceptance criteria and technical specifications.",
          "Designed the architecture, the API contracts, and the identity and access model.",
          "Built the front end, the secure APIs and the event-driven cloud services behind it.",
          "Tested it thoroughly with automated unit, integration and regression suites in the CI/CD pipeline.",
          "Launched it, coordinating readiness and releases across engineering, security and operations.",
          "Handled incident management and root-cause analysis after launch.",
          "Built a single incident dashboard for leadership, automated manual workflows, and created AI agents to take routine triage off people's plates.",
        ],
        outcomeLabel: "Outcome",
        outcome: "Access that once took days now takes minutes, security incidents went down, and recovery got faster when things broke.",
        tracks: ["Build", "Deliver"],
      },
      {
        id: "project-automotive",
        label: "PROJECT TWO · ABOUT 3 YEARS",
        title: "Quarterly clarity for the automotive world",
        tagline: "Responsive web applications and dashboards that keep an industry's quarterly data easy to read.",
        intro: "Enterprise automotive teams needed their quarterly data organized, current and readable on any screen.",
        bullets: [
          "Built responsive web applications and dashboards for enterprise automotive clients.",
          "Kept quarterly data organized and up to date so reporting stayed consistent.",
          "Created reusable UI components and asynchronous API workflows so large amounts of data loaded smoothly.",
          "Automated recurring reports and repetitive workflow steps with scripts.",
          "Kept quality high with regression testing, cross-browser debugging and code reviews.",
        ],
        outcomeLabel: "Outcome",
        outcome: "Reports that were slow and manual became quick and repeatable, and teams spent their time on decisions instead of copy and paste.",
        tracks: ["Build"],
      },
    ] satisfies Project[],
  },
  openToWork: {
    label: "What I am looking for",
    title: "Open to the right next chapter.",
    body: "I am open to full-time software engineering roles in the Bay Area, especially on product teams that care about craft, welcome curiosity, and build things people actually use. If that sounds like your team, I'd love to talk.",
  },
  contact: {
    label: "Contact",
    title: "Get in touch",
    email: "ani24work@gmail.com",
    linkedin: "https://www.linkedin.com/in/anikar02/",
    github: "https://github.com/anisha-coded",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    prompt: "Have an idea you can’t stop thinking about? Let’s build it together.",
    sayHello: "Say hello →",
    note: "Made with love, between Calcutta and the Bay.",
  },
} as const;
