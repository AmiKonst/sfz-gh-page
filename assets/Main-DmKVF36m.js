import { _ as _export_sfc, u as useI18n, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as unref, F as Fragment, r as renderList, d as createVNode } from './index-DU5Dmsuc.js';

const _hoisted_1$2 = { class: "community-banner" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = { class: "content" };
const _hoisted_4$2 = { class: "badge-row" };
const _hoisted_5$2 = { class: "badge freemium" };
const _hoisted_6$2 = { class: "headline-group" };
const _hoisted_7$2 = { class: "title" };
const _hoisted_8$1 = { class: "desc" };
const _hoisted_9$1 = { class: "perks" };
const _hoisted_10$1 = { class: "action-wrap" };
const _hoisted_11$1 = {
  href: "https://t.me/bilbomusic",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "telegram-btn"
};


const _sfc_main$2 = {
  __name: 'JoinTelegram',
  setup(__props) {

const { t, tm } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("section", _hoisted_1$2, [
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "backdrop-glow" }, null, -1)),
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("div", _hoisted_3$2, [
        createBaseVNode("div", _hoisted_4$2, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "icon-badge" }, [
            createBaseVNode("svg", {
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createBaseVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" })
            ])
          ], -1)),
          createBaseVNode("span", _hoisted_5$2, toDisplayString(unref(t)('pages.main.community.badge')), 1)
        ]),
        createBaseVNode("div", _hoisted_6$2, [
          createBaseVNode("h2", _hoisted_7$2, toDisplayString(unref(t)('pages.main.community.title')), 1),
          createBaseVNode("p", _hoisted_8$1, toDisplayString(unref(t)('pages.main.community.description')), 1)
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tm)('pages.main.community.perks'), (perk, idx) => {
            return (openBlock(), createElementBlock("div", {
              key: idx,
              class: "perk-item"
            }, [
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "bullet" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(perk), 1)
            ]))
          }), 128))
        ])
      ]),
      createBaseVNode("div", _hoisted_10$1, [
        createBaseVNode("a", _hoisted_11$1, [
          _cache[2] || (_cache[2] = createBaseVNode("svg", {
            class: "tg-icon",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" })
          ], -1)),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.main.community.cta')), 1),
          _cache[3] || (_cache[3] = createBaseVNode("svg", {
            class: "arrow-icon",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2.5",
              d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
          ], -1))
        ])
      ])
    ])
  ]))
}
}

};
const JoinTelegram = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-f262872b"]]);

const _hoisted_1$1 = { class: "artist-cta-section" };
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = { class: "header" };
const _hoisted_4$1 = { class: "kicker-wrap" };
const _hoisted_5$1 = { class: "badge dark" };
const _hoisted_6$1 = { class: "title" };
const _hoisted_7$1 = { class: "subtitle" };
const _hoisted_8 = { class: "pillars-grid" };
const _hoisted_9 = { class: "icon-wrap" };
const _hoisted_10 = {
  key: 0,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_11 = {
  key: 1,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_12 = {
  key: 2,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_13 = {
  key: 3,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_14 = { class: "pillar-content" };
const _hoisted_15 = { class: "pillar-title" };
const _hoisted_16 = { class: "pillar-desc" };
const _hoisted_17 = { class: "footer-bar" };
const _hoisted_18 = { class: "stats" };
const _hoisted_19 = { class: "stat-val" };
const _hoisted_20 = { class: "stat-label" };
const _hoisted_21 = { class: "action-group" };
const _hoisted_22 = {
  href: "https://bilbomusic.com/#/join",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "join-btn"
};
const _hoisted_23 = { class: "guarantee-note" };


const _sfc_main$1 = {
  __name: 'JoinBilbo',
  setup(__props) {

const { t, tm } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("section", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(t)('pages.main.artistCta.kicker')), 1)
        ]),
        createBaseVNode("h2", _hoisted_6$1, toDisplayString(unref(t)('pages.main.artistCta.title')), 1),
        createBaseVNode("p", _hoisted_7$1, toDisplayString(unref(t)('pages.main.artistCta.subtitle')), 1)
      ]),
      createBaseVNode("div", _hoisted_8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tm)('pages.main.artistCta.pillars'), (pillar) => {
          return (openBlock(), createElementBlock("div", {
            key: pillar.id,
            class: "pillar-card"
          }, [
            createBaseVNode("div", _hoisted_9, [
              (pillar.id === 'community')
                ? (openBlock(), createElementBlock("svg", _hoisted_10, [...(_cache[0] || (_cache[0] = [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    }, null, -1)
                  ]))]))
                : (pillar.id === 'artifacts')
                  ? (openBlock(), createElementBlock("svg", _hoisted_11, [...(_cache[1] || (_cache[1] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      }, null, -1)
                    ]))]))
                  : (pillar.id === 'rights')
                    ? (openBlock(), createElementBlock("svg", _hoisted_12, [...(_cache[2] || (_cache[2] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        }, null, -1)
                      ]))]))
                    : (openBlock(), createElementBlock("svg", _hoisted_13, [...(_cache[3] || (_cache[3] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13 10V3L4 14h7v7l9-11h-7z"
                        }, null, -1)
                      ]))]))
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("h3", _hoisted_15, toDisplayString(pillar.title), 1),
              createBaseVNode("p", _hoisted_16, toDisplayString(pillar.desc), 1)
            ])
          ]))
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_17, [
        createBaseVNode("div", _hoisted_18, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tm)('pages.main.artistCta.stats'), (stat, idx) => {
            return (openBlock(), createElementBlock("div", {
              key: idx,
              class: "stat-item"
            }, [
              createBaseVNode("span", _hoisted_19, toDisplayString(stat.val), 1),
              createBaseVNode("span", _hoisted_20, toDisplayString(stat.label), 1)
            ]))
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("a", _hoisted_22, [
            createBaseVNode("span", null, toDisplayString(unref(t)('pages.main.artistCta.cta')), 1),
            _cache[4] || (_cache[4] = createBaseVNode("svg", {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2.5",
                d: "M14 5l7 7m0 0l-7 7m7-7H3"
              })
            ], -1))
          ]),
          createBaseVNode("span", _hoisted_23, toDisplayString(unref(t)('pages.main.artistCta.guarantee')), 1)
        ])
      ])
    ])
  ]))
}
}

};
const JoinBilbo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-0a7cbdc8"]]);

const _hoisted_1 = { class: "app-root" };
const _hoisted_2 = { class: "main-content" };
const _hoisted_3 = { class: "catalog-view" };
const _hoisted_4 = { class: "catalog-header" };
const _hoisted_5 = { class: "kicker" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = { class: "subtitle" };


const _sfc_main = {
  __name: 'Main',
  setup(__props) {

const { t, tm } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("main", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", null, [
            createBaseVNode("span", _hoisted_5, toDisplayString(unref(t)('pages.main.editorial.kicker')), 1),
            createBaseVNode("h1", _hoisted_6, toDisplayString(unref(t)('pages.main.editorial.title')), 1)
          ]),
          createBaseVNode("p", _hoisted_7, toDisplayString(unref(t)('pages.main.editorial.subtitle')), 1)
        ]),
        createVNode(JoinTelegram),
        createVNode(JoinBilbo)
      ])
    ])
  ]))
}
}

};
const Main = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-2f5cd722"]]);

export { Main as default };
//# sourceMappingURL=Main-DmKVF36m.js.map
