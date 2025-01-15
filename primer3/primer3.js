class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const validatePost = (post) => {
  if (
    !post.text || typeof post.text !== 'string' || post.text.trim() === '' ||
    !post.timestamp || typeof post.timestamp !== 'string' || !Date.parse(post.timestamp) ||
    !post.author || typeof post.author !== 'string' || post.author.trim() === ''
  ) {
    throw new Error('Invalid post structure');
  }
};

function createLinkedList(posts) {
  if (posts.length === 0) {
    throw new Error("posts must have at least one element in the array");
  }
  posts.forEach(validatePost);

  let head = new Node(posts[0]);
  let current = head;

  for (let i = 1; i < posts.length; i++) {
    current.next = new Node(posts[i]);
    current = current.next;
  }
  return head;
}

function searchSocialMediaFeed(feed, keyword) {
  if (!feed) {
    return [];
  }
  const results = [];
  const normalisedKeyword = keyword.toLowerCase();
  let current = feed;

  while (current) {
    const normalisedText = current.data.text.toLowerCase().split(" ");
    const isMatch = normalisedText.some(word => word.includes(normalisedKeyword));

    if (isMatch) {
      results.push(current.data);
    }
    current = current.next;
  }
  return results;
}

export {createLinkedList, searchSocialMediaFeed};