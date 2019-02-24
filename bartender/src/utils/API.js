import axios from "axios";

export default {
  getBar: function () {
    return axios.get("/api/bar");
  },
  getScores: function () {
    return axios.get("/api/bar/score");
  },
  saveScore: function (scoreData) {
    return axios.post("/api/bar/score", scoreData);
  }
};
