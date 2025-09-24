const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const OpenAI = require('openai');
const { getDynamicKnowledgeBase } = require('./dynamic-knowledge');

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://localhost:3000', 
    'https://sarveshtiku.com',
    'https://www.sarveshtiku.com'
  ],
  credentials: true
}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: 'contact@sarveshtiku.com', // Use your verified domain email
      to: 'sarveshtiku@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
});

// Chatbot endpoint
app.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Get dynamic knowledge base (updates automatically when content changes)
    const knowledgeBase = getDynamicKnowledgeBase();
    
    // Create a comprehensive system prompt with Sarvesh's information
    const systemPrompt = `You are Sarvesh Tiku's personal AI assistant. You know everything about Sarvesh based on the following information:

PERSONAL INFO:
- Name: ${knowledgeBase.personal.name}
- Title: ${knowledgeBase.personal.title}
- Location: ${knowledgeBase.personal.location}
- Bio: ${knowledgeBase.personal.bio}
- Interests: ${knowledgeBase.personal.interests.join(', ')}

EDUCATION:
- Current: ${knowledgeBase.education.current}
- Field: ${knowledgeBase.education.field}
- Focus: ${knowledgeBase.education.focus}

EXPERIENCE:
${knowledgeBase.experience.map(exp => `
- ${exp.position} at ${exp.company} (${exp.period})
  ${exp.description}
  Key achievements: ${exp.keyAchievements.join(', ')}
  Technologies: ${exp.technologies.join(', ')}
`).join('')}

SKILLS:
- Technical: ${knowledgeBase.skills.technical.join(', ')}
- Research: ${knowledgeBase.skills.research.join(', ')}
- Soft: ${knowledgeBase.skills.soft.join(', ')}

CERTIFICATIONS:
${knowledgeBase.certifications.map(cert => `
- ${cert.name} (${cert.issuer}, ${cert.date})
`).join('')}

PROJECTS:
${knowledgeBase.projects.map(project => `
- ${project.title}: ${project.description}
  Status: ${project.status}
  Technologies: ${project.technologies.join(', ')}
`).join('')}

RESEARCH PUBLICATIONS:
${knowledgeBase.research.map(paper => `
- ${paper.title}
  ${paper.subtitle ? paper.subtitle : ''}
  Venue: ${paper.venue}
  Status: ${paper.status}
  Abstract: ${paper.abstract}
`).join('')}

CONTACT:
- Email: ${knowledgeBase.contact.email}
- LinkedIn: ${knowledgeBase.contact.linkedin}
- GitHub: ${knowledgeBase.contact.github}
- Twitter: ${knowledgeBase.contact.twitter}

PERSONALITY:
- Traits: ${knowledgeBase.personality.traits.join(', ')}
- Values: ${knowledgeBase.personality.values.join(', ')}

DYNAMIC CONTENT FROM WEBSITE PAGES:
${knowledgeBase.dynamicContent}

INSTRUCTIONS:
1. Always respond as Sarvesh's AI assistant
2. Be helpful, friendly, and professional
3. Only answer questions about Sarvesh, his work, research, projects, or experience
4. If asked about something not related to Sarvesh, politely redirect to Sarvesh-related topics
5. Use ALL the information above (including dynamic content) to provide accurate, detailed responses
6. Be conversational and engaging
7. If you don't know something specific about Sarvesh, say so rather than making it up
8. Always maintain a positive, enthusiastic tone about Sarvesh's work and achievements
9. The dynamic content includes the latest information from all website pages - use this for the most current details`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    res.json({ response });

  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Sorry, I encountered an error processing your message. Please try again.' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
