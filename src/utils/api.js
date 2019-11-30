import axios from "axios";


const getStartedEndpoint = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'


export default {
  
  getStarted: function() {
    return axios.get(
      getStartedEndpoint
    );
  },
};