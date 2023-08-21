const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

carouselList.addEventListener("click", function (event) {
  var newActive = event.target;
  var isItem = newActive.closest(".carousel__item");

  if (!isItem || newActive.classList.contains("carousel__item_active")) {
    return;
  }

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  const first2 = elems.find((elem) => elem.dataset.pos == -3);
  const last2 = elems.find((elem) => elem.dataset.pos == 3);

  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last, first2, last2].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 3) {
    return -current;
  }

  return diff;
};
const pwd2 = document.querySelector(".contact__section-input-wrap");
const pwd = document.querySelector('input[type="text"]');
pwd.addEventListener("focus", (e) => {
  pwd2.style.borderColor = "#0E849A";
});
function myFunction() {
  var x = document.getElementById("top-navbar");
  if (x.className === "heading__panel-navbar") {
    x.className += " responsive";
  } else {
    x.className = "heading__panel-navbar";
  }
}
// var slider = document.querySelector(".slider");
// var sliderItems = document.querySelector(".slider-item");
// var currentItem = 0;
// var totalItems = sliderItems.children.length;
// var slideWidth = 100 / totalItems;

// function slide() {
//   sliderItems.style.transform =
//     "translateX(-" + currentItem * slideWidth + "%)";
// }

// setInterval(function () {
//   currentItem++;
//   if (currentItem >= totalItems) {
//     currentItem = 0;
//   }
//   slide();
// }, 2000);

function walletScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  let slide = document.getElementById("slide");
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

function trendingScroll() {
  let product_slider = document.getElementById("product-slider");
  let product_next = document.getElementsByClassName("product-next");
  let product_prev = document.getElementsByClassName("product-prev");
  let product_item = document.getElementById("product-slide");

  for (let i = 0; i < product_next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    product_prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        p_translateX(position); //translate items
      }
    });

    product_next[i].addEventListener("click", function () {
      if (position >= 0 && position < p_hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        p_translateX(position); //translate items
      }
    });
  }

  function p_hiddenItems() {
    //get hidden items
    let items = p_getCount(product_item, false);
    let visibleItems = product_slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function p_translateX(position) {
  //translate items
  let slide = document.getElementById("product-slide");
  slide.style.left = position * -210 + "px";
}

function p_getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += p_getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

function live_Auction_Scroll() {
  let live_Auction_slider = document.getElementById(
    "live-auction__section-slider"
  );
  let live_Auction_next = document.getElementsByClassName(
    "live-auction__section-prev"
  );
  let live_Auction_prev = document.getElementsByClassName(
    "live-auction__section-next"
  );
  let live_Auction_slide = document.getElementById(
    "live-auction__section-slide"
  );

  for (let i = 0; i < live_Auction_next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    live_Auction_prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        l_translateX(position); //translate items
      }
    });

    live_Auction_next[i].addEventListener("click", function () {
      if (position >= 0 && position < l_hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        l_translateX(position); //translate items
      }
    });
  }

  function l_hiddenItems() {
    //get hidden items
    let items = l_getCount(live_Auction_slide, false);
    let visibleItems = live_Auction_slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function l_translateX(position) {
  //translate items
  let live_Auction_slide = document.getElementById(
    "live-auction__section-slide"
  );
  live_Auction_slide.style.left = position * -210 + "px";
}

function l_getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += l_getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

function influencers_Scroll() {
  let influencers_slider = document.getElementById(
    "influencers__section-slider"
  );
  let influencers_next = document.getElementsByClassName(
    "influencers__section-prev"
  );
  let influencers_prev = document.getElementsByClassName(
    "influencers__section-next"
  );
  let influencers_slide = document.getElementById("influencers__section-slide");

  for (let i = 0; i < influencers_next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    influencers_prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        i_translateX(position); //translate items
      }
    });

    influencers_next[i].addEventListener("click", function () {
      if (position >= 0 && position < i_hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        i_translateX(position); //translate items
      }
    });
  }

  function i_hiddenItems() {
    //get hidden items
    let items = i_getCount(influencers_slide, false);
    let visibleItems = influencers_slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function i_translateX(position) {
  //translate items
  let influencers_slide = document.getElementById("influencers__section-slide");
  influencers_slide.style.left = position * -210 + "px";
}

function i_getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += i_getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

walletScroll();
trendingScroll();
live_Auction_Scroll();
influencers_Scroll();