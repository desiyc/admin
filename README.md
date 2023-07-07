=== 前端 react 框架 ===

---技术栈：react + dva17 + antd v5 + pro v4 + ts ---
src 目录结构:
|-- assets //静态资源
| |-- images //图片资源，使用 index 引用
|-- Common //配置目录
| |-- action //请求函数方法名定义,包含 dva17 规则的 models 常量命名，N*,R*,E\*
| |-- config //上传地址、接口请求前缀、token 名称定义
| |-- enum //常量定义
| |-- interface //登录状态定义
|-- Common //公共组件目录
| |-- MenuFooter //页面底部
| |-- RichTextInput // 富文本组件
|-- models //models 目录
| |-- index //引用全部 models
| |-- User //基于 dva17 规范的 model，包含 namespace,state,reducer,effect
|-- pages //页面目录
