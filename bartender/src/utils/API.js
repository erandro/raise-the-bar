import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getBar: function() {
    return  axios.get("/api/bar");
  },
  getScores: function() {
    return axios.get("/api/bar/score");
  },
  saveScore: function(scoreData){
    return axios.post("/api/bar/score", scoreData);
  }
};
