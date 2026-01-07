import { useEffect, useState } from 'react'
import Split from 'react-split'
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
  const [isNarrow, setIsNarrow] = useState(false)

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData)
    const newMarkdown = generateResumeMarkdown(newData)
    setMarkdown(newMarkdown)
  }

  useEffect(() => {
    const updateLayout = () => {
      setIsNarrow(window.innerWidth <= 768)
    }
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  return (
    <div className="app">
      <Toolbar
        markdown={markdown}
        style={style}
        onStyleChange={setStyle}
        inputMode={inputMode}
        onInputModeChange={setInputMode}
      />
      <Split
        key={`${inputMode}-${isNarrow ? 'vertical' : 'horizontal'}`}
        className="app-content"
        sizes={[50, 50]}
        minSize={isNarrow ? 200 : 280}
        gutterSize={8}
        snapOffset={40}
        direction={isNarrow ? 'vertical' : 'horizontal'}
      >
        {inputMode === 'markdown' ? (
          <Editor value={markdown} onChange={setMarkdown} />
        ) : (
          <FormEditor data={resumeData} onChange={handleDataChange} />
        )}
        <Preview markdown={markdown} style={style} />
      </Split>
    </div>
  )
}

export default App
