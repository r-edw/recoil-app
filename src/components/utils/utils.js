const users = [
  {
    associates: ["67891"],
    id: "12345",
    img:
      "https://i.insider.com/5dade9bc045a3139e8686c33?width=1100&format=jpeg&auto=webp",
    firstname: "Walter",
    lastname: "White"
  },
  {
    associates: ["12345"],
    id: "67891",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLjAW3r7roQl_Rg5JeFF7xxdjSeG4kq272YwipkidJ_kUIaDEo&usqp=CAU",
    firstname: "Jesse",
    lastname: "Pinkman"
  }
];

const queryDB = async (queryId, error = false) => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  if (error) {
    return {error: true};
  } else {
    return users.find(({id}) => id === queryId);
  }
};

export {queryDB};
