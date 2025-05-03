import Hypher from "hypher";
import ruPattern from "hyphenation.ru";

const h = new Hypher(ruPattern);

const isString = (value) => typeof value === "string";
const isObject = (value) => typeof value === "object";

const addHyphenation = (text) => {
  return h.hyphenateText(text).replace(/\u00AD/g, "\u200B");
};

export const HyphenationObjectValues = (obj) => {
  if (!obj) return obj;

  if (isString(obj)) return addHyphenation(obj);

  if (Array.isArray(obj)) {
    return obj.map((item) => HyphenationObjectValues(item));
  }
  
  if (isObject(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key, HyphenationObjectValues(value)
      ])
    );
  }

  return obj;
};
