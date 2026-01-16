---
title: 故障排除
weight: 4
---

## AI 编程工具故障排除

### 常见问题分类

#### 1. 安装和配置问题

#### 问题：Cursor 无法启动

**症状**：
- 启动后立即崩溃
- 显示错误信息
- 无法打开文件

**解决方案**：

1. **检查系统要求**
   ```bash
   # 检查 Node.js 版本
   node --version  # 需要 >= 16.0.0
   
   # 检查 Python 版本（如需要）
   python --version
   ```

2. **清理缓存**
   ```bash
   # Windows
   %APPDATA%\Cursor\Cache
   
   # macOS
   ~/Library/Application Support/Cursor/Cache
   
   # Linux
   ~/.config/Cursor/Cache
   ```

3. **重新安装**
   - 完全卸载
   - 清理注册表/配置文件
   - 重新下载安装

#### 问题：API 密钥配置失败

**症状**：
- 提示 API 密钥无效
- 无法连接 AI 服务
- 功能不可用

**解决方案**：

1. **检查 API 密钥格式**
   ```bash
   # OpenAI
   sk-...（以 sk- 开头）
   
   # Anthropic
   sk-ant-...（以 sk-ant- 开头）
   ```

2. **验证 API 密钥**
   ```python
   import openai
   openai.api_key = "your-key"
   try:
       openai.Model.list()
       print("API 密钥有效")
   except Exception as e:
       print(f"错误: {e}")
   ```

3. **检查环境变量**
   ```bash
   # 设置环境变量
   export OPENAI_API_KEY="your-key"
   
   # 或在 .env 文件中
   OPENAI_API_KEY=your-key
   ```

#### 问题：代码库索引失败

**症状**：
- AI 不理解项目结构
- 补全不准确
- 跨文件引用失败

**解决方案**：

1. **检查索引配置**
   ```json
   {
     "cursor.index.enabled": true,
     "cursor.index.maxFiles": 10000
   }
   ```

2. **手动重建索引**
   - 打开命令面板（Ctrl/Cmd + Shift + P）
   - 搜索 "Rebuild Index"
   - 等待索引完成

3. **检查文件大小**
   - 排除大文件
   - 排除 node_modules
   - 只索引源代码

### 2. 功能使用问题

#### 问题：AI 补全不准确

**症状**：
- 生成的代码不符合需求
- 代码有错误
- 风格不一致

**解决方案**：

1. **改进提示词**
   ```
   ❌ 不好的提示词：
   "写个函数"
   
   ✅ 好的提示词：
   "创建一个 Python 函数，接收用户列表，返回按年龄排序的用户，使用 type hints"
   ```

2. **提供更多上下文**
   - 在注释中描述需求
   - 提供示例代码
   - 说明项目规范

3. **使用 .cursorrules**
   ```
   项目使用 Python 3.9+
   遵循 PEP 8 规范
   使用 type hints
   添加文档字符串
   ```

#### 问题：Composer 生成代码不符合要求

**症状**：
- 生成的文件不对
- 功能不完整
- 代码风格不一致

**解决方案**：

1. **更详细地描述需求**
   ```
   ❌ "添加用户功能"
   
   ✅ "创建用户管理模块，包括：
   - User 模型（id, username, email, password）
   - 注册 API（POST /api/users）
   - 登录 API（POST /api/auth/login）
   - 使用 JWT 认证"
   ```

2. **分步骤描述**
   ```
   第一步：创建数据模型
   第二步：实现业务逻辑
   第三步：创建 API 路由
   第四步：添加测试
   ```

3. **提供参考代码**
   ```
   参考以下代码风格：
   [提供示例代码]
   
   在此基础上实现新功能
   ```

#### 问题：响应速度慢

**症状**：
- AI 响应需要很长时间
- 补全延迟
- 超时错误

**解决方案**：

1. **使用更快的模型**
   ```json
   {
     "cursor.ai.model": "gpt-3.5-turbo"  // 而不是 gpt-4
   }
   ```

2. **减少上下文大小**
   - 只包含必要的代码
   - 排除大文件
   - 限制 token 数量

3. **检查网络连接**
   ```bash
   # 测试 API 连接
   curl https://api.openai.com/v1/models
   ```

4. **使用本地模型**
   - 安装 Ollama
   - 配置 Continue
   - 使用本地模型

### 3. 性能和成本问题

#### 问题：API 调用成本过高

**症状**：
- 月度账单超出预算
- 频繁的 API 调用
- 使用昂贵的模型

**解决方案**：

