import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({}, commonParams);
  const myOption = Object.assign({}, options, {
    tpl: 'v12',
    page: 'other',
    callback: 'GetRecomListCallback5053087508676672',
    rnd: '5053087508676672',
    jsonpCallback: 'GetRecomListCallback5053087508676672',
  });
  return jsonp(url, data, myOption)
}


