function getItemAttributes(item) {
  const attributes = [];
  const classes = [];
  const ancestors = item.ancestors || [];

  //   if (ancestors.length) console.log(ancestors.map((a) => getElementTextContent(a)));

  if (item.kind && item.kind.length) {
    classes.push("kind-" + item.kind);
    attributes.push({ data: "kind", value: item.kind });
  }

  if (item.access) {
    classes.push("access-" + item.access);
  }

  if (item.scope) {
    classes.push("scope-" + item.scope);
  }

  return {
    classes,
    attributes: attributes.map((attr) => `data-${attr.data}="${attr.value}"`).join(" "),
    ancestors: ancestors.map((a) => getElementTextContent(a)),
  };
}

function getElementTextContent(htmlElementAsString) {
  let textContent = htmlElementAsString.replace(/<[^>]+>/g, "");
  // remove: ~, ., #, :, and any leading/trailing whitespace
  textContent = textContent.replace(/^[~.#:]+|[~.#:]+$/g, "").trim();
  return textContent;
}

function createListObject(type) {
  const listObj = {
    classes: [],
    styles: [],
    dataAttrs: {},
    content: "",
    contentObjects: [], // for nested lists or complex content
  };

  function addClass(className) {
    listObj.classes.push(className);
  }

  function addClasses(classNames) {
    listObj.classes.push(...classNames);
  }

  function addAttr(attrName, attrValue) {
    if (attrName === "style") {
      listObj.styles.push(attrValue.replace(/;?$/, "")); // Remove trailing semicolon if present
    } else if (attrValue !== undefined) {
      listObj.dataAttrs[attrName] = attrValue;
    }
  }
  function setContent(content) {
    listObj.content = content;
  }

  function appendContent(content) {
    listObj.content += content;
  }

  function appendListObject(otherListObj) {
    listObj.contentObjects.push(otherListObj);
  }

  function hidden(isHidden) {
    if (isHidden) {
      addAttr("style", "display: none;");
    }
  }

  function html() {
    const classAttr =
      listObj.classes.length > 0 ? ` class="${listObj.classes.join(" ")}"` : "";
    const dataAttrs = Object.entries(listObj.dataAttrs)
      .map(([key, value]) => `data-${key}="${value}"`)
      .join(" ");

    const dataAttrString = dataAttrs ? " " + dataAttrs : "";

    const styleAttr =
      listObj.styles.length > 0 ? ` style="${listObj.styles.join("; ")}"` : "";

    const content =
      listObj.content + listObj.contentObjects.map((obj) => obj.html()).join("");

    return `<${type}${classAttr}${dataAttrString}${styleAttr}>${content}</${type}>`;
  }

  return {
    addClass,
    addClasses,
    addAttr,
    setContent,
    appendContent,
    appendListObject,
    hidden,
    html,
  };
}
module.exports = {
  getItemAttributes,
  createListObject,
  //   itemToListItem: itemToLi,
};
