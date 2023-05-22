function jsonStringify(object: any): string {
  let returnString = "";
  if (typeof object === "string") return `"${object}"`;
  if (object === null) return `null`;
  if (typeof object !== "object") return `${String(object)}`;
  if (Array.isArray(object)) {
    returnString += `[`;
    for (let i = 0; i < object.length; i++) {
      returnString += `${jsonStringify(object[i])}`;
      if (i < object.length - 1) returnString += `,`;
    }
    returnString += `]`;
  }
  if (typeof object === "object" && !Array.isArray(object)) {
    returnString += `{`;
    const objEntries = Object.entries(object);
    for (let i = 0; i < objEntries.length; i++) {
      returnString += `${jsonStringify(objEntries[i][0])}:${jsonStringify(
        objEntries[i][1]
      )}`;
      if (i < objEntries.length - 1) returnString += `,`;
    }
    returnString += `}`;
  }
  return returnString;
}
