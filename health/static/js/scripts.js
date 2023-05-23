function _createForOfIteratorHelper(e, t) {
  var n,
    r,
    o,
    i,
    a = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (a)
    return (
      (r = !(n = !0)),
      {
        s: function () {
          a = a.call(e);
        },
        n: function () {
          var e = a.next();
          return (n = e.done), e;
        },
        e: function (e) {
          (r = !0), (o = e);
        },
        f: function () {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw o;
          }
        },
      }
    );
  if (
    Array.isArray(e) ||
    (a = _unsupportedIterableToArray(e)) ||
    (t && e && "number" == typeof e.length)
  )
    return (
      a && (e = a),
      (i = 0),
      {
        s: (t = function () {}),
        n: function () {
          return i >= e.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: e[i++],
              };
        },
        e: function (e) {
          throw e;
        },
        f: t,
      }
    );
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  var n;
  if (e)
    return "string" == typeof e
      ? _arrayLikeToArray(e, t)
      : "Map" ===
          (n =
            "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) &&
            e.constructor
              ? e.constructor.name
              : n) || "Set" === n
      ? Array.from(e)
      : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
document.addEventListener("DOMContentLoaded", function () {
  Array.from(document.querySelectorAll(".accordeon__item"));
  var t = document.querySelector(".accordeon__body");
  document
    .querySelector(".accordeon button")
    .addEventListener("click", function () {
      var e = document.querySelector(".accordeon__item");
      e.remove(), t.insertAdjacentElement("beforeend", e);
    }),
    t.addEventListener("click", function (e) {
      e.target.closest(".accordeon__item") &&
        ((e = e.target.closest(".accordeon__item")).remove(),
        t.insertAdjacentElement("afterbegin", e));
    });
}),
  document.addEventListener("DOMContentLoaded", function () {
    window.innerWidth < 998 &&
      new Swiper(".adva .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: !0,
        autoplay: {
          delay: 4e3,
        },
        breakpoints: {
          600: {
            spaceBetween: 30,
            slidesPerView: 2,
          },
        },
        pagination: {
          el: ".adva .swiper-pagination",
          type: "bullets",
          clickable: !0,
        },
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".faq__list") &&
      document
        .querySelector(".faq__list")
        .addEventListener("click", function (e) {
          e.target.closest(".faq-item") &&
            e.target.closest(".faq-item").classList.toggle("active");
        });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e,
      t = _createForOfIteratorHelper(document.querySelectorAll('a[href*="#"]'));
    try {
      for (t.s(); !(e = t.n()).done; )
        !(function () {
          var t = e.value;
          t.addEventListener("click", function (e) {
            e.preventDefault();
            e = t.getAttribute("href").substr(1);
            document.getElementById(e).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
        })();
    } catch (e) {
      t.e(e);
    } finally {
      t.f();
    }
  });
  
