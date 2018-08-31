(function (e) {
  function t(t) { for (var r, o, s = t[0], c = t[1], l = t[2], u = 0, g = []; u < s.length; u++)o = s[u], i[o] && g.push(i[o][0]), i[o] = 0; for (r in c)Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]); d && d(t); while (g.length)g.shift()(); return a.push(...l || []), n(); } function n() { for (var e, t = 0; t < a.length; t++) { for (var n = a[t], r = !0, o = 1; o < n.length; o++) { const c = n[o]; i[c] !== 0 && (r = !1); }r && (a.splice(t--, 1), e = s(s.s = n[0])); } return e; } var r = {},
    i = { app: 0 },
    a = []; function o(e) { return `${s.p}js/${{ about: 'about' }[e] || e}.${{ about: '5d688836' }[e]}.js`; } function s(t) { if (r[t]) return r[t].exports; const n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports; }s.e = function (e) {
    let t = [],
      n = i[e]; if (n !== 0) {
      if (n)t.push(n[2]); else {
        const r = new Promise(((t, r) => { n = i[e] = [t, r]; })); t.push(n[2] = r); let a,
          c = document.getElementsByTagName('head')[0],
          l = document.createElement('script'); l.charset = 'utf-8', l.timeout = 120, s.nc && l.setAttribute('nonce', s.nc), l.src = o(e), a = function (t) {
          l.onerror = l.onload = null, clearTimeout(u); const n = i[e]; if (n !== 0) {
            if (n) {
              let r = t && (t.type === 'load' ? 'missing' : t.type),
                a = t && t.target && t.target.src,
                o = new Error(`Loading chunk ${e} failed.\n(${r}: ${a})`); o.type = r, o.request = a, n[1](o);
            }i[e] = void 0;
          }
        }; var u = setTimeout(() => { a({ type: 'timeout', target: l }); }, 12e4); l.onerror = l.onload = a, c.appendChild(l);
      }
    } return Promise.all(t);
  }, s.m = e, s.c = r, s.d = function (e, t, n) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, s.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, s.t = function (e, t) { if (1 & t && (e = s(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const r in e)s.d(n, r, (t => e[t]).bind(null, r)); return n; }, s.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return s.d(t, 'a', t), t; }, s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, s.p = '/', s.oe = function (e) { throw console.error(e), e; }; let c = window.webpackJsonp = window.webpackJsonp || [],
    l = c.push.bind(c); c.push = t, c = c.slice(); for (let u = 0; u < c.length; u++)t(c[u]); var d = l; a.push([0, 'chunk-vendors']), n();
}({
  0(e, t, n) { e.exports = n('56d7'); },
  '17bb': function (e, t, n) {},
  '33bf': function (e, t, n) {
    let r = n('f0c1'),
      i = n.n(r); i.a;
  },
  '44eb': function (e, t, n) {
    let r = n('e83c'),
      i = n.n(r); i.a;
  },
  '4bf89': function (e, t, n) {
    let r = n('b895'),
      i = n.n(r); i.a;
  },
  '4d65': function (e, t, n) {
    let r = n('17bb'),
      i = n.n(r); i.a;
  },
  '56d7': function (e, t, n) {
    n.r(t); n('cadf'), n('551c'), n('097d'); let r = n('2b0e'),
      i = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', { attrs: { id: 'app' } }, [n('div', { attrs: { id: 'nav' } }, [n('router-link', { attrs: { to: '/' } }, [e._v('Home')]), e._v(' |\n    '), n('router-link', { attrs: { to: '/about' } }, [e._v('About')])], 1), n('router-view')], 1);
      },
      a = [],
      o = (n('33bf'), n('5c64'), n('2877')),
      s = {},
      c = Object(o.a)(s, i, a, !1, null, null, null); c.options.__file = 'App.vue'; let l = c.exports,
      u = n('8c4f'),
      d = function () {
        let e = this,
          t = e.$createElement,
          r = e._self._c || t; return r('div', { staticClass: 'home' }, [r('img', { attrs: { alt: 'Vue logo', src: n('cf05') } }), r('HelloWorld', { attrs: { msg: 'Welcome to Your Vue.js App' } })], 1);
      },
      g = [],
      m = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', { staticClass: 'hello' }, [n('h1', [e._v(e._s(e.msg))]), e._m(0), n('h3', [e._v('Installed CLI Plugins')]), e._m(1), n('h3', [e._v('Essential Links')]), e._m(2), n('h3', [e._v('Ecosystem')]), e._m(3)]);
      },
      f = [function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('p', [e._v('\n    For guide and recipes on how to configure ///// customize this project,'), n('br'), e._v('\n    check out the\n    '), n('a', { attrs: { href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('vue-cli documentation')]), e._v('.\n  ')]);
      }, function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('ul', [n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', target: '_blank', rel: 'noopener' } }, [e._v('babel')])]), n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa', target: '_blank', rel: 'noopener' } }, [e._v('pwa')])]), n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint', target: '_blank', rel: 'noopener' } }, [e._v('eslint')])]), n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha', target: '_blank', rel: 'noopener' } }, [e._v('unit-mocha')])])]);
      }, function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('ul', [n('li', [n('a', { attrs: { href: 'https://vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('Core Docs')])]), n('li', [n('a', { attrs: { href: 'https://forum.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('Forum')])]), n('li', [n('a', { attrs: { href: 'https://chat.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('Community Chat')])]), n('li', [n('a', { attrs: { href: 'https://twitter.com/vuejs', target: '_blank', rel: 'noopener' } }, [e._v('Twitter')])]), n('li', [n('a', { attrs: { href: 'https://news.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('News')])])]);
      }, function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('ul', [n('li', [n('a', { attrs: { href: 'https://router.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('vue-router')])]), n('li', [n('a', { attrs: { href: 'https://vuex.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('vuex')])]), n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/vue-devtools#vue-devtools', target: '_blank', rel: 'noopener' } }, [e._v('vue-devtools')])]), n('li', [n('a', { attrs: { href: 'https://vue-loader.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('vue-loader')])]), n('li', [n('a', { attrs: { href: 'https://github.com/vuejs/awesome-vue', target: '_blank', rel: 'noopener' } }, [e._v('awesome-vue')])])]);
      }],
      v = { name: 'HelloWorld', props: { msg: String } },
      p = v,
      h = (n('5fae'), Object(o.a)(p, m, f, !1, null, '7725e128', null)); h.options.__file = 'HelloWorld.vue'; let _ = h.exports,
      b = { name: 'home', components: { HelloWorld: _ } },
      I = b,
      w = Object(o.a)(I, d, g, !1, null, null, null); w.options.__file = 'Home.vue'; let C = w.exports,
      A = function () {
        let e = this,
          t = e.$createElement,
          r = e._self._c || t; return r('div', [e._m(0), r('div', { staticClass: 'ingredients-container' }, [r('ul', { staticClass: 'ingredient-list' }, [e._l(e.ingredientsList, (t, n) => r('li', { key: n }, [r('ingredient-card', { class: { active: n === e.currentIngredientIndex }, attrs: { name: t.name, amount: t.amount, origin: t.origin }, nativeOn: { click(t) { e.handleIngredientSelect(n); } } })], 1)), r('li', { staticClass: 'add-button', on: { click(t) { e.handleAddClick(); } } }, [r('img', { staticClass: 'add-button__img', attrs: { src: n('7ef5'), alt: 'add' } }), r('p', { staticClass: 'add-button__text' }, [e._v('Add a new ingredient')])])], 2), e.showAddForm ? e._e() : r('ingredient-detail', {
          staticClass: 'ingredient-detail',
          attrs: {
            name: e.currentIngredient.name, amount: e.currentIngredient.amount, origin: e.currentIngredient.origin, detail: e.currentIngredient.detail,
          },
        }), e.showAddForm ? r('ingredient-add-form', { attrs: { cancelHandler: e.handleCancelClick, createNewIngredient: e.createNewIngredient } }) : e._e()], 1)]);
      },
      E = [function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('h1', [n('i', [e._v(' Essential')]), e._v(' Nutrients')]);
      }],
      O = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', { staticClass: 'ingredient-card' }, [n('div', { staticClass: 'box' }, [n('h1', [e._v(e._s(e.name))]), n('h2', [e._v(e._s(e.amount))]), n('h3', [e._v(e._s(e.origin))])])]);
      },
      S = [],
      x = { name: 'IngredientCard', props: { name: { type: String, required: !0, defualt: 'Ingredient' }, amount: { type: String, required: !1, default: '1 mg' }, origin: { type: String, required: !1, default: 'California, USA' } } },
      k = x,
      j = (n('4d65'), Object(o.a)(k, O, S, !1, null, '18429f2f', null)); j.options.__file = 'IngredientCard.vue'; let y = j.exports,
      N = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', { staticClass: 'ingredient-detail-container' }, [n('div', { staticClass: 'ingredient-detail__heading' }, [n('div', { staticClass: 'ingredient-detail__heading__text' }, [n('h1', { staticClass: 'ingredient-detail__heading__text-name' }, [e._v(e._s(e.name))]), n('p', { staticClass: 'ingredient-detail__heading__text-amount' }, [e._v(e._s(e.amount))])]), n('img', { staticClass: 'ingredient-detail__heading__img', attrs: { src: e.detail.image, alt: e.detail.image } })]), n('div', { staticClass: 'ingredient-detail__text' }, [n('p', [e._v(`FORM: ${e._s(e.detail.form)}`)]), n('p', [e._v(`DOSAGE: ${e._s(e.amount)}`)]), n('p', [e._v(`SOURCE: ${e._s(e.origin)}`)]), n('p', [e._v(`MANUFACTURER: ${e._s(e.detail.manufacturer)}`)]), n('hr')]), n('div', { staticClass: 'ingredient-detail__icons' }, e._l(e.detail.icons, t => n('div', { key: t.name }, [n('img', { attrs: { src: t.source, alt: t.name } }), n('p', [e._v(e._s(t.name))])]))), n('div', { staticClass: 'ingredient-detail__sub-detail' }, [n('h2', [e._v('FOUND IN')]), n('p', [n('i', [e._v(e._s(e.detail.found))])])])]);
      },
      H = [],
      L = {
        name: 'IngrdientDetail',
        props: {
          name: String, amount: String, origin: String, detail: Object,
        },
      },
      T = L,
      M = (n('44eb'), Object(o.a)(T, N, H, !1, null, null, null)); M.options.__file = 'IngredientDetail.vue'; let F = M.exports,
      P = function () {
        let e = this,
          t = e.$createElement,
          n = e._self._c || t; return n('div', [n('h1', [e._v(' Add Ingredient ')]), n('button', { on: { click: e.cancelHandler } }, [e._v(' cancel ')]), n('form', { on: { submit(t) { t.preventDefault(), e.handleSubmit(e.newIngredient); } } }, [e.errors.length ? n('p', [n('b', [e._v('Please correct the following error:')]), n('ul', e._l(e.errors, (t, r) => n('li', { key: r }, [e._v(e._s(t))])))]) : e._e(), n('p', [n('label', [e._v('\n        Ingredient Name:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.name, expression: 'newIngredient.name',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.name },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'name', t.target.value); } },
        })])]), n('p', [n('label', [e._v('\n        Dosage:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.dosage, expression: 'newIngredient.dosage',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.dosage },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'dosage', t.target.value); } },
        })])]), n('p', [n('label', [e._v('\n        Form:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.form, expression: 'newIngredient.form',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.form },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'form', t.target.value); } },
        })])]), n('p', [n('label', [e._v('\n        Source:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.source, expression: 'newIngredient.source',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.source },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'source', t.target.value); } },
        })])]), n('p', [n('label', [e._v('\n        Manufacturer:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.manufacturer, expression: 'newIngredient.manufacturer',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.manufacturer },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'manufacturer', t.target.value); } },
        })])]), n('p', [n('label', [e._v('\n        Found In:\n        '), n('input', {
          directives: [{
            name: 'model', rawName: 'v-model', value: e.newIngredient.foundIn, expression: 'newIngredient.foundIn',
          }],
          attrs: { type: 'text' },
          domProps: { value: e.newIngredient.foundIn },
          on: { input(t) { t.target.composing || e.$set(e.newIngredient, 'foundIn', t.target.value); } },
        })])]), n('button', { attrs: { type: 'submit' } }, [e._v('Save')])])]);
      },
      R = [],
      D = (n('ac6a'), n('8615'), n('6762'), n('2fdb'), {
        name: 'IngredientAddForm',
        props: { cancelHandler: Function, createNewIngredient: Function },
        data() {
          return {
            errors: [],
            newIngredient: {
              name: '', dosage: '', form: '', source: '', manufacturer: '', foundIn: '',
            },
          };
        },
        methods: { handleSubmit() { Object.values(this.newIngredient).includes('') ? this.errors.push('Please include all fields.') : (this.createNewIngredient(this.newIngredient), this.cancelHandler()); } },
      }),
      U = D,
      $ = (n('4bf89'), Object(o.a)(U, P, R, !1, null, '9b54a4aa', null)); $.options.__file = 'IngredientAddForm.vue'; let G = $.exports,
      B = [{
        name: 'Folate',
        amount: '600 MCG',
        origin: 'Pisticci, Italy',
        detail: {
          form: '5MTHF GLUCOSAMINE SALT', manufacturer: 'Gnosis', found: 'Lentils, avocado, and oranges.', image: 'https://5.imimg.com/data5/EX/IU/MY-2290318/folic-acid-250x250.jpg', icons: [{ source: 'https://image.flaticon.com/icons/svg/39/39272.svg', name: 'MOOD' }, { source: 'https://image.flaticon.com/icons/svg/340/340624.svg', name: 'DNA SYNTHESIS' }, { source: 'https://image.flaticon.com/icons/svg/109/109727.svg', name: 'BRAIN HEALTH' }],
        },
      }, {
        name: 'Omega-3',
        amount: '320 MG',
        origin: 'South Carolina, USA',
        detail: {
          form: '320 MG ALPHA-LINOLENIC ACID', manufacturer: 'PharmaVita', found: 'Shrimp, Scallops, Clams, Tilapia, Cod.', image: 'https://www.sciencedaily.com/images/2018/07/180717194558_1_540x360.jpg', icons: [{ source: 'https://image.flaticon.com/icons/svg/1048/1048706.svg', name: 'BLOOD FLOW' }, { source: 'https://image.flaticon.com/icons/svg/116/116338.svg', name: 'BRAIN HEALTH' }, { source: 'https://image.flaticon.com/icons/svg/126/126471.svg', name: 'HEART HEALTH' }],
        },
      }, {
        name: 'Vitamin D3',
        amount: '2000 IU',
        origin: 'United Kingdom',
        detail: {
          form: '10MG CALCITRIOL LIQUID', manufacturer: 'BARMETRIC', found: 'Fish, Eggs, and Cheese.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Cholecalciferol.svg/1200px-Cholecalciferol.svg.png', icons: [{ source: 'https://image.flaticon.com/icons/svg/84/84442.svg', name: 'BONE STRENGTH' }, { source: 'https://image.flaticon.com/icons/svg/126/126471.svg', name: 'HEART HEALTH' }, { source: 'https://image.flaticon.com/icons/svg/811/811932.svg', name: 'BLOOD PRESSURE' }],
        },
      }, {
        name: 'Iron',
        amount: '8 MG',
        origin: 'Utah, USA',
        detail: {
          form: '5MTHF GLUCOSAMINE SALT', manufacturer: 'Gnosis', found: 'Lentils, avocado, and oranges.', image: 'https://5.imimg.com/data5/EX/IU/MY-2290318/folic-acid-250x250.jpg', icons: [{ source: 'https://image.flaticon.com/icons/svg/39/39272.svg', name: 'MOOD' }, { source: 'https://image.flaticon.com/icons/svg/340/340624.svg', name: 'DNA SYNTHESIS' }, { source: 'https://image.flaticon.com/icons/svg/109/109727.svg', name: 'BRAIN HEALTH' }],
        },
      }, {
        name: 'Vitamin K2',
        amount: '90 MCG',
        origin: 'Oslo, Norway',
        detail: {
          form: '320 MG ALPHA-LINOLENIC ACID', manufacturer: 'PharmaVita', found: 'Shrimp, Scallops, Clams, Tilapia, Cod.', image: 'https://www.sciencedaily.com/images/2018/07/180717194558_1_540x360.jpg', icons: [{ source: 'https://image.flaticon.com/icons/svg/1048/1048706.svg', name: 'BLOOD FLOW' }, { source: 'https://image.flaticon.com/icons/svg/116/116338.svg', name: 'BRAIN HEALTH' }, { source: 'https://image.flaticon.com/icons/svg/126/126471.svg', name: 'HEART HEALTH' }],
        },
      }, {
        name: 'Magnesium',
        amount: '50 MG',
        origin: 'Pisa, Italy',
        detail: {
          form: '10MG CALCITRIOL LIQUID', manufacturer: 'BARMETRIC', found: 'Fish, Eggs, and Cheese.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Cholecalciferol.svg/1200px-Cholecalciferol.svg.png', icons: [{ source: 'https://image.flaticon.com/icons/svg/84/84442.svg', name: 'BONE STRENGTH' }, { source: 'https://image.flaticon.com/icons/svg/126/126471.svg', name: 'HEART HEALTH' }, { source: 'https://image.flaticon.com/icons/svg/811/811932.svg', name: 'BLOOD PRESSURE' }],
        },
      }],
      W = B,
      Y = (n('7f7f'), function (e) {
        return {
          name: e.name,
          amount: e.dosage,
          origin: e.source,
          detail: {
            form: e.form, manufacturer: e.manufacturer, found: e.foundIn, image: 'https://5.imimg.com/data5/EX/IU/MY-2290318/folic-acid-250x250.jpg', icons: [{ source: 'https://image.flaticon.com/icons/svg/39/39272.svg', name: 'MOOD' }, { source: 'https://image.flaticon.com/icons/svg/340/340624.svg', name: 'DNA SYNTHESIS' }, { source: 'https://image.flaticon.com/icons/svg/109/109727.svg', name: 'BRAIN HEALTH' }],
          },
        };
      }),
      V = Y,
      q = {
        name: 'Ingredients',
        components: { IngredientCard: y, IngredientDetail: F, IngredientAddForm: G },
        computed: { currentIngredient() { return this.ingredientsList[this.currentIngredientIndex]; } },
        data() { return { currentIngredientIndex: 0, ingredientsList: W, showAddForm: !1 }; },
        methods: {
          handleIngredientSelect(e) { this.currentIngredientIndex = e; }, handleAddClick() { this.showAddForm = !0; }, handleCancelClick() { this.showAddForm = !1; }, createNewIngredient(e) { this.ingredientsList.push(V(e)); },
        },
      },
      X = q,
      J = (n('f5ad'), Object(o.a)(X, A, E, !1, null, null, null)); J.options.__file = 'Ingredients.vue'; const K = J.exports; r.a.use(u.a); let Q = new u.a({ routes: [{ path: '/', name: 'home', component: C }, { path: '/about', name: 'about', component() { return n.e('about').then(n.bind(null, 'f820')); } }, { path: '/ingredients', name: 'ingredients', component: K }] }),
      z = n('2f62'); r.a.use(z.a); let Z = new z.a.Store({ state: {}, mutations: {}, actions: {} }),
      ee = n('9483'); Object(ee.a)(''.concat('/', 'service-worker.js'), {
      ready() { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'); }, cached() { console.log('Content has been cached for offline use.'); }, updated() { console.log('New content is available; please refresh.'); }, offline() { console.log('No internet connection found. App is running in offline mode.'); }, error(e) { console.error('Error during service worker registration:', e); },
    }), r.a.config.productionTip = !1, new r.a({ router: Q, store: Z, render(e) { return e(l); } }).$mount('#app');
  },
  '5c64': function (e, t, n) {
    let r = n('9f02'),
      i = n.n(r); i.a;
  },
  '5fae': function (e, t, n) {
    let r = n('6fb4'),
      i = n.n(r); i.a;
  },
  '6fb4': function (e, t, n) {},
  '7ef5': function (e, t, n) { e.exports = `${n.p}img/plus-button.5d4a040f.png`; },
  '9aad': function (e, t, n) {},
  '9f02': function (e, t, n) {},
  b895(e, t, n) {},
  cf05(e, t, n) { e.exports = `${n.p}img/logo.82b9c7a5.png`; },
  e83c(e, t, n) {},
  f0c1(e, t, n) {},
  f5ad(e, t, n) {
    let r = n('9aad'),
      i = n.n(r); i.a;
  },
}));
// # sourceMappingURL=app.d287a1b1.js.map
