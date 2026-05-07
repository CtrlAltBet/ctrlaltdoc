function scrollToNavItem() {
  var path = window.location.href
    .split("/")
    .pop()
    .replace(/\.html/, "");

  document.querySelectorAll("nav a").forEach(function (link) {
    var href = link.attributes.href.value.replace(/\.html/, "");
    if (path === href) {
      link.scrollIntoView({ block: "center" });
      return;
    }
  });

  // markActiveNavItem();
}

scrollToNavItem();

navigation.addEventListener("navigate", (event) => {
  let url = new URL(event.destination.url);
  let hash = url.hash;

  // console.log({ hash });
  // console.log(findNavItemByHash(hash));

  // const navItem = findNavItemByHash(hash);
});

function findNavItemByHash(hash) {
  if (!hash) return null;

  const navItems = document.querySelectorAll("nav a");
  for (const navItem of navItems) {
    if (navItem.hash === hash) {
      return navItem;
    }
  }

  return null;
}

function markActiveNavItem() {
  var path = window.location.href
    .split("/")
    .pop()
    .replace(/\.html/, "");

  document.querySelectorAll("nav a.active").forEach(function (link) {
    link.classList.remove("active");
  });

  document.querySelectorAll("nav a").forEach(function (link) {
    var href = link.attributes.href.value.replace(/\.html/, "");
    if (path === href) {
      link.classList.add("active");
      return;
    }
  });
}
