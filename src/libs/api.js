import axios from 'axios';

/**
 * Function that gets data based on a search term
 *
 * @param {term} term search term passed
 * @param {resultsNum} resultsNum number of returned results per page
 * @param {page} page number of returned results per page
 */
export const getRecords = (term, resultsNum, page) => {
  return axios.get('https://videos.cern.ch/api/records/', {
    params: {
      page: page,
      size: resultsNum,
      q: term
    }
  });
}
