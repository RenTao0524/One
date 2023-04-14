## 基于lerna多包开发仓库
[lerna文档](https://lerna.js.org/)

### 1. packages新增模块命令
```bash
lerna create <name> [loc]

Create a new lerna-managed package
```

### 2. 执行packages模块脚本
```bash
lerna run test --scope ugc
```

### 3. packages子模块中添加依赖
```bash
lerna add <package>[@version] [--dev] [--exact] [--peer]
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
lerna add module-1 packages/prefix-*

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Install module-1 to module-2 in peerDependencies
lerna add module-1 --scope=module-2 --peer

# Install module-1 in all modules except module-1
lerna add module-1

# Install babel-core in all modules
lerna add babel-core
```

```bash
pnpm add ./vueUse --save
```
