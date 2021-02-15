import {request} from 'network/request'

export function getHomeMultiData(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}

export function getDetail(iid) {
  return request({
    url: "detail",
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: "recommend"
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBg = itemInfo.discountBgColor
    this.sales = columns[0]
    this.collection = columns[1]
    this.deliver = shopInfo.services[3].name
    this.service1 = shopInfo.services[0].name
    this.service2 = shopInfo.services[1].name
    this.service3 = shopInfo.services[2].name
    this.service1Icon = shopInfo.services[0].icon
    this.service2Icon = shopInfo.services[1].icon
    this.service3Icon = shopInfo.services[2].icon
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class GoodsShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParams {
  constructor(itemParams) {
    this.ruleDisclaimer = itemParams.rule.disclaimer
    this.ruleKey = itemParams.rule.key
    this.ruleTables = itemParams.rule.tables
    this.infoKey = itemParams.info.key
    this.infoSet = itemParams.info.set
  }
}