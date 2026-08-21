/**
 * Replace #root inner HTML by element id and matching </div> depth.
 * A non-greedy regex to the first </div> truncates when the body contains nested divs,
 * which left inner routes with the homepage shell.
 */
export function injectRoot(html, body) {
  const openMatch = html.match(/<div\b[^>]*\bid=["']root["'][^>]*>/i);
  if (!openMatch) {
    throw new Error('injectRoot: <div id="root"> not found');
  }

  const openStart = html.indexOf(openMatch[0]);
  const openEnd = openStart + openMatch[0].length;

  let depth = 1;
  let cursor = openEnd;

  while (cursor < html.length && depth > 0) {
    const slice = html.slice(cursor);
    const nextOpenRel = slice.search(/<div\b/i);
    const nextCloseRel = slice.search(/<\/div>/i);

    if (nextCloseRel === -1) {
      throw new Error("injectRoot: unclosed #root");
    }

    const nextOpen = nextOpenRel === -1 ? Number.POSITIVE_INFINITY : cursor + nextOpenRel;
    const nextClose = cursor + nextCloseRel;

    if (nextOpen < nextClose) {
      depth += 1;
      cursor = nextOpen + 4;
      continue;
    }

    depth -= 1;
    if (depth === 0) {
      return `${html.slice(0, openEnd)}${body}${html.slice(nextClose)}`;
    }
    cursor = nextClose + 6;
  }

  throw new Error("injectRoot: unclosed #root");
}
