// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.wenglishforwequality.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.wenglishforwequality.com/","title_tag":"Breaking the Bias of English, linguistic equality | WEnglish for WEquality","meta_description":"Discover how Vivian Probst’s WEnglish for WEquality reforms English with gender‑neutral, feminist language to empower women and build inclusive communication."},{"page_url":"https://www.wenglishforwequality.com/international-women-s-day","title_tag":"International Women’s Day, women’s empowerment | WEnglish for WEquality","meta_description":"Explore how International Women’s Day connects to linguistic equality. Learn how Breaking the Bias of English empowers women through inclusive, gender‑neutral language."},{"page_url":"https://www.wenglishforwequality.com/wenglish","title_tag":"WEnglish for WEquality, linguistic equality | Vivian Probst","meta_description":"Learn how Vivian Probst’s WEnglish for WEquality reforms English with gender‑neutral, inclusive communication that supports women’s empowerment and linguistic equality."},{"page_url":"https://www.wenglishforwequality.com/books","title_tag":"Breaking the Bias, feminist language books | WEnglish for WEquality","meta_description":"Browse Vivian Probst’s books, including Breaking the Bias of English, and discover feminist language tools for women’s empowerment and inclusive communication."},{"page_url":"https://www.wenglishforwequality.com/avery-victoria-spencer-fables","title_tag":"Feminist language fiction, women’s empowerment | WEnglish for WEquality","meta_description":"Read the Avery Victoria Spencer fables by Vivian Probst—stories written around English language reform and feminist language that center women’s empowerment."},{"page_url":"https://www.wenglishforwequality.com/wenglish-avery-victoria-spencer-fa","title_tag":"WEnglish fiction, feminist language | WEnglish for WEquality","meta_description":"Explore Avery Victoria Spencer novels in WEnglish for WEquality, showcasing feminist language, gender‑neutral forms, and inclusive communication in fiction."},{"page_url":"https://www.wenglishforwequality.com/reviews","title_tag":"Breaking the Bias of English reviews | WEnglish for WEquality","meta_description":"Read reader reviews of Vivian Probst’s Breaking the Bias of English and WEnglish for WEquality, highlighting feminist language and women’s empowerment themes."},{"page_url":"https://www.wenglishforwequality.com/media","title_tag":"Vivian Probst, feminist language expert | WEnglish for WEquality","meta_description":"Media hub for linguist and author Vivian Probst, creator of WEnglish for WEquality and Breaking the Bias of English, focused on feminist and inclusive language."},{"page_url":"https://www.wenglishforwequality.com/resources","title_tag":"Linguistic equality resources | WEnglish for WEquality","meta_description":"Access resources and a glossary for WEnglish for WEquality, supporting linguistic equality, gender‑neutral language, and inclusive communication inspired by Vivian Probst."}],"keywords":["WEnglish for WEquality","Breaking the Bias","linguistic equality","Vivian Probst","women’s empowerment","gender-neutral language","inclusive communication","English language reform","feminist language","International Women’s Day"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.wenglishforwequality.com/#organization",
  "url": "https://www.wenglishforwequality.com/",
  "name": "WEnglish for WEquality",
  "alternateName": "WEnglishforWEquality",
  "description": "WEnglish for WEquality is a linguistic initiative and author platform by linguist, author, and speaker Vivian Probst, focused on exposing and correcting masculine bias in the English language and introducing an inclusive alternative called WEnglish for WEquality.",
  "logo": "https://static.wixstatic.com/media/81bae7_bdb661e54cca434ab54cac36b129ed5a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/81bae7_bdb661e54cca434ab54cac36b129ed5a%7Emv2.png",
  "image": [
    "https://static.wixstatic.com/media/5dbb58_9b117622a4cc4bc289359fb53499d402~mv2.png/v1/fill/w_347,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WEnglish%20Logo.png",
    "https://static.wixstatic.com/media/5dbb58_199ab139e2734f0397a52832c0f79047~mv2.jpg/v1/crop/x_0,y_6,w_305,h_305/fill/w_345,h_345,al_c,lg_1,q_80,enc_avif,quality_auto/image_edited.jpg"
  ],
  "sameAs": [
    "https://www.instagram.com",
    "https://www.facebook.com",
    "https://twitter.com",
    "https://www.linkedin.com"
  ],
  "founder": {
    "@type": "Person",
    "name": "Vivian Probst",
    "description": "Vivian Probst is a linguist, national speaker, and award-winning author, creator of WEnglish for WEquality and author of 'Breaking the Bias of English' and the Avery Victoria Spencer fables.",
    "jobTitle": "Linguist, Author, Speaker",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Wisconsin",
      "addressCountry": "US"
    }
  },
  "knowsAbout": [
    "English language bias",
    "inclusive language",
    "gender equality",
    "linguistics",
    "feminist literature"
  ],
  "publisher": {
    "@type": "Organization",
    "name": "WEnglish for WEquality"
  },
  "subjectOf": [
    {
      "@type": "Book",
      "name": "Breaking the Bias of English",
      "author": {
        "@type": "Person",
        "name": "Vivian R. Probst"
      },
      "description": "In 'Breaking the Bias of English', linguist Vivian R. Probst explores how English disempowers women and reveals how to neutralize its masculine bias through six key word changes to transform English into a language of equality."
    }
  ],
  "potentialAction": [
    {
      "@type": "ReadAction",
      "target": "https://www.wenglishforwequality.com/books",
      "name": "Explore books by Vivian Probst"
    },
    {
      "@type": "CommunicateAction",
      "target": "https://www.wenglishforwequality.com/contact",
      "name": "Contact Vivian Probst"
    }
  ],
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": "https://www.wenglishforwequality.com/international-women-s-day",
      "url": "https://www.wenglishforwequality.com/international-women-s-day",
      "name": "International Women's Day",
      "description": "Discover how International Women’s Day connects to language and how English quietly disempowers women, based on insights from 'Breaking the Bias of English'."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.wenglishforwequality.com/wenglish",
      "url": "https://www.wenglishforwequality.com/wenglish",
      "name": "WEnglish for WEquality",
      "description": "An introduction to WEnglish for WEquality, a more inclusive way of speaking and writing that balances English and restores honor and dignity to women."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.wenglishforwequality.com/books",
      "url": "https://www.wenglishforwequality.com/books",
      "name": "Books",
      "description": "Books by Vivian Probst, including 'Breaking the Bias of English' and the Avery Victoria Spencer fables, in both English and WEnglish for WEquality."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.wenglishforwequality.com/avery-victoria-spencer-fables",
      "url": "https://www.wenglishforwequality.com/avery-victoria-spencer-fables",
      "name": "The Avery Victoria Spencer Fables",
      "description": "A fable series following Avery Victoria Spencer, exploring themes of trauma, healing, and self-discovery, available in English and WEnglish for WEquality."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.wenglishforwequality.com/wenglish-avery-victoria-spencer-fa",
      "url": "https://www.wenglishforwequality.com/wenglish-avery-victoria-spencer-fa",
      "name": "WeEnglish Avery Victoria Spencer",
      "description": "The Avery Victoria Spencer fables written in WEnglish for WEquality, demonstrating inclusive language in practice."
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.wenglishforwequality.com/reviews",
      "url": "https://www.wenglishforwequality.com/reviews",
      "name": "Reviews",
      "description": "Reader reviews and feedback on Vivian Probst’s books and WEnglish for WEquality."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.wenglishforwequality.com/media",
      "url": "https://www.wenglishforwequality.com/media",
      "name": "Media",
      "description": "Media information about linguist and author Vivian Probst, including her background and work with WEnglish for WEquality."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.wenglishforwequality.com/resources",
      "url": "https://www.wenglishforwequality.com/resources",
      "name": "Resources",
      "description": "Resources for learning WEnglish for WEquality, including a glossary and related materials."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
