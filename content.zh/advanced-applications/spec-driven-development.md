---
title: 规格驱动开发
weight: 3
---

## 规格驱动开发（Spec-Driven Development）

规格驱动开发是一种使用自然语言规格说明来驱动代码生成的开发方法。

### 什么是规格驱动开发

规格驱动开发（SDD）是：
- 用自然语言描述需求
- AI 将规格转换为代码
- 迭代优化规格和实现
- 规格即文档

### 核心概念

#### 1. 规格说明（Specification）

**好的规格**：
```
功能：用户注册

输入：
- 用户名（字符串，3-20字符，字母数字下划线）
- 邮箱（有效邮箱格式）
- 密码（字符串，至少8字符，包含大小写字母和数字）

处理：
1. 验证输入格式
2. 检查用户名是否已存在
3. 检查邮箱是否已注册
4. 密码使用 bcrypt 加密
5. 保存到数据库

输出：
- 成功：返回用户ID和token
- 失败：返回错误信息

错误处理：
- 用户名已存在：返回 "用户名已被使用"
- 邮箱已注册：返回 "邮箱已被注册"
- 验证失败：返回具体验证错误
```

#### 2. 规格到代码转换

**转换流程**：
```
自然语言规格 → AI 分析 → 代码结构 → 代码生成 → 测试生成
```

**示例**：
```python
# 规格
spec = """
创建一个用户服务类，包含：
- 用户注册方法
- 用户登录方法
- 获取用户信息方法
"""

# AI 生成代码
code = ai_generate_from_spec(spec)
```

#### 3. 迭代优化

**流程**：
1. 编写初始规格
2. 生成代码
3. 测试和验证
4. 优化规格
5. 重新生成

### 规格编写规范

#### 1. 结构化格式

**推荐格式**：
```yaml
功能名称: 用户注册

输入:
  参数1:
    类型: string
    约束: [约束条件]
    示例: 示例值
  
  参数2:
    类型: int
    约束: [约束条件]
    示例: 示例值

处理逻辑:
  - 步骤1描述
  - 步骤2描述
  - 步骤3描述

输出:
  成功:
    类型: object
    字段:
      - 字段1: 类型
      - 字段2: 类型
  
  失败:
    错误码: 错误信息

边界情况:
  - 情况1: 处理方式
  - 情况2: 处理方式
```

#### 2. 清晰明确

**好的规格**：
```
计算订单总价：
- 遍历订单项
- 计算每个订单项的小计（单价 × 数量）
- 应用折扣（如果有）
- 计算税费（小计 × 税率）
- 返回总价（小计 + 税费 - 折扣）
```

**不好的规格**：
```
计算订单价格
```

#### 3. 包含示例

**示例**：
```
功能：验证邮箱格式

有效示例：
- user@example.com
- test.user@domain.co.uk
- user+tag@example.com

无效示例：
- invalid.email
- @example.com
- user@
- user..name@example.com
```

### 实现方法

#### 方法 1：直接生成

**流程**：
```python
def spec_to_code(spec):
    # 1. 分析规格
    analysis = ai_analyze_spec(spec)
    
    # 2. 生成代码结构
    structure = ai_design_structure(analysis)
    
    # 3. 生成实现
    code = ai_generate_implementation(structure)
    
    # 4. 生成测试
    tests = ai_generate_tests(spec, code)
    
    return code, tests
```

#### 方法 2：分步骤生成

**流程**：
```python
def stepwise_generation(spec):
    # 步骤1：生成接口
    interface = ai_generate_interface(spec)
    
    # 步骤2：生成数据模型
    models = ai_generate_models(spec)
    
    # 步骤3：生成业务逻辑
    logic = ai_generate_logic(spec, models)
    
    # 步骤4：生成 API
    api = ai_generate_api(spec, logic)
    
    # 步骤5：生成测试
    tests = ai_generate_tests(spec, api)
    
    return {
        "interface": interface,
        "models": models,
        "logic": logic,
        "api": api,
        "tests": tests
    }
```

#### 方法 3：模板驱动

**流程**：
```python
def template_based_generation(spec):
    # 1. 选择模板
    template = select_template(spec.type)
    
    # 2. 填充模板
    code = fill_template(template, spec)
    
    # 3. 优化代码
    optimized = ai_optimize_code(code)
    
    return optimized
```

