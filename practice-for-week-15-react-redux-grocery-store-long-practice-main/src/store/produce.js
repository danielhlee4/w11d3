import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  return { type: POPULATE, produce: produceData };
};

export default function produceReducer(state = {}, action) {
  Object.freeze(state);

  const nextState = { ...state };

  switch (action.type) {
    case POPULATE:
      action.produce.forEach(element => {
        nextState[element.id] = element;
      });
      return nextState;
    default:
      return nextState;
  }
}

// export default function produceReducer(state = {}, action) {
//   switch (action.type) {
//     case POPULATE:
//       const newState = {};
//       action.produce.forEach(produce => {
//         newState[produce.id] = produce;
//       });
//       return newState;
//     default:
//       return state;
//   }
// }