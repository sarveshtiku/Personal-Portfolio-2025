// Dynamic knowledge base that reads from all pages
// This will automatically update when content changes

const fs = require('fs');
const path = require('path');

// Function to extract content from React components
function extractContentFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract text content from JSX
    const textMatches = content.match(/"([^"]*[a-zA-Z][^"]*)"/g) || [];
    const textContent = textMatches
      .map(match => match.slice(1, -1)) // Remove quotes
      .filter(text => text.length > 10) // Filter out short strings
      .join(' ');
    
    return textContent;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

// Function to get all page content
function getAllPageContent() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const pageFiles = [
    'Home.tsx',
    'About.tsx', 
    'Projects.tsx',
    'Experience.tsx',
    'Research.tsx',
    'Blog.tsx',
    'Contact.tsx'
  ];
  
  let allContent = '';
  
  pageFiles.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const content = extractContentFromFile(filePath);
    allContent += `\n\n=== ${file} ===\n${content}`;
  });
  
  return allContent;
}

// Function to get knowledge base with dynamic content
function getDynamicKnowledgeBase() {
  const pageContent = getAllPageContent();
  
  return {
    personal: {
      name: "Sarvesh Tiku",
      title: "AI Safety Researcher & Software Developer",
      location: "Atlanta, GA",
      email: "sarveshtiku@gmail.com",
      bio: "A passionate developer and researcher driven by the desire to solve complex problems through elegant code and rigorous inquiry. I'm fascinated by the intersection of technology and human behavior, with over 5 years of experience in full-stack development.",
      interests: [
        "AI Safety and Governance",
        "Machine Learning",
        "Computational Biology", 
        "Research",
        "Building technology that enhances human capability",
        "Open source contributions"
      ]
    },

    education: {
      current: "Georgia Institute of Technology",
      field: "Computer Science",
      focus: "AI, machine learning, and computational biology",
      previous: "Colorado School of Mines (Computing for Good program)"
    },

    experience: [
      {
        company: "Salesforce",
        position: "Software Engineering Intern",
        location: "San Francisco, CA",
        period: "May 2025 - August 2025",
        type: "Internship",
        description: "Built and deployed a full-stack sandbox platform to simulate real-world traffic and scale-test AgentForce agents, improving rollout reliability across 10k+ enterprise deployments.",
        keyAchievements: [
          "Scaled infrastructure to handle 100K+ concurrent requests",
          "Completed 3 Salesforce certifications in 2 weeks",
          "Developed sandbox testing platform adopted by internal teams"
        ],
        technologies: ["Node.js", "TypeScript", "FastAPI", "Salesforce Apex", "AgentForce APIs", "React", "PostgreSQL", "Redis", "AWS S3", "Docker", "Kubernetes", "Einstein GPT", "LangChain"]
      },
      {
        company: "Georgia Institute of Technology",
        position: "Computational Biology Undergraduate Research Assistant",
        location: "Atlanta, GA", 
        period: "Jan 2025 - Aug 2025",
        type: "Research",
        description: "Engineered AI-driven pipelines using R, LLMs (via OpenAI API), and Zotero's metadata to automate statistical analysis and literature synthesis across 500+ papers.",
        keyAchievements: [
          "Paper accepted to IEEE International Conference on Multimedia Information Processing and Retrieval 2025",
          "Nominated for GT Presidential Undergraduate Research Award",
          "Developed Zotero–OpenAI integration for semantic retrieval"
        ],
        technologies: ["R", "OpenAI API", "LLMs", "Zotero", "Python", "Statistical Analysis", "Literature Synthesis", "AI Pipelines"]
      },
      {
        company: "Colorado School of Mines",
        position: "Computing for Good Machine Learning Engineer",
        location: "Golden, CO",
        period: "May 2024 - July 2024", 
        type: "Research",
        description: "Applied ML-driven optimization techniques for solar panel placement, improving projected energy efficiency by 85% through spatial modeling.",
        keyAchievements: [
          "Improved projected energy efficiency by 85% through ML-driven spatial modeling",
          "Reduced development cycle by 40% using Agile methodology",
          "Recognized by State of Colorado for <5% ROI prediction accuracy"
        ],
        technologies: ["Machine Learning", "Spatial Modeling", "Solar Energy", "Agile Methodology", "Google Sunroof Project", "ROI Prediction", "Python"]
      }
    ],

    skills: {
      technical: [
        "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS",
        "Docker", "GraphQL", "Next.js", "TailwindCSS", "Machine Learning", 
        "R", "OpenAI API", "LLMs", "Statistical Analysis", "Java", "Android Development"
      ],
      research: [
        "AI Safety and Governance", "Bias Detection and Mitigation", "Computational Biology",
        "Literature Synthesis", "Semantic Retrieval", "Knowledge Graphs", "Hallucination Detection"
      ],
      soft: [
        "Research", "Problem Solving", "Collaboration", "Technical Writing", "Presentation"
      ]
    },

    certifications: [
      {
        name: "Salesforce Certified Agentforce Specialist",
        issuer: "Salesforce",
        date: "Mar 2025",
        skills: ["Salesforce", "CRM", "Business Process", "Customer Service", "Automation"]
      },
      {
        name: "AWS Certified Cloud Practitioner", 
        issuer: "Amazon Web Services",
        date: "Aug 2025",
        expires: "Sep 2028",
        skills: ["Cloud Computing", "AWS", "Cloud Services", "Cloud Platform"]
      },
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services", 
        date: "Sep 2025",
        expires: "Sep 2028",
        skills: ["Cloud Architecture", "Cloud Infrastructure", "AWS", "Cloud Data"]
      },
      {
        name: "GitHub Foundations",
        issuer: "GitHub",
        date: "Dec 2024", 
        expires: "Dec 2027",
        skills: ["Git", "Version Control", "GitHub", "Collaboration", "Open Source"]
      },
      {
        name: "AI Safety and Governance",
        issuer: "BlueDot Impact",
        date: "Apr 2025",
        skills: ["AI Governance", "Responsible AI", "Policy Analysis", "AI Safety", "Ethics"]
      },
      {
        name: "Introduction to Back-End Development",
        issuer: "Meta",
        date: "Sep 2025",
        skills: ["Back-End Development", "Web Servers", "General Networking", "Full-Stack Web Development", "JavaScript Frameworks", "Responsive Web Design", "User Interface (UI)", "Hypertext Markup Language (HTML)", "Cascading Style Sheets (CSS)", "Bootstrap (Front-End Framework)"]
      },
      {
        name: "Docker Certified Associate",
        issuer: "Mirantis Training",
        date: "Sep 2025",
        expires: "Sep 2027",
        skills: ["Docker", "Containerization", "DevOps", "Container Orchestration", "Microservices", "Cloud Computing", "Infrastructure as Code", "CI/CD", "Application Deployment", "System Administration"]
      }
    ],

    projects: [
      {
        title: "Trading-GT Market Analysis",
        description: "Weekly equity-market commentaries for Georgia Tech Trading Club analyzing S&P 500 sectors. Features macro backdrop analysis, earnings catalysts, and thematic forces driving price action with custom Python visualizations.",
        status: "Active Development",
        technologies: ["Python", "Jupyter Notebooks", "Data Analysis", "Yahoo Finance API", "Financial Modeling"],
        links: {
          github: "https://github.com/sarveshtiku/Trading-GT"
        }
      },
      {
        title: "Travel Buddy Android Application", 
        description: "An Android application designed to help users explore new places effortlessly, plan visits efficiently, get personalized recommendations, and save favorite destinations.",
        status: "Production",
        technologies: ["Java", "Android Studio", "Google Maps API", "Appwrite", "Google Places API"],
        links: {
          github: "https://github.com/sarveshtiku/Travel-Buddy-Android-Application"
        }
      },
      {
        title: "Research Data Platform",
        description: "A comprehensive platform for managing and analyzing research data with automated workflows and visualization tools.",
        status: "In Development", 
        technologies: ["Python", "Django", "PostgreSQL", "React", "D3.js"]
      }
    ],

    research: [
      {
        title: "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)",
        subtitle: "A Framework for Assessing Structured Retrieval and Reasoning Capabilities",
        venue: "IEEE 8th International Conference on Multimedia Information Processing and Retrieval (IEEE MIPR 2025)",
        date: "2025-08-06",
        status: "Accepted",
        type: "Conference Paper",
        abstract: "Presents BioMuse, a benchmarking framework designed to assess the structured retrieval and reasoning capabilities of LLMs using researcher-curated Zotero libraries. The framework transforms Zotero metadata into semantic graphs and document clusters, defining benchmarking tasks including citation-based retrieval, abstract-consistent summarization, and tag prediction.",
        tags: ["LLMs", "semantic retrieval", "Zotero", "citation grounding", "scientific AI", "hallucination detection", "knowledge graphs"]
      },
      {
        title: "Mitigation of User-Prompt Bias in Large Language Models",
        subtitle: "A Natural Language Processing and Deep Learning Based Framework", 
        venue: "2024 IEEE 3rd International Conference on Computing and Machine Intelligence (ICMI)",
        date: "2024-04-13",
        status: "Published",
        type: "Conference Paper",
        abstract: "Addresses the challenge of bias amplification in large language models through a framework that integrates natural language processing and deep learning to detect and neutralize bias in user prompts in real time. The framework achieved 93% accuracy and F1Score of 0.92 in pinpointing and alleviating biases.",
        tags: ["Deep learning", "Large language models", "Bias mitigation", "Transformers", "Real-time systems"]
      },
      {
        title: "AI-Induced Labor Market Shifts and Aging Workforce Dynamics",
        subtitle: "A Cross-National Study of Corporate Strategic Responses in Japan, USA, and India",
        venue: "Foundation Document - United Nations HL Advisory Board on AI", 
        date: "2023-08-09",
        status: "Published",
        type: "Journal Article",
        abstract: "Examines how AI technologies are inducing labor market transformations by automating job roles and disrupting career advancement pathways. The study compares strategic responses of corporations across Japan, USA, and India to offer insights for equitable AI integration strategies.",
        tags: ["Artificial Intelligence", "Job Automation", "Labor Market Transformations", "Aging Workforce", "Corporate Strategy"]
      }
    ],

    contact: {
      email: "sarveshtiku@gmail.com",
      linkedin: "https://linkedin.com/in/sarveshtiku",
      github: "https://github.com/sarveshtiku", 
      twitter: "https://twitter.com/sarveshtiku"
    },

    personality: {
      traits: [
        "Curious and research-driven",
        "Passionate about AI safety and ethics", 
        "Loves solving complex problems",
        "Enjoys collaborating and sharing knowledge",
        "Committed to building technology that benefits society",
        "Always learning and exploring new technologies"
      ],
      values: [
        "Ethical AI development",
        "Open source contribution", 
        "Rigorous research methodology",
        "Human-centered design",
        "Continuous learning",
        "Collaboration and knowledge sharing"
      ]
    },

    // Dynamic content from pages
    dynamicContent: pageContent
  };
}

module.exports = { getDynamicKnowledgeBase, getAllPageContent };
