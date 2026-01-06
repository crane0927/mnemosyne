import { ResumeData } from '../types';

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: '张三',
    title: '前端开发工程师',
    email: 'zhangsan@example.com',
    phone: '138-0000-0000',
    summary:
      '拥有5年前端开发经验，专注于React和TypeScript技术栈，擅长构建高性能、可维护的Web应用。',
  },
  experience: [
    {
      id: '1',
      role: '高级前端工程师',
      company: 'ABC科技有限公司',
      period: '2020.03 - 至今',
      description:
        '- 负责公司核心产品的前端架构设计和开发\n- 使用React + TypeScript构建大型单页应用\n- 优化应用性能，首屏加载时间减少40%\n- 带领3人前端团队完成多个重要项目',
    },
    {
      id: '2',
      role: '前端工程师',
      company: 'XYZ互联网公司',
      period: '2018.06 - 2020.02',
      description:
        '- 参与多个B端和C端产品的前端开发\n- 使用Vue.js开发企业级管理系统\n- 与UI设计师协作，实现精美的用户界面',
    },
  ],
  education: [
    {
      id: '1',
      major: '计算机科学与技术',
      school: '某某大学',
      period: '2014.09 - 2018.06',
      description:
        '- 本科学士学位\n- 主修课程：数据结构、算法、计算机网络、数据库系统',
    },
  ],
  skills: [
    {
      id: '1',
      category: '前端框架',
      items: 'React, Vue.js, Angular',
    },
    {
      id: '2',
      category: '编程语言',
      items: 'JavaScript, TypeScript, HTML5, CSS3',
    },
    {
      id: '3',
      category: '工具链',
      items: 'Webpack, Vite, Git, Docker',
    },
    {
      id: '4',
      category: '其他',
      items: 'Node.js, 微前端架构, 性能优化',
    },
  ],
  projects: [
    {
      id: '1',
      name: '电商平台前端重构',
      description:
        '- 使用React Hooks重构原有代码，代码量减少30%\n- 实现组件库统一，提升开发效率\n- 优化打包体积，减少40%的bundle大小',
    },
    {
      id: '2',
      name: '数据可视化大屏',
      description:
        '- 使用D3.js和ECharts开发实时数据展示\n- 支持多数据源接入和动态配置\n- 获得公司年度优秀项目奖',
    },
  ],
};

export const defaultMarkdown = `# ${defaultResumeData.personalInfo.name}

**${defaultResumeData.personalInfo.title}** | 📧 ${
  defaultResumeData.personalInfo.email
} | 📱 ${defaultResumeData.personalInfo.phone}

---

## 个人简介

${defaultResumeData.personalInfo.summary}

## 工作经历

${defaultResumeData.experience
  .map(
    (exp) => `### ${exp.role} | ${exp.company}
**${exp.period}**

${exp.description}`,
  )
  .join('\n\n')}

## 教育经历

${defaultResumeData.education
  .map(
    (edu) => `### ${edu.major} | ${edu.school}
**${edu.period}**

${edu.description}`,
  )
  .join('\n\n')}

## 技能专长

${defaultResumeData.skills
  .map((skill) => `- **${skill.category}**: ${skill.items}`)
  .join('\n')}

## 项目经验

${defaultResumeData.projects
  .map(
    (proj) => `### ${proj.name}
${proj.description}`,
  )
  .join('\n\n')}
`;
