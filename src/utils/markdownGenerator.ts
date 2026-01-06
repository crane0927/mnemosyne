import { ResumeData } from '../types';

export function generateResumeMarkdown(data: ResumeData): string {
  const { personalInfo, experience, education, skills, projects } = data;

  let md = `# ${personalInfo.name}\n\n`;

  // Header Info
  const contactInfo = [
    `**${personalInfo.title}**`,
    personalInfo.email && `📧 ${personalInfo.email}`,
    personalInfo.phone && `📱 ${personalInfo.phone}`,
  ]
    .filter(Boolean)
    .join(' | ');

  if (contactInfo) {
    md += `${contactInfo}\n\n`;
  }

  md += `---\n\n`;

  // Summary
  if (personalInfo.summary) {
    md += `## 个人简介\n\n${personalInfo.summary}\n\n`;
  }

  // Experience
  if (experience.length > 0) {
    md += `## 工作经历\n\n`;
    experience.forEach((exp) => {
      md += `### ${exp.role} | ${exp.company}\n**${exp.period}**\n\n${exp.description}\n\n`;
    });
  }

  // Education
  if (education.length > 0) {
    md += `## 教育经历\n\n`;
    education.forEach((edu) => {
      md += `### ${edu.major} | ${edu.school}\n**${edu.period}**\n\n${edu.description}\n\n`;
    });
  }

  // Skills
  if (skills.length > 0) {
    md += `## 技能专长\n\n`;
    skills.forEach((skill) => {
      md += `- **${skill.category}**: ${skill.items}\n`;
    });
    md += `\n`;
  }

  // Projects
  if (projects.length > 0) {
    md += `## 项目经验\n\n`;
    projects.forEach((proj) => {
      md += `### ${proj.name}\n${proj.description}\n\n`;
    });
  }

  return md;
}
