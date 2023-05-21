function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 === "object" && typeof o2 === "object") {
    const o1entries = Object.entries(o1);
    const o2entries = Object.entries(o2);
    if (o1entries.length !== o2entries.length) return false;
    for (let i = 0; i < o1entries.length; i++) {
      return areDeeplyEqual(o1entries, o2entries);
    }
  } else if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) return false;
    for (let i = 0; i < o1.length; i++) {
      if (o1[i] !== o2[i]) return false;
    }
  } else {
    if (o1 !== o2) return false;
  }
  return true;
}
