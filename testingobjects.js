// let myObject = {name: 'John', age: 22, gender: 'Male', likes: ['sushi','baseball','reading']};
// console.log(myObject);
// console.log(myObject['likes'][2]);
// console.log(myObject.likes[2]);

// let easyObj= {
//     level1: {prop1: "value1",level2: {prop2: "value2",level3: {prop3: "value3",level4: {prop4: "value4",level5: {prop5: "you made it" }
//                 }
//             }
//         }
//     }
// };

// console.log(easyObj.level1.level2.level3.level4.level5.prop5);

// let myList = ["Bob", ["Sally", ['John']]]
// console.log(myList[1][1][0]);

// let myArray = ["Bob", [], ["Sally", "John"]]
// // console.log(myArray[2][1])
// let myObject2 = {
//     users: {  john: {age: 22,  gender: 'male'}, kelly: { age: 30, gender: 'female'},sam: {age: 40, gender: 'male'  }  }}

// console.log(myObject2.users.kelly.gender);

// const mediumObject = {
//     level1: {
//       level2: {
//         level3: {
//           level4: {
//             level5: {
//               level6: {
//                 level7: {
//                   level8: [
//                     {
//                       level9: {
//                         level10: [
//                           {
//                             level11: {
//                               level12: [
//                                 [],
//                                 {
//                                   level13: [
//                                     {
//                                       level14: {
//                                         level15: [
//                                           [],
//                                           [],
//                                           {
//                                             level16: {
//                                               level17: [
//                                                 {
//                                                   level18: {
//                                                     level19: {
//                                                       level20: "You made it!"
//                                                     }
//                                                   }
//                                                 }
//                                               ]
//                                             }
//                                           }
//                                         ]
//                                       }
//                                     }
//                                   ]
//                                 }
//                               ]
//                             }
//                           }
//                         ]
//                       }
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   };

//   console.log(mediumObject. level1.level2.level3.level4.level5.level6.level7.level8[0].level9.level10[0].level11.level12[1].level13[0].level14.level15[2].level16.level17[0].level18.level19.level20);


const hardObj = {
  level1: {
    level2: [
      { level3: [] },
      {
        level3: {
          level4: [
            [],
            {
              level5: [
                {
                  level6: {
                    level7: [
                      [],
                      [],
                      {
                        level8: [
                          { level9: [] },
                          {
                            level9: [
                              {},
                              {
                                level10: [
                                  [],
                                  {
                                    level11: {
                                      level12: [
                                        { level13: [] },
                                        { level13: { level14: [[], [], { level15: { level16: [{ level17: { level18: [{ level19: [{ level20: "You made it on hard object!" }] }] } }] } }] }  },
                                        { level13: [] }]
                                  }}
                                      ]
                                    }
                         ] },
                                  []
                                ]
                              },
                              {}
                            ]
                          }
                          },
                        ]
                      }
                    ]
                  }
                },
                { level6: [] }
              ]
            },
};
console.log(hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1].level9[1].level10[1].level11.level12[1].level13.level14[2].level15.level16[0].level17.level18[0].level19[0].level20);