import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { ResumeStyle } from '../types'
import { getStyleConfig } from './styleConfig'

export async function downloadPDF(_markdown: string, style: ResumeStyle) {
  const previewElement = document.getElementById('resume-preview')
  if (!previewElement) {
    alert('预览区域未找到')
    return
  }

  // 显示加载提示
  const loadingText = document.createElement('div')
  loadingText.textContent = '正在生成PDF...'
  loadingText.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 20px 40px;
    border-radius: 8px;
    z-index: 10000;
    font-size: 16px;
  `
  document.body.appendChild(loadingText)

  try {
    // 应用样式配置
    const styleConfig = getStyleConfig(style)
    const originalStyles = {
      fontFamily: previewElement.style.fontFamily,
      fontSize: previewElement.style.fontSize,
      color: previewElement.style.color,
    }

    previewElement.style.fontFamily = styleConfig.fontFamily
    previewElement.style.fontSize = styleConfig.fontSize
    previewElement.style.color = styleConfig.secondaryColor

    // 等待样式应用
    await new Promise(resolve => setTimeout(resolve, 100))

    // 使用html2canvas将预览区域转换为canvas
    const canvas = await html2canvas(previewElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: previewElement.scrollWidth,
      height: previewElement.scrollHeight,
    })

    // 恢复原始样式
    previewElement.style.fontFamily = originalStyles.fontFamily
    previewElement.style.fontSize = originalStyles.fontSize
    previewElement.style.color = originalStyles.color

    // 计算PDF尺寸（A4比例）
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    const pdf = new jsPDF('p', 'mm', 'a4')

    // 如果内容超过一页，需要分页
    if (imgHeight <= pageHeight) {
      // 单页内容
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight)
    } else {
      // 多页内容
      let heightLeft = imgHeight
      let position = 0
      const imgData = canvas.toDataURL('image/png')

      // 添加第一页
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // 添加更多页面
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
    }

    // 下载PDF
    pdf.save(`resume-${style}-${Date.now()}.pdf`)
  } catch (error) {
    console.error('生成PDF失败:', error)
    alert('生成PDF失败，请重试')
  } finally {
    document.body.removeChild(loadingText)
  }
}