### 工具和框架

#### Cursor Composer

**使用方式**：
```
在 Composer 中描述功能需求，AI 会：
1. 分析需求
2. 生成代码结构
3. 实现功能
4. 生成测试
```

#### GitHub Copilot

**使用方式**：
```
在注释中编写规格：
# 功能：用户认证
# 输入：用户名、密码
# 输出：token 或错误信息
# 要求：使用 JWT，密码加密

def authenticate_user(username, password):
    # Copilot 会根据注释生成实现
```

#### LangChain

**实现示例**：
```python
from langchain import LLMChain, PromptTemplate

spec_template = PromptTemplate(
    input_variables=["specification"],
    template="""
    根据以下规格生成 Python 代码：
    
    规格：
    {specification}
    
    要求：
    1. 包含完整的类型提示
    2. 添加文档字符串
    3. 包含错误处理
    4. 遵循 PEP 8 规范
    
    代码：
    """
)

chain = LLMChain(llm=llm, prompt=spec_template)
code = chain.run(specification=spec)
```

### 实践案例

#### 案例 1：API 端点生成

**规格**：
```
创建用户管理 API：

端点1：POST /api/users
- 功能：创建用户
- 输入：{name, email, password}
- 输出：{id, name, email}
- 错误：400（验证失败），409（用户已存在）

端点2：GET /api/users/{id}
- 功能：获取用户信息
- 输入：用户ID
- 输出：{id, name, email, created_at}
- 错误：404（用户不存在）

端点3：PUT /api/users/{id}
- 功能：更新用户信息
- 输入：用户ID，{name?, email?}
- 输出：更新后的用户信息
- 错误：404（用户不存在），400（验证失败）
```

**生成结果**：
- FastAPI 路由定义
- 数据模型（Pydantic）
- 业务逻辑
- 错误处理
- 单元测试

#### 案例 2：数据处理管道

**规格**：
```
创建数据处理管道：

输入：CSV 文件路径
处理：
1. 读取 CSV 文件
2. 验证数据格式
3. 清洗数据（去除空值、格式化）
4. 转换数据（类型转换、计算字段）
5. 保存到数据库

错误处理：
- 文件不存在：记录错误并返回
- 格式错误：记录错误行并继续
- 数据库错误：回滚事务
```

#### 案例 3：测试用例生成

**规格**：
```
为以下函数生成测试用例：

函数：calculate_discount(price, discount_rate, is_member)

测试场景：
1. 正常情况：普通用户，10%折扣
2. 会员用户：额外5%折扣
3. 边界情况：价格为0
4. 边界情况：折扣率为0
5. 边界情况：折扣率超过100%
6. 错误情况：价格为负数
7. 错误情况：折扣率为负数
```

### 最佳实践

#### 1. 规格编写

- ✅ 使用结构化格式
- ✅ 包含输入输出说明
- ✅ 描述处理逻辑
- ✅ 说明错误处理
- ✅ 提供示例

#### 2. 迭代优化

- ✅ 从简单规格开始
- ✅ 逐步增加细节
- ✅ 根据生成结果调整
- ✅ 持续改进

#### 3. 验证和测试

- ✅ 生成后立即测试
- ✅ 验证边界情况
- ✅ 检查错误处理
- ✅ 性能测试

#### 4. 文档同步

- ✅ 规格即文档
- ✅ 保持规格更新
- ✅ 代码变更同步更新规格

### 优势与挑战

#### 优势

- **快速开发**：从规格直接生成代码
- **一致性**：规格确保实现一致
- **文档化**：规格本身就是文档
- **可维护**：修改规格即可更新代码

#### 挑战

- **规格质量**：需要编写清晰的规格
- **复杂逻辑**：复杂业务逻辑难以描述
- **调试困难**：生成的代码可能难以理解
- **过度依赖**：可能降低编程能力

### 相关资源

- [Spec-Driven Development Guide](https://www.spec-driven.dev)
- [API Specification Formats](https://swagger.io/specification/)
- [OpenAPI Specification](https://www.openapis.org)
- [Behavior-Driven Development](https://cucumber.io/docs/bdd/)
