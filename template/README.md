## spotlight-templates-san
spotlight scaffold template for san<br>

## Use：

     spotlight init san my-project

     cd my-project

     npm install

     npm run dev

     npm run build

此模板是san<br>
This template is base on webpack, support for <a href="https://ecomfe.github.io/san/" title="San">San</a> <br>

1.配置在build/config.js 当中；<br>
  Configures in build/config.js <br><br>

2.此模板运行会报错，原因是san-mui有缺陷，<a href="https://github.com/ecomfe/san-mui/issues/69" title="issues">查看异常</a>，修改之后就正常，san-mui有其他异常请给他们提issue; <br>
  This template will be error when you run it，because san-mui has some bugs, <a href="https://github.com/ecomfe/san-mui/issues/69" title="issues">look bugs</a>, fix it by yourself. If you found another bug in san-mui make issue to them<br><br>

3.执行build命令，涉及到san-mui的将直接报错，所以想用使用san还是自己写组件吧; <br>
   When build you project，you will be find a lot of error by san-mui, so make components by youself;<br><br>

4.关于IE6，san官方是明确说支持的，可以参考我的<a href="https://github.com/yuminjustin/spotlight-templates-backbone" title="backbone">backbone</a>模板对配置文件做修改<br>
  About IE6 , san official document say is support, so you can edit configures files just like my templates for <a href="https://github.com/yuminjustin/spotlight-templates-backbone" title="backbone">backbone</a>

enjoy!
