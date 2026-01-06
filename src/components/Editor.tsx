import './Editor.css'

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <h2>📝 Markdown 编辑器</h2>
      </div>
      <textarea
        className="editor-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在这里输入你的Markdown格式简历..."
      />
    </div>
  )
}

export default Editor

