import { ResumeStyle } from '../types'
import { downloadPDF } from '../utils/pdfGenerator'
import StyleSelector from './StyleSelector'
import './Toolbar.css'

interface ToolbarProps {
  markdown: string
  style: ResumeStyle
  onStyleChange: (style: ResumeStyle) => void
  inputMode: 'markdown' | 'form'
  onInputModeChange: (mode: 'markdown' | 'form') => void
}



function Toolbar({ markdown, style, onStyleChange, inputMode, onInputModeChange }: ToolbarProps) {
  const handleDownload = async () => {
    await downloadPDF(markdown, style)
  }

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <h1 className="toolbar-title">📄 简历编辑器</h1>
        <div className="mode-switch">
          <button
            className={`mode-btn ${inputMode === 'markdown' ? 'active' : ''}`}
            onClick={() => onInputModeChange('markdown')}
          >
            Markdown
          </button>
          <button
            className={`mode-btn ${inputMode === 'form' ? 'active' : ''}`}
            onClick={() => onInputModeChange('form')}
          >
            表单模式
          </button>
        </div>
      </div>
      <div className="toolbar-center">
        <label className="style-label">选择样式：</label>
        <StyleSelector
          currentStyle={style}
          onStyleChange={onStyleChange}
        />
      </div>
      <div className="toolbar-right">
        <button className="download-btn" onClick={handleDownload}>
          ⬇️ 下载 PDF
        </button>
      </div>
    </div>
  )
}

export default Toolbar

