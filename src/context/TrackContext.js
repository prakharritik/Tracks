import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};
const createTracks = (dispatch) => async (name, locations) => {
  console.log(name, locations.length);
  try {
    await trackerApi.post("/tracks", { name, locations });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);
