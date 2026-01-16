---
title: 实战案例
weight: 4
---

## 提示词实战案例

### 案例 1：生成 REST API

#### 需求

创建一个用户管理的 REST API，包含 CRUD 操作。

#### 提示词

```
作为全栈开发工程师，请创建一个完整的用户管理 REST API。

技术栈：
- 框架：FastAPI
- 数据库：PostgreSQL + SQLAlchemy
- 认证：JWT
- 验证：Pydantic

功能要求：
1. 用户注册
   - 输入：username, email, password
   - 验证：邮箱格式、密码强度
   - 输出：用户信息和 token

2. 用户登录
   - 输入：email, password
   - 输出：JWT token

3. 获取用户信息
   - 需要认证
   - 输出：用户详细信息

4. 更新用户信息
   - 需要认证
   - 输入：可更新字段
   - 输出：更新后的用户信息

5. 删除用户
   - 需要认证
   - 软删除

代码要求：
- 完整的类型提示
- 详细的文档字符串
- 错误处理
- 日志记录
- 单元测试（覆盖率 > 80%）

请提供：
1. 数据库模型
2. Pydantic schemas
3. 业务逻辑
4. API 路由
5. 认证中间件
6. 测试用例
7. 使用示例
```

#### 生成结果

AI 会生成完整的项目结构，包括所有必要的文件。

### 案例 2：代码重构

#### 需求

重构一个复杂的函数，提高可读性和可维护性。

#### 原始代码

```python
def process_data(data):
    result = []
    for item in data:
        if item['type'] == 'A':
            if item['status'] == 'active':
                if item['value'] > 100:
                    result.append({'id': item['id'], 'processed': True, 'category': 'high'})
                else:
                    result.append({'id': item['id'], 'processed': True, 'category': 'low'})
            else:
                result.append({'id': item['id'], 'processed': False, 'reason': 'inactive'})
        elif item['type'] == 'B':
            if item['status'] == 'active':
                result.append({'id': item['id'], 'processed': True, 'category': 'medium'})
            else:
                result.append({'id': item['id'], 'processed': False, 'reason': 'inactive'})
    return result
```

#### 提示词

```
请重构以下函数，目标：
1. 提高可读性
2. 减少嵌套层级
3. 提取重复逻辑
4. 添加类型提示
5. 添加文档字符串
6. 提高可测试性

原代码：
[粘贴代码]

要求：
- 保持功能完全一致
- 遵循 Python 最佳实践
- 使用早期返回模式
- 提取辅助函数
```

#### 重构后代码（AI 生成）

```python
from typing import List, Dict, Any, Literal

def process_data(data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    处理数据项，根据类型和状态进行分类处理。
    
    Args:
        data: 包含类型、状态和值的字典列表
        
    Returns:
        处理后的数据列表，包含处理状态和分类信息
    """
    result = []
    for item in data:
        processed_item = _process_item(item)
        if processed_item:
            result.append(processed_item)
    return result

def _process_item(item: Dict[str, Any]) -> Dict[str, Any] | None:
    """处理单个数据项"""
    if not _is_active(item):
        return {
            'id': item['id'],
            'processed': False,
            'reason': 'inactive'
        }
    
    return _process_by_type(item)

def _is_active(item: Dict[str, Any]) -> bool:
    """检查项目是否激活"""
    return item.get('status') == 'active'

def _process_by_type(item: Dict[str, Any]) -> Dict[str, Any]:
    """根据类型处理项目"""
    item_type = item.get('type')
    
    if item_type == 'A':
        return _process_type_a(item)
    elif item_type == 'B':
        return _process_type_b(item)
    
    return None

def _process_type_a(item: Dict[str, Any]) -> Dict[str, Any]:
    """处理类型 A 的项目"""
    category = 'high' if item.get('value', 0) > 100 else 'low'
    return {
        'id': item['id'],
        'processed': True,
        'category': category
    }

def _process_type_b(item: Dict[str, Any]) -> Dict[str, Any]:
    """处理类型 B 的项目"""
    return {
        'id': item['id'],
        'processed': True,
        'category': 'medium'
    }
```

### 案例 3：生成测试用例

#### 需求

为一个复杂的业务逻辑函数生成全面的测试用例。

#### 提示词

```
为以下函数生成完整的测试用例：

函数：
```python
def calculate_discount(price: float, discount_rate: float, is_member: bool, coupon_code: str | None = None) -> float:
    """
    计算商品折扣后的价格
    
    Args:
        price: 原价
        discount_rate: 折扣率（0-1）
        is_member: 是否为会员
        coupon_code: 优惠券代码（可选）
    
    Returns:
        折扣后的价格
    """
    if price <= 0:
        raise ValueError("价格必须大于 0")
    
    if not 0 <= discount_rate <= 1:
        raise ValueError("折扣率必须在 0-1 之间")
    
    base_discount = price * discount_rate
    
    if is_member:
        base_discount += price * 0.1  # 会员额外 10% 折扣
    
    if coupon_code == "SAVE20":
        base_discount += price * 0.2  # 优惠券额外 20% 折扣
    
    final_price = price - base_discount
    return max(final_price, 0)  # 价格不能为负
