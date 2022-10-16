const data = [
  {
    tag: 'h3',
    text: 'HTML from Data',
    children: [],
  },
  {
    tag: 'p',
    text: `This is the first paragraph.`,
    children: [],
  },
  {
    tag: 'p',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus
    saepe rerum molestias in velit nobis nemo nihil, error, reprehenderit
    placeat delectus quam tenetur impedit ipsa ipsam non possimus
    blanditiis.`,
    children: [
      {
        tag: 'img',
        src: './img/rick-morty3.jpg',
        alt: 'Rick and Morty 3',
        beforeText: true,
      },
      {
        tag: 'img',
        src: './img/rick-morty5.jpg',
        alt: 'Rick and Morty 5',
        beforeText: true,
      },
      {
        tag: 'img',
        src: './img/rick-morty7.jpg',
        alt: 'Rick and Morty 7',
        beforeText: false,
      },
    ],
  },
  {
    tag: 'p',
    text: 'The third paragraph.',
    children: [
      {
        tag: 'span',
        text: 'This is a SPAN inside a paragraph.',
        beforeText: false,
      },
    ],
  },
  {
    tag: 'ol',
    text: null,
    children: [
      { tag: 'li', text: 'Item One' },
      { tag: 'li', text: 'Item Two' },
      { tag: 'li', text: 'Item Three' },
      { tag: 'li', text: 'Item Four' },
    ],
  },
  {
    tag: 'p',
    text: 'Some plain old text.',
    children: [
      {
        tag: 'a',
        text: 'MDN CSS Guide',
        href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
        beforeText: true,
      },
      {
        tag: 'a',
        text: 'MDN JS Guide',
        href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
        beforeText: false,
      },
    ],
  },
];

export default data;
