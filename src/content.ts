export interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  link: string;
}

export interface NavigationItem {
  label: string;
  href: string;
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
    { label: "Curiosities", href: "#curiosities" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    headline: "Hi, I'm Anisha.",
    subheadline: "I build thoughtful, human-feeling software for the web.",
    supportingLine:
      "Full stack engineer with a soft spot for the front end, based in the San Francisco Bay Area.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
  },
  about: {
    label: "About me",
    paragraphs: [
      "I am a software engineer who fell for the place where code meets people: the moment a screen just makes sense to whoever is using it.",
      "I was born and raised in Calcutta, a city that runs on stories, music, and conversation. Growing up Bengali meant growing up around music, dance, and storytelling, and around the people who live for them. Bengal’s long lineage of poets, painters, and thinkers is in my bones. It’s where my creativity comes from, and it’s why I still believe the things we build should carry a little soul.",
      "I started out studying electronics and communication, learning how signals travel and how systems talk to each other. That curiosity never left. It just found a new home in the browser. Along the way I’ve worked across the stack and spent time in the world of data, where I learned how much good software depends on trust, clarity, and care for the information it handles.",
      "Then life rolled the dice. Out of the blue, I moved from one country to another, to the San Francisco Bay Area, without knowing a single person or what lay ahead. It was equal parts terrifying and thrilling, and it taught me that starting from zero is just another way of building something new.",
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
  curiosities: {
    label: "Curiosities",
    title: "What I'm curious about",
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
    body: "I start by asking why before how. I like to break a big problem into small, honest steps, build something real early, and keep refining. I'm comfortable owning a feature from idea to production, and just as comfortable stepping back to ask whether we should build it at all. I'm a steady communicator, a patient debugger, and a lifelong learner who still gets a small thrill when something finally works.",
  },
  beyondTheCode: {
    label: "A little more",
    title: "Beyond the code",
    body: "[Placeholder: 2–3 lines about what I do outside of work. I will fill this in.]",
  },
  whyIBuild: {
    title: "Why I build",
    body: "I code because it’s the closest thing I know to magic: you start with an idea only you can see, and with enough patience and curiosity it becomes something real that other people can use. The freedom to create something new and put my own vision into the world is what keeps me in this field.",
  },
  projects: {
    label: "Selected work",
    title: "Projects",
    items: [
      {
        title: "[Project title]",
        description: "[Project description]",
        technologies: ["[Tech tag]", "[Tech tag]"],
        link: "[project-link]",
      },
      {
        title: "[Project title]",
        description: "[Project description]",
        technologies: ["[Tech tag]", "[Tech tag]"],
        link: "[project-link]",
      },
      {
        title: "[Project title]",
        description: "[Project description]",
        technologies: ["[Tech tag]", "[Tech tag]"],
        link: "[project-link]",
      },
    ] satisfies Project[],
  },
  openToWork: {
    label: "What I'm looking for",
    title: "Open to the right next chapter.",
    body: "I'm open to full-time software engineering roles in the Bay Area, especially on product teams that care about craft, welcome curiosity, and build things people actually use. If that sounds like your team, I'd love to talk.",
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
