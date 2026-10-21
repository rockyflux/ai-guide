<script setup>
import { ref, onMounted } from "vue";
import { withBase } from "vitepress";
import { data as book } from "../../book.data";
const last = ref(null);
onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("aiguide:last") || "null");
    if (saved?.href?.startsWith(withBase("/")) && !saved.href.startsWith("//"))
      last.value = saved;
  } catch {
    /* Reading works when storage is unavailable. */
  }
});
</script>

<template>
  <main class="book-home vp-raw">
    <section class="book-hero" aria-labelledby="book-title">
      <div class="hero-copy">
        <p class="book-eyebrow"><span /> 社区指南 · 2026</p>
        <h1 id="book-title">AI<br /><em>Guide</em></h1>
        <p class="hero-subtitle">把 AI 从「会聊天」推进到「能稳定交付」</p>
        <p class="hero-description">
          面向有经验开发者的任务向指南。沿着选型、Agent 工具、工作流、Agent 工程、编程实战与场景实战，跑通从工具到交付的闭环。
        </p>
        <div class="hero-actions">
          <a class="book-button primary" :href="withBase('/preface.html')"
            >开始阅读 <span>→</span></a
          >
          <a class="book-button secondary" :href="withBase('/contents.html')"
            >浏览全书目录</a
          >
        </div>
        <a v-if="last" class="continue-reading" :href="last.href"
          >继续上次阅读：{{ last.title }} <span>→</span></a
        >
      </div>
      <div class="book-cover" aria-hidden="true">
        <div class="cover-top">
          <span>社区维护</span><span>2026 EDITION</span>
        </div>
        <div class="cover-title">
          AI GUIDE<br /><span>工具与编程实践指南</span>
        </div>
        <div class="cover-orbit">
          <div class="orbit one" />
          <div class="orbit two" />
          <div class="orbit three" />
          <span class="orbit-center">AI</span
          ><span class="orbit-label top">SELECT</span
          ><span class="orbit-label bottom">SHIP</span>
        </div>
        <div class="cover-bottom">
          从选型到交付<br /><span>A PRACTICAL GUIDE TO AI CODING</span>
        </div>
      </div>
    </section>

    <div class="book-facts" aria-label="全书概览">
      <div>
        <strong>{{ book.chapterCount }}</strong
        ><span>个章节，贯穿选型到交付</span>
      </div>
      <div>
        <strong>{{ book.parts.length }}</strong
        ><span>个篇章，循序建立认知</span>
      </div>
      <div>
        <strong>{{ book.pageCount }}</strong
        ><span>个页面，含目录与指南</span>
      </div>
      <a :href="withBase('/reading-guide.html')"
        >找到适合你的阅读路径 <span>↗</span></a
      >
    </div>

    <section class="book-parts" aria-labelledby="parts-title">
      <div class="section-heading">
        <div>
          <p class="book-eyebrow">THE GUIDE</p>
          <h2 id="parts-title">一条可执行的工程主线</h2>
        </div>
        <p>
          选型决定起点，环境决定速度。<br />工作流与 Agent 工程，把能力变成可复用的交付系统。
        </p>
      </div>
      <div class="parts-grid">
        <a
          v-for="(part, i) in book.parts"
          :key="part.id"
          class="part-card"
          :href="withBase(part.href)"
        >
          <div class="part-topline">
            <span>PART {{ String(i + 1).padStart(2, "0") }}</span
            ><span>↗</span>
          </div>
          <h3>
            {{ part.title }} <small>{{ part.english }}</small>
          </h3>
          <p>{{ part.description }}</p>
          <span class="part-range"
            >{{ part.pages.length }} 章 · {{ part.range }}</span
          >
        </a>
        <a class="part-card survey-card" :href="withBase('/survey.html')"
          ><div class="part-topline">
            <span>COMMUNITY INSIGHTS</span><span>↗</span>
          </div>
          <h3>从开发者的现实出发</h3>
          <p>阅读 2026 年 Agent 开发者调研，了解工程落地的共同挑战。</p>
          <span class="part-range">阅读调研报告 →</span></a
        >
      </div>
    </section>
    <section class="book-invitation">
      <div>
        <p class="book-eyebrow">BUILT IN THE OPEN</p>
        <h2>让实践成为下一页的答案。</h2>
        <p>本指南由社区共同维护，欢迎分享反馈、修订与实践经验。</p>
      </div>
      <a
        class="book-button secondary"
        href="https://github.com/rockyflux/ai-guide"
        target="_blank"
        rel="noopener noreferrer"
        >参与共建 ↗</a
      >
    </section>
  </main>
</template>
