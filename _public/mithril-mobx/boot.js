import "//unpkg.com/mithril/mithril.js";
import "//unpkg.com/mobx/lib/mobx.umd.js";

// Add the webpack bundle script
document.head.appendChild(
  Object.assign(document.createElement("script"), {
    async : true,
    src : "/mithril-mobx/bundle.js"
  })
);
