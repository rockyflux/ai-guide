---
title: Cursor 高级技巧
weight: 2
---

## Cursor 高级技巧和实战

### 高级配置技巧

#### 1. 多模型配置

**配置多个模型**：
```json
{
  "cursor.ai.models": {
    "default": "gpt-4",
    "fast": "gpt-3.5-turbo",
    "code": "claude-3-opus",
    "review": "claude-3-sonnet"
  },
  "cursor.ai.autoSwitch": true
}
```

**使用场景**：
- 快速补全：使用 GPT-3.5
- 复杂任务：使用 GPT-4
- 代码审查：使用 Claude

#### 2. 项目特定配置

**`.cursorrules` 高级配置**：
```
项目类型：全栈 Web 应用
技术栈：
- 前端：React + TypeScript
- 后端：Node.js + Express
- 数据库：PostgreSQL

代码规范：
- 使用 ESLint + Prettier
- 遵循 Airbnb 风格指南
- 函数式编程优先
- 完整的类型定义

架构模式：
- 分层架构（Controller/Service/Repository）
- RESTful API 设计
- 错误处理中间件
- 统一响应格式

测试要求：
- 单元测试覆盖率 > 80%
- 集成测试关键路径
- E2E 测试主要功能
```

#### 3. 代码库索引优化

**优化索引配置**：
```json
{
  "cursor.index.include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "lib/**/*.ts"
  ],
  "cursor.index.exclude": [
    "node_modules/**",
    "dist/**",
    "*.test.ts"
  ],
  "cursor.index.maxFiles": 10000,
  "cursor.index.maxSize": "100MB"
}
```

### 实战场景

#### 场景 1：重构大型代码库

**步骤**：

1. **分析代码结构**
   ```
   在 Composer 中输入：
   "分析这个项目的代码结构，识别可以重构的部分"
   ```

2. **制定重构计划**
   ```
   "基于分析结果，制定详细的重构计划，包括：
   - 重构优先级
   - 影响范围
   - 风险评估
   - 实施步骤"
   ```

3. **逐步重构**
   ```
   "按照重构计划，先重构 [模块名]，保持功能不变"
   ```

4. **验证和测试**
   ```
   "为重构后的代码生成测试，确保功能正确"
   ```

#### 场景 2：从零创建完整功能

**示例：创建用户认证系统**

1. **在 Composer 中描述需求**：
   ```
   创建一个完整的用户认证系统，包括：
   
   功能：
   - 用户注册（邮箱验证）
   - 用户登录（JWT token）
   - 密码重置
   - 用户信息管理
   
   技术要求：
   - 使用 FastAPI
   - SQLAlchemy ORM
   - PostgreSQL 数据库
   - JWT 认证
   - 密码加密（bcrypt）
   - 输入验证（Pydantic）
   
   文件结构：
   - models.py: 数据模型
   - schemas.py: Pydantic schemas
   - auth.py: 认证逻辑
   - routes.py: API 路由
   - database.py: 数据库配置
   - main.py: 应用入口
   ```

2. **AI 生成代码结构**

3. **迭代完善**：
   ```
   "添加以下功能：
   - 刷新 token
   - 用户角色管理
   - 登录历史记录"
   ```

#### 场景 3：调试复杂问题

**步骤**：

1. **描述问题**：
   ```
   问题：用户登录后，有时会返回 500 错误
   
   相关代码：
   [选中相关代码]
   
   错误日志：
   [粘贴错误日志]
   
   请分析可能的原因
   ```

2. **AI 分析问题**

3. **生成修复方案**：
   ```
   "基于分析，生成修复代码"
   ```

4. **验证修复**：
   ```
   "为修复后的代码生成测试用例"
   ```

#### 场景 4：性能优化

**示例**：

1. **识别性能瓶颈**：
   ```
   "分析以下代码的性能问题：
   [提供代码]
   
   重点关注：
   - 数据库查询优化
   - 算法复杂度
   - 内存使用"
   ```

