---
title: API 文档
weight: 1
---

## AI 编程相关 API 文档

### OpenAI API

#### 概述

OpenAI 提供强大的语言模型 API，支持代码生成、文本处理等任务。

#### 快速开始

**安装**：
```bash
pip install openai
```

**基本使用**：
```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "写一个 Python 函数计算斐波那契数列"}
    ]
)

print(response.choices[0].message.content)
```

#### 主要端点

**Chat Completions**
- **端点**：`POST /v1/chat/completions`
- **功能**：对话式文本生成
- **模型**：gpt-4, gpt-3.5-turbo

**Code Completions**
- **端点**：`POST /v1/completions`
- **功能**：代码补全
- **模型**：code-davinci-002

#### 代码生成示例

```python
def generate_code(prompt, model="gpt-4"):
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": "你是一位经验丰富的 Python 开发工程师"},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    return response.choices[0].message.content
```

#### 相关资源

- [OpenAI API 文档](https://platform.openai.com/docs)
- [Python SDK](https://github.com/openai/openai-python)
- [API 参考](https://platform.openai.com/docs/api-reference)

### Anthropic API (Claude)

#### 概述

Anthropic 提供 Claude 系列模型的 API，适合代码审查、长文档处理等任务。

#### 快速开始

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
        {"role": "user", "content": "审查以下代码..."}
    ]
)

print(message.content[0].text)
```

#### 主要特性

- **长上下文**：支持 200K tokens
- **安全性**：内置安全机制
- **代码能力**：强大的代码理解和生成

#### 代码审查示例

```python
def review_code(code, model="claude-3-opus-20240229"):
    message = client.messages.create(
        model=model,
        max_tokens=4000,
        messages=[
            {
                "role": "user",
                "content": f"请审查以下代码，检查潜在问题：\n\n{code}"
            }
        ]
    )
    return message.content[0].text
```

#### 相关资源

- [Anthropic API 文档](https://docs.anthropic.com)
- [Python SDK](https://github.com/anthropics/anthropic-sdk-python)
- [API 参考](https://docs.anthropic.com/claude/reference)

### Google AI API

#### 概述

Google 提供 Gemini 和 PaLM 模型的 API。

#### 快速开始

**安装**：
```bash
pip install google-generativeai
```

**基本使用**：
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("写一个 Python 函数")

print(response.text)
```

#### 主要模型

- **Gemini Pro**：通用模型，支持多模态
- **PaLM 2**：代码生成优化

#### 相关资源

- [Google AI Studio](https://makersuite.google.com)
- [Python SDK](https://github.com/google/generative-ai-python)
- [API 文档](https://ai.google.dev/docs)

### 开源模型 API

#### Ollama

**本地运行模型**：
```bash
# 安装
curl -fsSL https://ollama.ai/install.sh | sh

# 运行模型
ollama run llama2
```

**API 使用**：
```python
import requests

response = requests.post(
    'http://localhost:11434/api/generate',
    json={
        'model': 'llama2',
        'prompt': '写一个 Python 函数'
    }
)
```

#### Hugging Face API

**使用 Transformers**：
```python
from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")

result = generator("写一个函数", max_length=100)
```

**使用 Inference API**：
```python
import requests

API_URL = "https://api-inference.huggingface.co/models/gpt2"
headers = {"Authorization": "Bearer your-token"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({"inputs": "写一个 Python 函数"})
```

### API 对比

| API | 模型 | 上下文 | 代码能力 | 价格 |
|-----|------|--------|---------|------|
| OpenAI | GPT-4 | 128K | ⭐⭐⭐⭐⭐ | 高 |
| Anthropic | Claude 3 | 200K | ⭐⭐⭐⭐⭐ | 高 |
| Google AI | Gemini | 32K | ⭐⭐⭐⭐ | 中 |
| Ollama | Llama 2/3 | 8K | ⭐⭐⭐⭐ | 免费 |

### 最佳实践

#### 1. 错误处理

```python
try:
    response = client.chat.completions.create(...)
except openai.RateLimitError:
    # 处理速率限制
    time.sleep(60)
except openai.APIError as e:
    # 处理 API 错误
    print(f"API 错误: {e}")
```

#### 2. 成本控制

```python
# 限制 token 数量
response = client.chat.completions.create(
    model="gpt-3.5-turbo",  # 使用更便宜的模型
    messages=messages,
    max_tokens=500  # 限制输出长度
)
```

#### 3. 重试机制

```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def call_api(prompt):
    return client.chat.completions.create(...)
```

#### 4. 流式响应

```python
stream = client.chat.completions.create(
    model="gpt-4",
    messages=messages,
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

### 相关资源

- [OpenAI API 文档](https://platform.openai.com/docs)
- [Anthropic API 文档](https://docs.anthropic.com)
- [Google AI 文档](https://ai.google.dev/docs)
- [Hugging Face 文档](https://huggingface.co/docs)
