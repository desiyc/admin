import { UPLOAD_SERVER_HOME } from '../../common/config'
import { message } from 'antd'
import { requestFile } from 'dva17'
import ReactWEditor from 'wangeditor-for-react'

export default function RichTextInput(props: any) {
  const { placeholder, value, onChange, defaultValue }: any = props
  return (
    <div className="braft_editor">
      <ReactWEditor
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        onChange={(newHtml: any) => {
          onChange && onChange({ newHtml })
        }}
        config={{
          pasteFilterStyle: false,
          uploadFileName: 'file',
          uploadImgMaxLength: 5,
          uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
          showLinkImg: false,
          //关闭插入网络视频按钮
          showLinkVideo: false,
          uploadImgShowBase64: true,
          //自定义图片上传
          customUploadImg: async (resultFiles: Array<File>, insertImgFn: Function) => {
            for (let index = 0; index < resultFiles.length; index++) {
              const file = resultFiles[index]
              try {
                message.loading('图片上传中', 0)
                let img = await requestFile(UPLOAD_SERVER_HOME, file)
                if (img) {
                  //如果接口返回值，销毁上一条loading状态message
                  message.destroy()
                }
                let { url } = img
                message.success('图片上传成功！')
                insertImgFn(url)
              } catch (e) {
                message.error('图片上传异常，请重试！')
              }
            }
            return false
          },
          //自定义上传视频
          customUploadVideo: async (resultFiles: Array<File>, insertVideoFn: Function) => {
            for (let index = 0; index < resultFiles.length; index++) {
              const file = resultFiles[index]
              try {
                message.loading('视频上传中', 0)
                let video = await requestFile(UPLOAD_SERVER_HOME, file)
                if (video) {
                  //如果接口返回值，销毁上一条loading状态message
                  message.destroy()
                }
                let { url } = video
                message.success('视频上传成功！')
                insertVideoFn(url)
              } catch (e) {
                message.error('视频上传异常，请重试！')
              }
            }
            return false
          },
        }}
      />
    </div>
  )
}