```

测试要求：
1. 正常情况测试
   - 普通用户，有折扣
   - 会员用户，有折扣
   - 使用优惠券

2. 边界情况测试
   - 价格为 0
   - 折扣率为 0
   - 折扣率为 1
   - 折扣后价格为 0

3. 错误情况测试
   - 价格为负数
   - 折扣率超出范围
   - 无效输入类型

4. 组合情况测试
   - 会员 + 优惠券
   - 最大折扣情况

请使用 pytest，包含：
- 测试函数
- 参数化测试
- 异常测试
- 断言说明
```

### 案例 4：代码审查

#### 提示词

```
请审查以下代码，从多个角度分析：

代码：
```python
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"
    result = db.execute(query)
    user = result.fetchone()
    
    if user:
        return jsonify({
            'id': user[0],
            'username': user[1],
            'email': user[2]
        })
    else:
        return jsonify({'error': 'User not found'}), 404
```

审查重点：
1. 安全性问题
   - SQL 注入风险
   - 数据泄露风险

2. 代码质量问题
   - 代码风格
   - 错误处理
   - 可维护性

3. 最佳实践
   - ORM 使用
   - 响应格式
   - 状态码使用

4. 性能问题
   - 查询优化
   - 数据序列化

请提供：
- 问题列表（按严重程度）
- 每个问题的详细说明
- 修复建议
- 修复后的代码示例
```

### 案例 5：文档生成

#### 提示词

```
为以下 API 端点生成完整的文档：

代码：
```python
@router.post("/api/orders", response_model=OrderResponse)
async def create_order(
    order_data: OrderCreate,
    current_user: User = Depends(get_current_user)
) -> OrderResponse:
    """
    创建新订单
    
    Args:
        order_data: 订单创建数据
        current_user: 当前登录用户
        
    Returns:
        创建的订单信息
        
    Raises:
        HTTPException: 当库存不足或支付失败时
    """
    # 实现代码...
```

文档要求：
1. API 概述
   - 功能描述
   - 使用场景

2. 请求说明
   - 端点 URL
   - HTTP 方法
   - 请求头
   - 请求体格式
   - 参数说明

3. 响应说明
   - 成功响应格式
   - 状态码
   - 响应体字段说明

4. 错误处理
   - 可能的错误码
   - 错误响应格式
   - 错误处理建议

5. 示例
   - cURL 示例
   - Python 示例
   - JavaScript 示例

6. 注意事项
   - 权限要求
   - 限制说明
   - 最佳实践

格式：Markdown
```

### 案例 6：性能优化

#### 提示词

```
请优化以下代码的性能：

代码：
```python
def get_user_orders(user_id: int) -> List[Dict]:
    orders = []
    user = db.query(User).filter(User.id == user_id).first()
    
    for order in user.orders:
        order_data = {
            'id': order.id,
            'total': order.total,
            'items': []
        }
        
        for item in order.items:
            product = db.query(Product).filter(Product.id == item.product_id).first()
            order_data['items'].append({
                'product_name': product.name,
                'quantity': item.quantity,
                'price': item.price
            })
        
        orders.append(order_data)
    
    return orders
```

优化目标：
1. 减少数据库查询次数（N+1 问题）
2. 提高响应速度
3. 降低内存使用

请提供：
1. 问题分析
2. 优化方案
3. 优化后的代码
4. 性能对比说明
```

### 提示词模板库

#### 模板 1：代码生成

```
作为 [角色]，请 [任务描述]。

技术栈：
- [技术1]
- [技术2]

功能要求：
1. [功能1]
2. [功能2]

代码要求：
- [要求1]
- [要求2]

请提供：
1. [输出1]
2. [输出2]
```

#### 模板 2：代码审查

```
请审查以下代码：

代码：
[代码]

审查重点：
1. [重点1]
2. [重点2]

请提供：
- 问题列表
- 改进建议
- 修复代码
```

#### 模板 3：测试生成

```
为以下 [代码类型] 生成测试：

代码：
[代码]

测试要求：
- [要求1]
- [要求2]

请使用 [测试框架]
```

### 提示词优化技巧

#### 1. 使用示例

**好的提示词**：
```
编写一个排序函数，示例：
- 输入：[3, 1, 4, 1, 5]
- 输出：[1, 1, 3, 4, 5]
```

#### 2. 分步骤说明

**好的提示词**：
```
按以下步骤实现：
1. 验证输入
2. 执行排序
3. 返回结果
```

#### 3. 约束条件

**好的提示词**：
```
要求：
- 时间复杂度：O(n log n)
- 空间复杂度：O(1)
- 不使用内置排序
```

### 相关资源

- [提示词模板库](https://github.com/prompt-templates)
- [实战案例集合](https://github.com/prompt-examples)
- [提示词优化工具](https://www.promptingguide.ai/tools)
