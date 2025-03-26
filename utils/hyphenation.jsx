import Hypher from "hypher";
import ruPattern from "hyphenation.ru";

const h = new Hypher(ruPattern);

const addHyphenation = (text) => {
  return h.hyphenateText(text).replace(/\u00AD/g, "\u200B");
};

export const HyphenationObjectValues = (obj) => {
  if (typeof obj === "string") {
    return addHyphenation(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(processGameText);
  }

  if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, HyphenationObjectValues(value)])
    );
  }

  return obj;
};
