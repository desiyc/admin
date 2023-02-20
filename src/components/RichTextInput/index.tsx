import { UPLOAD_SERVER_HOME } from '../../common/config'
import '@wangeditor/editor/dist/css/style.css'
import { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { message } from 'antd'
import { requestFile } from 'dva17'

type InsertFnType = (url: string, alt: string, href: string) => void

export default (props: any) => {
  const { value, onChange }: any = props
  const [editor, setEditor]: any = useState<IDomEditor | null>(null)
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: ['group-video', 'insertImage'],
  }
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        async customUpload(file: File, insertFn: InsertFnType) {
          message.loading('图片上传中..', 0)
          const { url } = await requestFile(UPLOAD_SERVER_HOME, file)
          insertFn(url, url, url)
          message.destroy()
        },
      },
    },
  }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])
  return (
    <div>
      <Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: '1px solid #ccc' }} />
      <Editor
        defaultConfig={editorConfig}
        value={value}
        onCreated={setEditor}
        onChange={(currentEditor: any) => onChange(currentEditor.getHtml())}
        mode="default"
        style={{ height: '500px', overflowY: 'hidden' }}
      />
    </div>
  )
}
