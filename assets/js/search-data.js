// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Current research directions of our group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by year or by research topic.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-students",
          title: "students",
          description: "Advising, current group members, alumni, and placements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "Courses, tutorials, and lecture-note books.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "post-same-logic-different-words-why-ai-systems-contradict-themselves-and-what-we-did-about-it",
        
          title: "Same Logic, Different Words: Why AI Systems Contradict Themselves, and What We Did...",
        
        description: "Large language models often change their answer when a rule is reworded without changing its meaning. In a NeurIPS 2026 paper we measured how often, asked why, and tested a fix.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/2026/logic-invariant-llms/";
          
        },
      },{id: "post-optimize-once-execute-fast-why-ai-teams-make-you-wait-and-how-to-fix-the-org-chart",
        
          title: "Optimize Once, Execute Fast: Why AI Teams Make You Wait, and How to...",
        
        description: "AI systems built from several cooperating models give better answers but take longer to deliver them. In a NeurIPS 2026 paper we show that much of that delay is organizational slack, and that reorganizing the workflow cuts response time by more than half without hurting accuracy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/2026/latency-aware-ai-workflows/";
          
        },
      },{id: "post-when-generative-ai-is-guessing-separating-what-a-model-knows-from-what-it-makes-up",
        
          title: "When Generative AI Is Guessing: Separating What a Model Knows from What It...",
        
        description: "Generative models are random by design, so their outputs do not reveal when the model is out of its depth. In an AISTATS 2026 paper we isolate the uncertainty that comes from the model not knowing, propagate it through the generation process, and use it to filter out the outputs the model had no basis for.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/research/2026/when-gen-ai-is-guessing/";
          
        },
      },{id: "news-i-will-give-a-short-course-on-introduction-to-reinforcement-learning-at-the-deep-learning-for-science-school-dl4sci-july-20-24-at-lawrence-berkeley-national-laboratory-the-tutorial-materials-are-available-under-courses",
          title: 'I will give a short course on Introduction to Reinforcement Learning at the...',
          description: "",
          section: "News",},{id: "news-organizing-two-sessions-at-jsm-2026-in-boston",
          title: 'Organizing two sessions at JSM 2026 in Boston',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-08-jsm-organize/";
            },},{id: "news-presenting-on-dual-channel-tensor-neural-networks-at-jsm-2026",
          title: 'Presenting on dual-channel tensor neural networks at JSM 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-08-jsm-talk/";
            },},{id: "news-seminar-talks-at-penn-state-stanford-and-berkeley-quot-what-makes-an-rl-sample-transferable-quot",
          title: 'Seminar talks at Penn State, Stanford, and Berkeley: &amp;quot;What Makes an RL Sample...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-09-30-seminar-talk/";
            },},{id: "news-seminar-talk-at-chicago-booth-quot-what-makes-an-rl-sample-transferable-quot",
          title: 'Seminar talk at Chicago Booth: &amp;quot;What Makes an RL Sample Transferable?&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-11-05-booth-seminar/";
            },},{id: "news-when-generative-ai-is-guessing-our-aistats-2026-paper-on-epistemic-uncertainty-in-diffusion-models",
          title: 'When generative AI is guessing: our AISTATS 2026 paper on epistemic uncertainty in...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-11-06-aistats-flare/";
            },},{id: "news-faster-ai-teams-our-neurips-2026-paper-on-latency-aware-multi-agent-workflows",
          title: 'Faster AI teams: our NeurIPS 2026 paper on latency-aware multi-agent workflows',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-11-07-neurips-lawa/";
            },},{id: "news-same-logic-different-words-our-neurips-2026-paper-on-why-llms-contradict-themselves",
          title: 'Same logic, different words: our NeurIPS 2026 paper on why LLMs contradict themselves...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-11-08-neurips-logist/";
            },},{id: "projects-learning-amp-decisions-under-heterogeneity",
          title: 'Learning &amp;amp; Decisions under Heterogeneity',
          description: "Transfer RL, latent structure discovery, bandits, and dynamic pricing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heterogeneity/";
            },},{id: "projects-structured-multi-way-learning",
          title: 'Structured Multi-Way Learning',
          description: "Matrix, tensor, network, and spatial-temporal data; tensor-structured neural networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multiway-learning/";
            },},{id: "projects-trustworthy-ai-for-business",
          title: 'Trustworthy AI for Business',
          description: "Pricing, finance, market design, generative AI, and agentic AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trustworthy-ai/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6C%79%6E%6E.%63%68%65%6E@%73%74%65%72%6E.%6E%79%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/elynncc", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h5jI05UAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
