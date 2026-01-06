import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import FormEditor from './components/FormEditor/FormEditor'
import Preview from './components/Preview'
import Toolbar from './components/Toolbar'
import { ResumeData, ResumeStyle } from './types'
import { defaultMarkdown, defaultResumeData } from './utils/initialData'
import { generateResumeMarkdown } from './utils/markdownGenerator'

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [style, setStyle] = useState<ResumeStyle>('modern')
  const [inputMode, setInputMode] = useState<'markdown' | 'form'>('markdown')
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData)
    const newMarkdown = generateResumeMarkdown(newData)
    setMarkdown(newMarkdown)
  }

  return (
    <div className="app">
      <Toolbar
        markdown={markdown}
        style={style}
        onStyleChange={setStyle}
        inputMode={inputMode}
        onInputModeChange={setInputMode}
      />
      <div className="app-content">
        {inputMode === 'markdown' ? (
          <Editor value={markdown} onChange={setMarkdown} />
        ) : (
          <FormEditor data={resumeData} onChange={handleDataChange} />
        )}
        <Preview markdown={markdown} style={style} />
      </div>
    </div>
  )
}

export default App