2. **生成优化方案**：
   ```
   "提供优化方案和优化后的代码"
   ```

3. **性能测试**：
   ```
   "生成性能测试脚本，对比优化前后"
   ```

### 高级提示词技巧

#### 1. 上下文管理

**多文件上下文**：
```
在 Composer 中：
"参考以下文件：
- src/models/User.ts
- src/services/UserService.ts
- src/routes/userRoutes.ts

基于这些文件，添加用户权限管理功能"
```

#### 2. 迭代式开发

**逐步完善**：
```
第一步：
"创建基本的用户模型"

第二步：
"添加用户验证逻辑"

第三步：
"添加用户权限系统"

第四步：
"添加用户角色管理"
```

#### 3. 代码审查提示词

**详细审查**：
```
请从以下角度审查代码：

1. 代码质量
   - 可读性
   - 可维护性
   - 代码风格

2. 安全性
   - SQL 注入风险
   - XSS 风险
   - 认证授权

3. 性能
   - 算法复杂度
   - 数据库查询
   - 内存使用

4. 最佳实践
   - 设计模式
   - SOLID 原则
   - DRY 原则

代码：
[提供代码]
```

### 故障排除

#### 问题 1：AI 补全不准确

**原因**：
- 上下文不足
- 代码库未索引
- 提示词不清晰

**解决方案**：
1. 启用代码库索引
2. 在注释中提供更多上下文
3. 使用 `.cursorrules` 定义项目规范

#### 问题 2：Composer 生成代码不符合要求

**解决方案**：
1. 更详细地描述需求
2. 提供示例代码
3. 分步骤描述
4. 使用 `.cursorrules` 定义规范

#### 问题 3：响应速度慢

**解决方案**：
1. 使用更快的模型（GPT-3.5）
2. 减少上下文大小
3. 优化提示词长度
4. 检查网络连接

#### 问题 4：API 调用失败

**解决方案**：
1. 检查 API 密钥
2. 检查网络连接
3. 检查 API 配额
4. 查看错误日志

### 效率提升技巧

#### 1. 快捷键组合

**常用组合**：
- `Ctrl/Cmd + K` → 快速编辑
- `Ctrl/Cmd + L` → 打开聊天
- `Ctrl/Cmd + I` → Composer
- `Ctrl/Cmd + Shift + P` → 命令面板

#### 2. 代码片段模板

**创建自定义片段**：
```json
{
  "AI Function": {
    "prefix": "aifunc",
    "body": [
      "// AI 生成函数",
      "function ${1:functionName}(${2:params}) {",
      "  ${3:// TODO: AI will complete this}",
      "}"
    ]
  }
}
```

#### 3. 批量操作

**多文件编辑**：
```
在 Composer 中：
"同时修改以下文件，添加错误处理：
- src/services/UserService.ts
- src/services/ProductService.ts
- src/services/OrderService.ts"
```

### 团队协作

#### 1. 共享配置

**`.cursorrules` 版本控制**：
```bash
# 提交到 Git
git add .cursorrules
git commit -m "Add Cursor rules for team"
```

#### 2. 代码审查流程

**集成到工作流**：
1. 开发时使用 Cursor
2. 提交前使用 AI 审查
3. PR 中使用 AI 辅助审查
4. 合并后持续优化

#### 3. 知识分享

**建立提示词库**：
- 常用提示词模板
- 项目特定提示词
- 最佳实践文档

### 性能优化

#### 1. 减少 API 调用

**策略**：
- 使用本地缓存
- 批量处理请求
- 复用上下文

#### 2. 优化提示词

**技巧**：
- 精简提示词
- 使用模板
- 结构化输出

#### 3. 模型选择

**根据任务选择**：
- 简单补全：GPT-3.5
- 复杂生成：GPT-4
- 代码审查：Claude

### 相关资源

- [Cursor 高级文档](https://docs.cursor.sh/advanced)
- [提示词工程指南](https://www.promptingguide.ai)
- [实战案例集合](https://github.com/cursor-examples)
