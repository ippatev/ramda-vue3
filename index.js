const R = require("ramda");

export default RamdaVue = {
  install: (app, options) => {
    app.$R = R;
    app.config.globalProperties.$R = R;
    Object.defineProperties(Vue.prototype, {
      $R: {
        get() {
          return R;
        },
      },
    });

    R.ifElse(
      R.and(R.compose(R.not, R.isNil), R.has("Vue")),
      (win) => {
        win.Vue.use(RamdaVue);
      },
      () => {}
    )(window);
  },
};
