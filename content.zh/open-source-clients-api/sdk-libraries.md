---
title: SDK 和库
weight: 3
---

## AI 编程 SDK 和库

### Python SDK

#### OpenAI Python SDK

**安装**：
```bash
pip install openai
```

**基本使用**：
```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

# 聊天完成
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "写一个 Python 函数"}
    ]
)
```

**高级功能**：
```python
# 流式响应
stream = client.chat.completions.create(
    model="gpt-4",
    messages=messages,
    stream=True
)

# 函数调用
functions = [
    {
        "name": "get_weather",
        "description": "获取天气信息",
        "parameters": {...}
    }
]

response = client.chat.completions.create(
    model="gpt-4",
    messages=messages,
    functions=functions
)
```

**文档**：https://github.com/openai/openai-python

#### Anthropic Python SDK

**安装**：
```bash
pip install anthropic
```

**基本使用**：
```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "审查代码"}
    ]
)
```

**文档**：https://github.com/anthropics/anthropic-sdk-python

#### LangChain

**安装**：
```bash
pip install langchain
```

**基本使用**：
```python
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0.7)

prompt = PromptTemplate(
    input_variables=["code"],
    template="审查以下代码：{code}"
)

chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run(code="def func(): pass")
```

**文档**：https://python.langchain.com

#### LlamaIndex

**安装**：
```bash
pip install llama-index
```

**基本使用**：
```python
from llama_index import VectorStoreIndex, SimpleDirectoryReader

# 加载文档
documents = SimpleDirectoryReader('data').load_data()

# 创建索引
index = VectorStoreIndex.from_documents(documents)

# 查询
query_engine = index.as_query_engine()
response = query_engine.query("代码相关问题")
```

**文档**：https://docs.llamaindex.ai

### JavaScript/TypeScript SDK

#### OpenAI Node.js SDK

**安装**：
```bash
npm install openai
```

**基本使用**：
```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "写一个函数" }],
});
```

**文档**：https://github.com/openai/openai-node

#### Anthropic TypeScript SDK

**安装**：
```bash
npm install @anthropic-ai/sdk
```

**基本使用**：
```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await anthropic.messages.create({
  model: 'claude-3-opus-20240229',
  max_tokens: 1024,
  messages: [{ role: 'user', content: '审查代码' }],
});
```

**文档**：https://github.com/anthropics/anthropic-sdk-typescript

#### LangChain.js

**安装**：
```bash
npm install langchain
```

**基本使用**：
```typescript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0.7 });

const response = await chat.call([
  new HumanMessage("写一个 TypeScript 函数"),
]);
```

**文档**：https://js.langchain.com

### Go SDK

#### OpenAI Go SDK

**安装**：
```bash
go get github.com/sashabaranov/go-openai
```

**基本使用**：
```go
package main

import (
    "context"
    "github.com/sashabaranov/go-openai"
)

func main() {
    client := openai.NewClient("your-api-key")
    
    resp, err := client.CreateChatCompletion(
        context.Background(),
        openai.ChatCompletionRequest{
            Model: openai.GPT4,
            Messages: []openai.ChatCompletionMessage{
                {
                    Role:    openai.ChatMessageRoleUser,
                    Content: "写一个 Go 函数",
                },
            },
        },
    )
}
```

**文档**：https://github.com/sashabaranov/go-openai

### Rust SDK

#### OpenAI Rust SDK

**安装**：
```toml
[dependencies]
openai = "0.3"
```

**基本使用**：
```rust
use openai::OpenAI;

let client = OpenAI::new("your-api-key");

let response = client
    .chat()
    .create(/* ... */)
    .await?;
```

**文档**：https://github.com/64bit/async-openai

### 工具库

#### Promptify

**功能**：提示词管理和优化

**安装**：
```bash
pip install promptify
```

**使用**：
```python
from promptify import Prompter

prompter = Prompter()
prompt = prompter.generate("代码生成", context={...})
```

#### LangSmith

**功能**：LangChain 应用调试和监控

**使用**：
```python
from langsmith import traceable

@traceable
def my_function():
    # 自动追踪和监控
    pass
```

### SDK 对比

| SDK | 语言 | 特点 | 文档 |
|-----|------|------|------|
| OpenAI Python | Python | 官方，功能完整 | ⭐⭐⭐⭐⭐ |
| Anthropic Python | Python | 官方，Claude 支持 | ⭐⭐⭐⭐⭐ |
| LangChain | Python/JS | 框架，工具丰富 | ⭐⭐⭐⭐⭐ |
| OpenAI Node.js | TypeScript | 官方，类型支持 | ⭐⭐⭐⭐⭐ |
| go-openai | Go | 社区，功能完整 | ⭐⭐⭐⭐ |

### 最佳实践

#### 1. 错误处理

```python
from openai import OpenAI, APIError, RateLimitError

try:
    response = client.chat.completions.create(...)
except RateLimitError:
    # 处理速率限制
    time.sleep(60)
except APIError as e:
    # 处理 API 错误
    print(f"错误: {e}")
```

#### 2. 异步使用

```python
import asyncio
from openai import AsyncOpenAI

async def main():
    client = AsyncOpenAI()
    
    tasks = [
        client.chat.completions.create(...),
        client.chat.completions.create(...),
    ]
    
    results = await asyncio.gather(*tasks)
```

#### 3. 重试机制

```python
from tenacity import retry, stop_after_attempt

@retry(stop=stop_after_attempt(3))
def call_api():
    return client.chat.completions.create(...)
```

#### 4. 成本控制

```python
# 使用更便宜的模型
response = client.chat.completions.create(
    model="gpt-3.5-turbo",  # 而不是 gpt-4
    messages=messages,
    max_tokens=500  # 限制输出
)
```

### 相关资源

- [OpenAI Python SDK](https://github.com/openai/openai-python)
- [Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)
- [LangChain 文档](https://python.langchain.com)
- [SDK 对比](https://github.com/awesome-ai-sdks)
