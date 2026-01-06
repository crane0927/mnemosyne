import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ResumeStyle } from '../types'
import { getStyleConfig } from '../utils/styleConfig'
import './Preview.css'

interface PreviewProps {
  markdown: string
  style: ResumeStyle
}

function Preview({ markdown, style }: PreviewProps) {
  const styleConfig = getStyleConfig(style)

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2>👁️ 实时预览</h2>
      </div>
      <div 
        className="preview-content"
        id="resume-preview"
        style={{
          fontFamily: styleConfig.fontFamily,
          fontSize: styleConfig.fontSize,
          color: styleConfig.secondaryColor,
        }}
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          className={`preview-markdown preview-${style}`}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Preview

