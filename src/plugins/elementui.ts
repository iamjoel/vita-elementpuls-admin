import {ElButton,ElSwitch,ElForm,ElFormItem,ElInput,ElRow,ElCol,ElLoading,ElMessage} from 'element-plus'

export default (app:any) =>{
  app.use(ElButton);
  app.use(ElSwitch)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElLoading)
  app.use(ElMessage)
}