1. **监控使用情况**
   ```python
   # 记录 API 调用
   import logging
   
   logging.basicConfig(level=logging.INFO)
   logger = logging.getLogger(__name__)
   
   def track_api_call(model, tokens):
       logger.info(f"Model: {model}, Tokens: {tokens}")
   ```

2. **优化提示词**
   - 精简提示词
   - 减少 token 使用
   - 使用模板

3. **设置使用限制**
   ```json
   {
     "cursor.ai.dailyLimit": 100,
     "cursor.ai.maxTokens": 2000
   }
   ```

4. **使用成本较低的模型**
   - GPT-3.5 而不是 GPT-4
   - Claude Haiku 而不是 Opus
   - 本地模型

#### 问题：内存占用过高

**症状**：
- 系统变慢
- 内存不足错误
- IDE 卡顿

**解决方案**：

1. **限制索引文件数量**
   ```json
   {
     "cursor.index.maxFiles": 5000
   }
   ```

2. **排除不必要的文件**
   ```json
   {
     "cursor.index.exclude": [
       "node_modules/**",
       "dist/**",
       "*.min.js"
     ]
   }
   ```

3. **定期清理缓存**
   - 清理索引缓存
   - 清理临时文件
   - 重启 IDE

### 4. 兼容性问题

#### 问题：与扩展冲突

**症状**：
- 功能冲突
- 性能下降
- 错误提示

**解决方案**：

1. **禁用冲突扩展**
   - 逐个禁用扩展
   - 测试功能
   - 找出冲突源

2. **更新扩展**
   ```bash
   # 更新所有扩展
   code --list-extensions | xargs -L 1 code --install-extension
   ```

3. **检查扩展兼容性**
   - 查看扩展文档
   - 检查 GitHub Issues
   - 联系扩展作者

#### 问题：版本不兼容

**症状**：
- 功能不可用
- 错误提示
- 崩溃

**解决方案**：

1. **检查版本要求**
   - 查看工具文档
   - 检查系统版本
   - 更新到兼容版本

2. **降级或升级**
   ```bash
   # 检查当前版本
   cursor --version
   
   # 下载兼容版本
   # 从官网下载特定版本
   ```

### 5. 数据和安全问题

#### 问题：代码泄露担忧

**症状**：
- 担心代码被上传
- 隐私问题
- 合规要求

**解决方案**：

1. **使用本地模式**
   - 配置本地模型
   - 使用 Ollama
   - 禁用云服务

2. **检查隐私设置**
   ```json
   {
     "cursor.privacy.localMode": true,
     "cursor.privacy.noTelemetry": true
   }
   ```

3. **使用企业版**
   - GitHub Copilot Business（数据不用于训练）
   - Amazon Q Enterprise（数据加密）

#### 问题：API 密钥泄露

**症状**：
- 密钥被提交到 Git
- 账户被滥用
- 成本异常

**解决方案**：

1. **立即撤销密钥**
   - 登录 API 提供商
   - 撤销泄露的密钥
   - 生成新密钥

2. **检查 Git 历史**
   ```bash
   # 检查是否提交了密钥
   git log --all --full-history -- "*"
   
   # 如果发现，需要重写历史
   git filter-branch --force --index-filter \
     'git rm --cached --ignore-unmatch .env' \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **使用环境变量**
   ```bash
   # .env 文件（不提交）
   API_KEY=your-key
   
   # .gitignore
   .env
   ```

### 调试技巧

#### 1. 启用详细日志

```json
{
  "cursor.debug": true,
  "cursor.logLevel": "debug"
}
```

#### 2. 检查错误日志

**Windows**：
```
%APPDATA%\Cursor\logs
```

**macOS**：
```
~/Library/Logs/Cursor
```

**Linux**：
```
~/.config/Cursor/logs
```

#### 3. 使用开发者工具

- 打开开发者工具（Ctrl/Cmd + Shift + I）
- 查看控制台错误
- 检查网络请求
- 分析性能

### 获取帮助

#### 官方资源

- **文档**：查看官方文档
- **GitHub Issues**：报告 Bug
- **社区论坛**：寻求帮助
- **Discord/Slack**：实时支持

#### 社区资源

- **Stack Overflow**：技术问题
- **Reddit**：使用经验
- **GitHub Discussions**：功能讨论

### 相关资源

- [Cursor 故障排除](https://docs.cursor.sh/troubleshooting)
- [GitHub Copilot 帮助](https://docs.github.com/en/copilot/troubleshooting)
- [常见问题集合](https://github.com/ai-tools-faq)
