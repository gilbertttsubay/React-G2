export default function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
      case "ADD_TEMPAT_LAHIR":
        return [...state, { id: Math.random(), text: action.payload.text }];
        case "ADD_MOTTO":
          return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
