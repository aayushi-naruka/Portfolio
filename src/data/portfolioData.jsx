import React from 'react';

export const skills = [
  'React.js', 'Angular', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'Microservices', 'SQL', 'MongoDB', 'Redis', 'AWS Kinesis', 'Azure',
  'Docker', 'Kubernetes', 'LangChain', 'LangGraph', 'RAG',
];

export const experience = [
  {
    company: 'Liminal Custody',
    role: 'Software Development Engineer',
    period: 'JUL 2025 — OCT 2026',
    place: 'Bengaluru, India',
    summary: 'Building secure, scalable infrastructure for digital asset custody.',
    points: [
      <>Integrated Tron resource providers, automating fund-spraying workflows and reducing client operational costs by <strong>30%</strong>.</>,
      <>Connected Elliptic and TRM Labs risk screening to flag high-risk wallets and screen <strong>100% of incoming deposits</strong> before settlement.</>,
      <>Designed an AWS Kinesis streaming pipeline that took API latency from 60 seconds to near real-time and improved processing scale by <strong>3×</strong>.</>,
      <>Cut redundant REST calls by <strong>75%</strong> through more efficient frontend state management.</>,
    ],
    stack: 'Angular · Node.js · AWS Kinesis · SQL · Docker · Kubernetes',
  },
  {
    company: 'RoboMQ',
    role: 'Software Development Engineer',
    period: 'JAN 2023 — JUN 2025',
    place: 'Jaipur, India',
    summary: 'Creating enterprise integrations and workflow automation at scale.',
    points: [
      <>Built workflow versioning with Node.js and Azure, enabling seamless version switching and deployment.</>,
      <>Integrated HR and ITSM platforms including Zoho People, UKG Pro, Paycor, Jira, and Zendesk—automating sync for thousands of employee records.</>,
      <>Created automated reconciliation reports that reduced manual auditing effort by <strong>60%</strong>.</>,
      <>Added UI and API monitoring across <strong>50+ workflows</strong>, reducing manual validation by <strong>70%</strong>.</>,
    ],
    stack: 'React · Angular · Node.js · Azure Functions · Service Bus · RabbitMQ',
  },
  {
    company: 'SoftWorld',
    role: 'Software Engineer Intern',
    period: 'JUN 2022 — DEC 2022',
    place: 'Jaipur, India',
    summary: 'Bringing responsive, reusable interfaces to an e-commerce platform.',
    points: [
      <>Built responsive React components and reusable UI patterns for a better cross-device shopping experience.</>,
      <>Improved frontend performance with modern JavaScript, HTML, and CSS.</>,
    ],
    stack: 'React.js · JavaScript · HTML5 · CSS3',
  },
];
