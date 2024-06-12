import React from "react";

const Cat = () => {
  let cats = [
    {
      pet: "cat",
      breed: "Siamese",
      lifespan: (15, 20),
      image: "/public/Siamese.jpg",
    },
    {
      pet: "cat",
      breed: "Burmese",
      lifespan: (16, 30),
      image: "/public/Burmese.jpg",
    },
    {
      pet: "cat",
      breed: "Balinese",
      lifespan: (15, 20),
      image: "/public/Balinese.jpg",
    },
    {
      pet: "cat",
      breed: "Russian Blue",
      lifespan: (10, 20),
      image: "/public/Russian-Blue.jpg",
    },
    {
      pet: "cat",
      breed: "Maine Coon",
      lifespan: (12, 15),
      image: "/public/Maine-Coon.jpg",
    },
    {
      pet: "cat",
      breed: "Norwegian Forest Cat",
      lifespan: (14, 16),
      image: "/public/Norwegian-Forest.jpg",
    },
    {
      pet: "cat",
      breed: "Ragdoll",
      lifespan: (12, 16),
      image: "/public/Ragdoll.jpg",
    },
    {
      pet: "cat",
      breed: "Siberian Forest Cat",
      lifespan: (11, 15),
      image: "/public/Siberian-Forest.webp",
    },
    {
      pet: "cat",
      breed: "Sphynx",
      lifespan: (8, 12),
      image: "/public/Sphynx.jpg",
    },
    {
      pet: "cat",
      breed: "Cornish Rex",
      lifespan: (12, 15),
      image: "/public/Cornish-Rex.jpg",
    },
    {
      pet: "cat",
      breed: "Oriental Shorthair",
      lifespan: (12, 15),
      image: "/public/Oriental-Shorthair.webp",
    },
    {
      pet: "cat",
      breed: "Singapura",
      lifespan: (9, 15),
      image: "/public/Singapura.jpg",
    },
    {
      pet: "cat",
      breed: "American Shorthair",
      lifespan: (15, 20),
      image: "/public/American-Shorthair.jpg",
    },
    {
      pet: "cat",
      breed: "Abyssinian",
      lifespan: (12, 15),
      image: "/public/Abyssinian.webp",
    },
    {
      pet: "cat",
      breed: "Bombay",
      lifespan: (15, 20),
      image: "/public/Bombay.jpg",
    },
    {
      pet: "cat",
      breed: "European Burmese",
      lifespan: (16, 20),
      image: "/public/European-Burmese.jpg",
    },
    {
      pet: "cat",
      breed: "Kurilian Bobtail",
      lifespan: (10, 15),
      image: "/public/Kurilian-Bobtail.webp",
    },
    {
      pet: "cat",
      breed: "Turkish Angora",
      lifespan: (12, 18),
      image: "/public/Turkish-Angora.webp",
    },
    {
      pet: "cat",
      breed: "Turkish Van",
      lifespan: (12, 17),
      image: "/public/Turkish-Van.jpg",
    },
    {
      pet: "cat",
      breed: "Selkirk Rex",
      lifespan: (9, 15),
      image: "/public/Selkirk-Rex.webp",
    },
  ];

  return (
    <>
      {cats.map((ele) => {
        return (
          <div className="flex">
            <div className="w-96 h-96">
              <img className="object-cover" src={ele.image} alt="" />
              <h2>{ele.breed}</h2>
            </div>
            <p></p>
          </div>
        )
      })}
    </>
  );
};

export default Cat;
