---
title: 客户端工具
weight: 2
---

## AI 编程客户端工具

### 命令行工具

#### OpenAI CLI

**安装**：
```bash
pip install openai-cli
```

**使用**：
```bash
# 基本使用
openai chat "写一个 Python 函数"

# 使用特定模型
openai chat -m gpt-4 "审查代码"

# 从文件读取
openai chat -f code.py "审查这个文件"
```

#### Anthropic CLI

**安装**：
```bash
pip install anthropic-cli
```

**使用**：
```bash
# 对话
anthropic chat "解释这段代码"

# 代码审查
anthropic review code.py
```

#### Aider

**安装**：
```bash
pip install aider-chat
```

**使用**：
```bash
# 启动 aider
aider

# 在 aider 中
/add file.py          # 添加文件到上下文
/run test.py          # 运行测试
/diff                 # 查看更改
```

### IDE 扩展

#### Continue (VSCode)

**安装**：
1. 在 VSCode 扩展市场搜索 "Continue"
2. 安装扩展
3. 配置 API 密钥

**功能**：
- 代码补全
- 代码生成
- 代码审查
- 问题解答

**配置**：
```json
{
  "continue.models": [
    {
      "title": "GPT-4",
      "provider": "openai",
      "model": "gpt-4",
      "apiKey": "your-key"
    }
  ]
}
```

#### Cursor

**功能**：
- AI 代码补全
- Composer（多文件编辑）
- AI 聊天
- 代码库索引

**使用**：
- `Ctrl/Cmd + K`：AI 编辑
- `Ctrl/Cmd + L`：打开聊天
- `Ctrl/Cmd + I`：Composer

#### GitHub Copilot

**安装**：
1. 在 IDE 扩展市场安装
2. 登录 GitHub 账户
3. 订阅服务

**功能**：
- 实时代码补全
- 代码生成
- 代码解释

### 桌面应用

#### ChatGPT Desktop

**功能**：
- 桌面客户端
- 快捷键支持
- 历史记录
- 多会话管理

**下载**：
- [macOS](https://github.com/lencx/ChatGPT)
- [Windows](https://github.com/lencx/ChatGPT)
- [Linux](https://github.com/lencx/ChatGPT)

#### Claude Desktop

**功能**：
- 官方桌面应用
- 文件上传
- 长上下文支持

**下载**：
- [Anthropic 官网](https://claude.ai/download)

### 浏览器扩展

#### GitHub Copilot for Browser

**功能**：
- 在浏览器中使用 Copilot
- 支持 GitHub、Stack Overflow 等网站

#### AI Code Assistant

**功能**：
- 网页代码审查
- 代码解释
- 代码优化建议

### 代码编辑器集成

#### Neovim 插件

**安装**：
```vim
" 使用 vim-plug
Plug 'github/copilot.vim'
Plug 'Exafunction/codeium.vim'
```

**配置**：
```vim
" Copilot 配置
let g:copilot_enabled = 1
let g:copilot_filetypes = {
    \ 'python': 1,
    \ 'javascript': 1,
    \ }
```

#### Emacs 集成

**安装**：
```elisp
(use-package copilot
  :hook (prog-mode . copilot-mode)
  :bind (:map copilot-completion-map
              ("<tab>" . 'copilot-accept-completion)))
```

### API 客户端库

#### Python

**OpenAI**：
```python
from openai import OpenAI
client = OpenAI(api_key="your-key")
```

**Anthropic**：
```python
import anthropic
client = anthropic.Anthropic(api_key="your-key")
```

**LangChain**：
```python
from langchain.llms import OpenAI
llm = OpenAI(temperature=0.7)
```

#### JavaScript/TypeScript

**OpenAI**：
```javascript
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: 'your-key' });
```

**Anthropic**：
```javascript
import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({ apiKey: 'your-key' });
```

#### Go

**OpenAI**：
```go
import "github.com/sashabaranov/go-openai"

client := openai.NewClient("your-api-key")
```

### 工具对比

| 工具 | 类型 | 平台 | 价格 | 特点 |
|------|------|------|------|------|
| Cursor | IDE | VSCode | 付费 | 功能强大，集成好 |
| GitHub Copilot | 扩展 | 多平台 | 付费 | 实时代码补全 |
| Continue | 扩展 | VSCode | 免费 | 开源，可自定义 |
| Aider | CLI | 命令行 | 免费 | 命令行友好 |
| Ollama | 本地 | 多平台 | 免费 | 本地运行模型 |

### 选择建议

#### 个人开发者
- **推荐**：Cursor 或 GitHub Copilot
- **原因**：功能完整，易于使用

#### 团队协作
- **推荐**：GitHub Copilot Business
- **原因**：统一工具，便于管理

#### 命令行用户
- **推荐**：Aider
- **原因**：命令行友好，Git 集成

#### 隐私敏感
- **推荐**：Ollama + Continue
- **原因**：本地运行，数据不泄露

#### 预算有限
- **推荐**：Continue + 开源模型
- **原因**：免费，功能足够

### 最佳实践

#### 1. 工具组合使用

**推荐组合**：
- IDE 扩展：日常开发
- CLI 工具：快速任务
- API 库：自定义工具

#### 2. 配置优化

**性能优化**：
- 使用本地模型减少延迟
- 配置缓存减少 API 调用
- 批量处理提高效率

#### 3. 安全考虑

**安全措施**：
- 使用环境变量存储 API 密钥
- 限制 API 调用权限
- 审查生成的代码

### 相关资源

- [Continue 文档](https://docs.continue.dev)
- [Aider 文档](https://aider.chat)
- [Ollama 文档](https://ollama.ai/docs)
- [工具对比](https://github.com/awesome-ai-tools)
