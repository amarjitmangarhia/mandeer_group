import axios from 'axios';
const url = 'https://www.alphavantage.co/query';

export function fetchStockDetails(){
    const params = {
      function: 'TIME_SERIES_DAILY',
      symbol: 'IBM',
      interval: '5min',
      apikey: 'OQ9CGP8R8KIF0K30',
    };
    
    const config = {
      method: 'get',
      url: url,
      params: params,
      headers: {
        'User-Agent': 'request',
      },
    };
    
    return axios(config)
     
}