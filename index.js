const R = require("ramda");

export default {
  install: (app, options) => {
    app.config.globalProperties.$R = {
      get() {
        return R;
      },
    };

    R.ifElse(
      R.and(R.compose(R.not, R.isNil), R.has("Vue")),
      (win) => {
        win.Vue.use(VueRamda);
      },
      () => {}
    )(window);
  },
};
