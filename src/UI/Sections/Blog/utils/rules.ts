interface blogs {
  title: string;
  description: string;
  imgAlt: string;
  link: string;
}

const blogsPath: blogs[] = [
  {
    title: "Currently Working on the Mobile App",
    description:
      "Experience BoardStack on the go with our mobile app  soon for IOS and Android.",
    imgAlt: "Broadcasing of App",
    link: "/assets/blog/blog1.jpeg",
  },
  {
    title: "Added Drag and Drop functionality",
    description: "Now you can drag and drop cards from one column to another.",
    imgAlt: "Broadcasing of App",
    link: "/assets/blog/kanbanExample.png",
  },
];

export default blogsPath;
