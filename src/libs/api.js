import axios from 'axios';

/**
 * Function that gets data based on a search term
 *
 * @param {term} term search term passed
 * @param {resultsNum} resultsNum number of returned results per page
 */
export const getRecords = async (term, resultsNum) => {
  try {
    return await axios.get('https://zenodo.org/api/records', {
      params: {
        q: term,
        size: resultsNum
      }
    });
  } catch (e) {
    console.error('getRecords', e);
  }
}
