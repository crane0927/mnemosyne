import { useState, useRef, useEffect } from 'react';
import { ResumeStyle } from '../types';
import './StyleSelector.css';

interface StyleSelectorProps {
  currentStyle: ResumeStyle;
  onStyleChange: (style: ResumeStyle) => void;
}

const styles: { id: ResumeStyle; name: string; icon: string }[] = [
  { id: 'modern', name: '现代风格', icon: '✨' },
  { id: 'classic', name: '经典风格', icon: '🏛️' },
  { id: 'minimal', name: '简约风格', icon: '🍃' },
  { id: 'professional', name: '专业风格', icon: '💼' },
];

export default function StyleSelector({
  currentStyle,
  onStyleChange,
}: StyleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedConfig = styles.find((s) => s.id === currentStyle) || styles[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (styleId: ResumeStyle) => {
    onStyleChange(styleId);
    setIsOpen(false);
  };

  return (
    <div className="style-selector" ref={dropdownRef}>
      <div
        className={`style-selector-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="style-option-icon">{selectedConfig.icon}</span>
        <span className="selected-style-name">{selectedConfig.name}</span>
        <span className="selector-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="style-dropdown-menu">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`style-option ${
                currentStyle === style.id ? 'is-selected' : ''
              }`}
              onClick={() => handleSelect(style.id)}
            >
              <span className="style-option-icon">{style.icon}</span>
              <span>{style.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
