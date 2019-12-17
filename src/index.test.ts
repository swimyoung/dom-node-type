import {
  isBlockNode,
  isCommentNode,
  isElementNode,
  isInlineNode,
  isSelfClosingNode,
  isTextNode,
} from './index';

describe('dom node type', () => {
  it('should check block node', () => {
    expect(isBlockNode(document.createElement('div'))).toBe(true);
    expect(isBlockNode(document.createElement('span'))).toBe(false);
  });

  it('should check comment node', () => {
    expect(isCommentNode(document.createComment('this is comment'))).toBe(true);
    expect(isCommentNode(document.createElement('div'))).toBe(false);
  });

  it('should check element node', () => {
    expect(isElementNode(document.createElement('div'))).toBe(true);
    expect(isElementNode(document.createElement('span'))).toBe(true);
  });

  it('should check inline node', () => {
    expect(isInlineNode(document.createElement('div'))).toBe(false);
    expect(isInlineNode(document.createElement('span'))).toBe(true);
  });

  it('should check self closing node', () => {
    expect(isSelfClosingNode(document.createElement('img'))).toBe(true);
    expect(isSelfClosingNode(document.createElement('br'))).toBe(true);
  });

  it('should check text node', () => {
    expect(isTextNode(document.createTextNode('text'))).toBe(true);
    expect(isTextNode(document.createElement('div'))).toBe(false);
  });
});
