import { ResumeStyle, StyleConfig } from '../types'

export function getStyleConfig(style: ResumeStyle): StyleConfig {
  const configs: Record<ResumeStyle, StyleConfig> = {
    modern: {
      name: '现代风格',
      primaryColor: '#4A90E2',
      secondaryColor: '#2C3E50',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '14px'
    },
    classic: {
      name: '经典风格',
      primaryColor: '#8B4513',
      secondaryColor: '#1A1A1A',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '14px'
    },
    minimal: {
      name: '简约风格',
      primaryColor: '#000000',
      secondaryColor: '#333333',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '13px'
    },
    professional: {
      name: '专业风格',
      primaryColor: '#2C5282',
      secondaryColor: '#2D3748',
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontSize: '14px'
    }
  }
  
  return configs[style]
}

