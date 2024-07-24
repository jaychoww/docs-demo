# 多文档版本管理演示
## 已实现
* 通过分支管理不同文档
* 通过commit log/PR log 自动版本管理
* 自动生成CHANGELOG
* 自动同步swagger文档的版本号

## 使用方法
版本命名规范: v{major}.{minor}.{patch}-{channel}

PR时, 使用以下语法:
```
<action>: <PR message>
```
支持以下动作:
* break {major}
* feat  {minor}
* perf  {patch}
* fix   {patch}
* docs  {patch}

example:
```
break: drop get:api/v1/complex
```
这个PR将会升级一个major版本
```
feat: add new api
```
这个PR将会升级一个minor版本

```
fix: get:api/v1/complex
```
这个PR将会升级一个patch版本


## TODO
* 发布到confluence