/** 只允许在src的目录里生成模板 */
const fs = require('fs')
const path = require('path')

// 模板名称
const templateName = process.argv[2]
// 配置
const config = {
  // 生成路径（默认view）
  path: '/view',
  // 生成单文件，而不是以文件夹的形式
  single: false,
  // 模板类型
  type: '0',
}

process.argv.slice(3).forEach((i) => {
  if (i.includes('=')) {
    const mapped = { true: true, false: false }
    const item = i.split('=')
    const label = item[0]
    const value = item[1]
    if (config[label] !== 'undefined') {
      config[label] = mapped[value] || value
    }
  }
})

//判断模板名称是否填写
if (!templateName) {
  console.error('请输入模板名称！')
  process.exit(1)
}

// 绝对路径
const defaultPath = `src/${config.path.replace(/^\//, '')}`
// 生成模板所在的路径
const templatePath = path.resolve(__dirname, defaultPath)
// 模板的路径
const templateDir = path.resolve(__dirname, defaultPath, templateName)

// 判断写入模板的路径是否存在
if (!fs.existsSync(templatePath)) {
  console.error(`路径：${defaultPath} 不存在`)
  process.exit(1)
}
// 判断模板名称是否已存在
if (fs.existsSync(templateDir)) {
  console.error(`模板名称 ${templateName} 已存在，请重新命名！`)
  process.exit(1)
}

// vue 模板
const vueTemplate = {
  0: `
  <script setup lang="ts">
  /* Ts */
  // import { ref } from 'vue';
  </script>

  <template>
    <div class="${templateName}">
      <!--HTML -->
    </div>
  </template>

  <style scoped>
    .${templateName} {
    }
  </style>
`,
}[config.type]

if (!vueTemplate) {
  console.error(`没有你所选择的模板类型，请重新选择！`)
  process.exit(1)
}

if (config.single) {
  fs.writeFileSync(path.join(templatePath, `${templateName}.vue`), vueTemplate)
} else {
  fs.mkdirSync(templateDir)
  fs.writeFileSync(path.join(templateDir, `index.vue`), vueTemplate)
}

console.log(
  `${templateName} 模板类型${config.type}创建成功，路径：“${templateDir}”`
)
