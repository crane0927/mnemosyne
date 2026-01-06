import { EducationItem, ExperienceItem, PersonalInfo, ProjectItem, ResumeData, SkillGroup } from '../../types'
import './FormEditor.css'
import Section from './Section'

interface FormEditorProps {
  data: ResumeData
  onChange: (data: ResumeData) => void
}

export default function FormEditor({ data, onChange }: FormEditorProps) {
  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    })
  }

  const updateExperience = (id: string, field: keyof ExperienceItem, value: string) => {
    const list = data.experience.map(item => item.id === id ? { ...item, [field]: value } : item)
    onChange({ ...data, experience: list })
  }

  const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
    const list = data.education.map(item => item.id === id ? { ...item, [field]: value } : item)
    onChange({ ...data, education: list })
  }

  const updateSkills = (id: string, field: keyof SkillGroup, value: string) => {
    const list = data.skills.map(item => item.id === id ? { ...item, [field]: value } : item)
    onChange({ ...data, skills: list })
  }

  const updateProjects = (id: string, field: keyof ProjectItem, value: string) => {
    const list = data.projects.map(item => item.id === id ? { ...item, [field]: value } : item)
    onChange({ ...data, projects: list })
  }

  const addItem = (section: keyof Omit<ResumeData, 'personalInfo'>) => {
    const newId = Date.now().toString()
    let newItem: any
    if (section === 'experience') {
      newItem = { id: newId, role: '', company: '', period: '', description: '' }
    } else if (section === 'education') {
      newItem = { id: newId, major: '', school: '', period: '', description: '' }
    } else if (section === 'skills') {
      newItem = { id: newId, category: '', items: '' }
    } else if (section === 'projects') {
      newItem = { id: newId, name: '', description: '' }
    }
    onChange({ ...data, [section]: [...data[section], newItem] })
  }

  const removeItem = (section: keyof Omit<ResumeData, 'personalInfo'>, id: string) => {
    const list = data[section] as any[]
    onChange({ ...data, [section]: list.filter(item => item.id !== id) })
  }

  return (
    <div className="form-editor">
      <Section title="个人信息">
        <div className="form-group">
          <label className="form-label">姓名</label>
          <input
            className="form-input"
            value={data.personalInfo.name}
            onChange={e => updatePersonalInfo('name', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">职位</label>
          <input
            className="form-input"
            value={data.personalInfo.title}
            onChange={e => updatePersonalInfo('title', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">邮箱</label>
          <input
            className="form-input"
            value={data.personalInfo.email}
            onChange={e => updatePersonalInfo('email', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">电话</label>
          <input
            className="form-input"
            value={data.personalInfo.phone}
            onChange={e => updatePersonalInfo('phone', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">个人简介</label>
          <textarea
            className="form-textarea"
            value={data.personalInfo.summary}
            onChange={e => updatePersonalInfo('summary', e.target.value)}
          />
        </div>
      </Section>

      <Section
        title="工作经历"
        action={<button className="form-btn form-btn-add" onClick={() => addItem('experience')}>+ 添加</button>}
      >
        {data.experience.map((item: ExperienceItem) => (
          <div key={item.id} className="repeated-item">
            <div className="form-item-control">
              <button className="form-btn form-btn-remove" onClick={() => removeItem('experience', item.id)}>删除</button>
            </div>
            <div className="form-group">
              <label className="form-label">职位</label>
              <input
                className="form-input"
                value={item.role}
                onChange={e => updateExperience(item.id, 'role', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">公司</label>
              <input
                className="form-input"
                value={item.company}
                onChange={e => updateExperience(item.id, 'company', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">时间</label>
              <input
                className="form-input"
                value={item.period}
                onChange={e => updateExperience(item.id, 'period', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">描述</label>
              <textarea
                className="form-textarea"
                value={item.description}
                onChange={e => updateExperience(item.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section
        title="教育经历"
        action={<button className="form-btn form-btn-add" onClick={() => addItem('education')}>+ 添加</button>}
      >
        {data.education.map((item: EducationItem) => (
          <div key={item.id} className="repeated-item">
             <div className="form-item-control">
              <button className="form-btn form-btn-remove" onClick={() => removeItem('education', item.id)}>删除</button>
            </div>
            <div className="form-group">
              <label className="form-label">专业</label>
              <input
                className="form-input"
                value={item.major}
                onChange={e => updateEducation(item.id, 'major', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">学校</label>
              <input
                className="form-input"
                value={item.school}
                onChange={e => updateEducation(item.id, 'school', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">时间</label>
              <input
                className="form-input"
                value={item.period}
                onChange={e => updateEducation(item.id, 'period', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">描述</label>
              <textarea
                className="form-textarea"
                value={item.description}
                onChange={e => updateEducation(item.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section
        title="技能专长"
        action={<button className="form-btn form-btn-add" onClick={() => addItem('skills')}>+ 添加</button>}
      >
        {data.skills.map((item: SkillGroup) => (
          <div key={item.id} className="repeated-item">
             <div className="form-item-control">
              <button className="form-btn form-btn-remove" onClick={() => removeItem('skills', item.id)}>删除</button>
            </div>
            <div className="form-group">
              <label className="form-label">分类 (如: 前端框架)</label>
              <input
                className="form-input"
                value={item.category}
                onChange={e => updateSkills(item.id, 'category', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">内容 (如: React, Vue)</label>
              <textarea
                className="form-textarea"
                value={item.items}
                onChange={e => updateSkills(item.id, 'items', e.target.value)}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section
        title="项目经验"
        action={<button className="form-btn form-btn-add" onClick={() => addItem('projects')}>+ 添加</button>}
      >
        {data.projects.map((item: ProjectItem) => (
          <div key={item.id} className="repeated-item">
             <div className="form-item-control">
              <button className="form-btn form-btn-remove" onClick={() => removeItem('projects', item.id)}>删除</button>
            </div>
            <div className="form-group">
              <label className="form-label">项目名称</label>
              <input
                className="form-input"
                value={item.name}
                onChange={e => updateProjects(item.id, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">描述</label>
              <textarea
                className="form-textarea"
                value={item.description}
                onChange={e => updateProjects(item.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </Section>
    </div>
  )
}
