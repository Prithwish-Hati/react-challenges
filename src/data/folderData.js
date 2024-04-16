export const data = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 1,
      name: "public",
      isFolder: true,
      children: [
        {
          id: 1,
          name: "images",
          isFolder: true,
        },
        {
          id: 2,
          name: "image1.jpg",
          isFolder: false,
        },
      ],
    },
    {
      id: 2,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 1,
          name: "components",
          isFolder: true,
        },
        {
          id: 2,
          name: "main.jsx",
          isFolder: false,
        },
        {
          id: 3,
          name: "App.jsx",
          isFolder: false,
        },
      ],
    },
    {
      id: 3,
      name: "package.json",
      isFolder: false,
    },
    {
      id: 4,
      name: "package-lock.json",
      isFolder: false,
    },
  ],
};
