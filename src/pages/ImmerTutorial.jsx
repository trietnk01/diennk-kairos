import React from "react";
function ImmerTutorial() {
  const person1 = {
    name: "hoa",
    age: NaN,
    dob: new Date(),
    networks: {
      facebook: "https://www.facebook.com/diennguyenit",
    },
  };
  const person2 = JSON.parse(JSON.stringify(person1));
  person2.name = "dien";
  person2.networks.facebook = "https://www.facebook.com/techmely";
  console.log("person1 = ", person1);
  console.log("person2 = ", person2);
  /* console.log("person1 : ", person1, person1.name, person1.networks.facebook);
  console.log("person2 : ", person2, person2.name, person2.networks.facebook); */
  console.log("========================================================================");
  let baseState = [
    {
      title: "Learn TypeScript",
      done: true,
      person: {
        name: "nguyenkimdien",
        age: 34,
      },
    },
    {
      title: "Try Immer",
      done: false,
      person: {
        name: "nguyenkimtriet",
        age: 27,
      },
    },
  ];
  let nextStateWithoutImmer = [...baseState];
  nextStateWithoutImmer[1] = {
    ...nextStateWithoutImmer[1],
    person: {
      name: "nguyenvanhoa",
      age: 90,
    },
  };
  console.log("baseState = ", baseState);
  console.log("nextStateWithoutImmer = ", nextStateWithoutImmer);
  /* console.log("=======================================================");
  const nextStateImmer = produce(baseState, (drafState) => {
    drafState[1].person.name = "nguyenvanhoa";
    drafState[1].person.age = 90;
  });
  console.log("nextStateImmer = ", nextStateImmer); */
  return <div></div>;
}

export default ImmerTutorial;
