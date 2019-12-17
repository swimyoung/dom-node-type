interface TagCategory {
  [x: string]: boolean;
}

function arrayToTagCategory(arr: Array<string>): TagCategory {
  return Object.freeze(
    arr.reduce(
      (o, v) => Object.assign(o, { [v.toLocaleLowerCase()]: true }),
      {},
    ),
  );
}

export const metaDataTagCategory = arrayToTagCategory([
  'base',
  'head',
  'link',
  'meta',
  'style',
  'title',
]);

export const contentSectioningTagCategory = arrayToTagCategory([
  'address',
  'article',
  'aside',
  'footer',
  'header',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'main',
  'nav',
  'section',
]);

export const textContentTagCategory = arrayToTagCategory([
  'blockquote',
  'dd',
  'dir',
  'div',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'hr',
  'li',
  'main',
  'ol',
  'p',
  'pre',
  'ul',
]);

export const inlineTextSemanticTagCategory = arrayToTagCategory([
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'br',
  'cite',
  'code',
  'data',
  'dfn',
  'em',
  'i',
  'kbd',
  'mark',
  'q',
  'rb',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'tt',
  'u',
  'var',
  'wbr',
]);

export const multimediaTagCategory = arrayToTagCategory([
  'area',
  'audio',
  'img',
  'map',
  'track',
  'video',
]);

export const embeddedContentTagCategory = arrayToTagCategory([
  'applet',
  'embed',
  'iframe',
  'noembed',
  'object',
  'param',
  'picture',
  'source',
]);

export const scriptTagCategory = arrayToTagCategory([
  'canvas',
  'noscript',
  'script',
]);

export const demarcatingEditTagCategory = arrayToTagCategory(['del', 'ins']);

export const tableContentTagCategory = arrayToTagCategory([
  'caption',
  'col',
  'colgroup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
]);

export const formTagCategory = arrayToTagCategory([
  'button',
  'datalist',
  'fieldset',
  'form',
  'input',
  'label',
  'legend',
  'meter',
  'optgroup',
  'option',
  'output',
  'progress',
  'select',
  'textarea',
]);

export const interactiveTagCategory = arrayToTagCategory([
  'details',
  'dialog',
  'menu',
  'menuitem',
  'summary',
]);

export const deprecatedTagCategory = arrayToTagCategory([
  'acronym',
  'applet',
  'basefont',
  'bgsound',
  'big',
  'blink',
  'center',
  'command',
  'content',
  'dir',
  'element',
  'font',
  'frame',
  'frameset',
  'image',
  'isindex',
  'keygen',
  'listing',
  'marquee',
  'menuitem',
  'multicol',
  'nextid',
  'nobr',
  'noembed',
  'noframes',
  'plaintext',
  'shadow',
  'spacer',
  'strike',
  'tt',
  'xmp',
]);

export const selfClosingTagCategory = arrayToTagCategory([
  'br',
  'img',
  'col',
  'hr',
]);

export const blockTagCategory: TagCategory = {
  ...contentSectioningTagCategory,
  ...textContentTagCategory,
  ...multimediaTagCategory,
  ...embeddedContentTagCategory,
  ...tableContentTagCategory,
  ...formTagCategory,
  ...selfClosingTagCategory,
};

export const inlineTagCategory: TagCategory = {
  ...inlineTextSemanticTagCategory,
  ...{
    br: undefined,
    code: undefined,
  },
};

function isElementNode(node: Node): boolean {
  return !!node && node.nodeType === Node.ELEMENT_NODE;
}

function isTextNode(node: Node): boolean {
  return !!node && node.nodeType === Node.TEXT_NODE;
}

function isCommentNode(node: Node): boolean {
  return !!node && node.nodeType === Node.COMMENT_NODE;
}

function isBlockNode(node: Node): boolean {
  return (
    isElementNode(node) &&
    !!blockTagCategory[(node as Element).tagName.toLocaleLowerCase()]
  );
}

function isInlineNode(node: Node): boolean {
  return (
    isElementNode(node) &&
    !!inlineTagCategory[(node as Element).tagName.toLocaleLowerCase()]
  );
}

function isSelfClosingNode(node: Node): boolean {
  return (
    isElementNode(node) &&
    !!selfClosingTagCategory[(node as Element).tagName.toLocaleLowerCase()]
  );
}

export {
  isElementNode,
  isTextNode,
  isCommentNode,
  isBlockNode,
  isInlineNode,
  isSelfClosingNode,
};
