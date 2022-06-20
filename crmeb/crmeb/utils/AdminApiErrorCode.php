<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace crmeb\utils;

/**
 * AdminApi错误码统一存放类
 * Class AdminApiErrorCode
 * @package crmeb\utils
 */
class AdminApiErrorCode
{
    // 商品
    const ERR_PRODUCT = [
        412000 => 'product.category.save.name',
        412001 => 'product.category.save.alreadyExist',
        412600 => 'product.category.del.child',
        411000 => 'product.save.name',
        411001 => 'product.save.slideImage',
        411002 => 'product.save.category',
        411003 => 'product.save.rakeBackPrice',
        411004 => 'product.save.switchVirtualType',
        411005 => 'product.save.enterRuleName',
        411006 => 'product.save.enterAttributeName',
        411007 => 'product.save.ruleNameNotExist',
        411008 => 'product.save.attributeNameNotExist',
        411009 => 'product.save.attrValue',
        411010 => 'product.save.detail',
        411011 => 'product.save.price',
        411012 => 'product.save.stock',
        411013 => 'product.save.costPrice',
        411014 => 'product.save.pic',
        411015 => 'product.save.emptyAttrValue',
        411016 => 'product.save.description',
        411017 => 'product.save.show',
        411019 => 'product.save.unShow',
        411020 => 'product.upload.file',
        411021 => 'product.upload.fileType',
        411022 => 'product.upload.cannotBeEmpty',
        411023 => 'product.reply.replyTime',
        411024 => 'product.reply.virtualReply',
        411025 => 'product.reply.content',
        411026 => 'product.reply.failed',
        411027 => 'product.reply.success',
        411028 => 'product.rule.ids',
        411029 => 'product.copy.apikey',
        411030 => 'product.copy.makePath',
        411031 => 'product.copy.makePathCatch',
        411032 => 'product.copy.description',
        411033 => 'product.copy.uploadType',
        411034 => 'product.copy.extName',
        411035 => 'product.copy.streamFailed',
        411036 => 'product.attr.vipPrice',
        411037 => 'product.attr.virtualCoupon',
        411038 => 'product.attr.virtualCardCount',
        411039 => 'product.save.limitType',
        411040 => 'product.save.limitNum',
        411600 => 'product.del.restoreFailed',
        411601 => 'product.del.restoreSuccess',
        411602 => 'product.del.recycleSuccess',
    ];

    // 商品
    const ERR_MARKETING = [
        411700 => 'marketing.seckillExist',
        411701 => 'marketing.bargainExist',
        411702 => 'marketing.combinationExist',
        411703 => 'marketing.endTime',
        411704 => 'marketing.stopTime',
        411705 => 'marketing.removeOrRecycle',
        411706 => 'marketing.occupyStock',
        411707 => 'marketing.onceNum',
        411708 => 'marketing.quota',
        411709 => 'marketing.combination.stopTime',
        411710 => 'marketing.seckill.stop',
        411711 => 'marketing.seckill.notStarted',

        411712 => 'marketing.integral.productNotExist',
        411713 => 'marketing.integral.del',
        411714 => 'marketing.integral.onceNum',
        411715 => 'marketing.integral.num',
        411716 => 'marketing.integral.attrs',
        411717 => 'marketing.integral.mark',
        411718 => 'marketing.integral.markFailed',
        411719 => 'marketing.integral.markSuccess',
        411720 => 'marketing.integral.delOrders',
        411721 => 'marketing.integral.idsCount',

        411735 => 'marketing.bargain.save.price',
        411736 => 'marketing.bargain.save.minPrice',
        411737 => 'marketing.bargain.save.quota',
        411738 => 'marketing.bargain.save.peopleNum',
        411739 => 'marketing.bargain.productNotExist',
        411740 => 'marketing.bargain.stop',
        411741 => 'marketing.bargain.failed',
        411742 => 'marketing.bargain.paid',
        411743 => 'marketing.removeOrDelete',
        411744 => 'marketing.stockNotEnough',
        411745 => 'marketing.bargain.bargainCount',
        411746 => 'marketing.bargain.bargainHelpCount',
        411747 => 'marketing.bargain.shareNotOpen',
        411748 => 'marketing.bargain.alreadyBargain',
    ];
    /** 上架成功 200 */
    const LAUNCH_SUCCESS = 'launchSuccess';
    /** 下架成功 200 */
    const REMOVE_SUCCESS = 'removeSuccess';
    /** 同步成功 200 */
    const SYNC_SUCCESS = 'syncSuccess';
    /** 同步失败 400 */
    const SYNC_FAILED = 'syncFailed';

    // 优惠券
    const ERR_COUPON = [
        411800 => 'coupon.save.startUseTime',
        411801 => 'coupon.save.startEndTime',
        411802 => 'coupon.notExist',
        411803 => 'coupon.giveFailed',
        411804 => 'coupon.issue.notExist',
        411805 => 'coupon.issue.moneyLevel',
        411806 => 'coupon.issue.status',
        411807 => 'coupon.issue.received',
        411808 => 'coupon.issue.over',
        411809 => 'coupon.repeat',
        411810 => 'coupon.status',
        411811 => 'coupon.grant.failed',
        411812 => 'coupon.grant.success',
    ];

    // 订单
    const ERR_ORDER = [
        412001 => 'order.del.cannotBeDeleted',
        412002 => 'order.del.failed',
        412003 => 'order.del.ids',
        412004 => 'order.del.noDelIds',

        412100 => 'order.delivery.notFound',
        412101 => 'order.delivery.deleted',
        412102 => 'order.delivery.delivered',
        412103 => 'order.delivery.type',
        412104 => 'order.delivery.orderDelivery.deliveryName',
        412105 => 'order.delivery.orderDelivery.deliveryId',
        412106 => 'order.delivery.orderDelivery.deliveryUid',
        412107 => 'order.delivery.orderDelivery.deliveryIdCheck',
        412108 => 'order.delivery.failed',
        412109 => 'order.delivery.orderDeliverGoods.deliveryName',
        412110 => 'order.delivery.orderDeliverGoods.deliveryCode',
        412111 => 'order.delivery.orderDeliverGoods.expressTempId',
        412112 => 'order.delivery.orderDeliverGoods.toName',
        412113 => 'order.delivery.orderDeliverGoods.toTel',
        412114 => 'order.delivery.orderDeliverGoods.toAddr',
        412115 => 'order.delivery.orderDeliverGoods.configExportNotOpen',
        412116 => 'order.delivery.orderDeliverGoods.deliveryId',
        412117 => 'order.delivery.notDelivery',

        412118 => 'order.delivery.dump.orderId',
        412119 => 'order.delivery.dump.selDelivery',
        412120 => 'order.delivery.dump.expressDump',
        412121 => 'order.delivery.dump.configExportOpen',
        412122 => 'order.delivery.dump.com',
        412123 => 'order.delivery.dump.to',
        412124 => 'order.delivery.dump.from',
        412125 => 'order.delivery.dump.tempId',
        412126 => 'order.delivery.dump.siId',
        412127 => 'order.delivery.dump.count',

        412130 => 'order.delivery.split.writeOrder',
        412131 => 'order.delivery.split.pinkStatus',
        412132 => 'order.delivery.split.afterSale',
        412133 => 'order.delivery.split.id',
        412134 => 'order.delivery.split.cartIds',
        412135 => 'order.delivery.split.cartNum',
        412136 => 'order.delivery.split.notFound',
        412137 => 'order.delivery.split.newOrder',
        412138 => 'order.delivery.split.splitStatusFailed',
        412139 => 'order.delivery.split.saveFailed',
        412140 => 'order.delivery.split.computeFailed',

        412150 => 'order.delivery.save.image',
        412151 => 'order.delivery.save.phone',
        412152 => 'order.delivery.save.phoneCheck',
        412153 => 'order.delivery.save.uid',
        412154 => 'order.delivery.save.phoneExist',
        412155 => 'order.delivery.save.nickname',
        412156 => 'order.delivery.fictitious',

        412180 => 'order.remark.notEmpty',
        412181 => 'order.remark.success',
        412182 => 'order.remark.failed',

        412200 => 'order.print.orderNotFound',
        412201 => 'order.print.product',
        412202 => 'order.print.configMiss',

        412250 => 'order.express.com',
        412251 => 'order.express.delivery',

        412300 => 'order.invoice.invoiceNumberNotEnough',
        412301 => 'order.invoice.invoiceNumberCheck',
        412302 => 'order.invoice.orderInfo',
        412303 => 'order.invoice.userInfo',

        412350 => 'order.write.code',
        412351 => 'order.write.verifySuccess',
        412352 => 'order.write.success',
        412353 => 'order.write.failed',
        412354 => 'order.write.notFound',

        412400 => 'order.take.repeat',
        412401 => 'order.take.firstDeliver',
        412402 => 'order.take.success',
        412403 => 'order.take.failed',
    ];

    // 直播
    const ERR_LIVE = [
        413000 => 'live.room.save.anchorNotExist',
        413001 => 'live.room.save.startTime',
        413002 => 'live.room.save.endTime',
        413003 => 'live.goods.notEmpty',
        413004 => 'live.room.export.roomIdNotEmpty',
        413005 => 'live.room.export.goodsId',
        413006 => 'live.room.export.roomId',
        413007 => 'live.room.apply',
        413008 => 'live.goods.creat.delCheck',
        413009 => 'live.goods.creat.productCheck',
        413010 => 'live.goods.creat.exist',
        413011 => 'live.goods.auditStatus',

        413012 => 'live.goods.audit.status',
        413013 => 'live.goods.audit.failed',
        413014 => 'live.goods.audit.reset',
        413015 => 'live.goods.del.auditStatus',

        413016 => 'live.anchor.save.alreadyExist',
        413017 => 'live.anchor.save.noSave',
        413018 => 'live.anchor.save.auth',
    ];

    // 售后订单
    const ERR_REFUND = [
        414000 => 'refund.form.unpaid',
        414001 => 'refund.form.refunded',

        414050 => 'refund.refundPrice.cancel',
        414051 => 'refund.refundPrice.refundType',
        414052 => 'refund.refundPrice.refundStatus',
        414053 => 'refund.refundPrice.refundPrice',
        414054 => 'refund.refundPrice.refunded',
        414055 => 'refund.refundPrice.refundPriceCheck',
        414056 => 'refund.refundPrice.success',
        414057 => 'refund.refundPrice.failed',

        414080 => 'refund.refuse.remark',

        414100 => 'refund.payOrder.integralAndCoupon',
        414101 => 'refund.payOrder.couponExpiredOrUsed',
        414102 => 'refund.payOrder.refundPink',
        414103 => 'refund.payOrder.refundBrokerage',
        414104 => 'refund.payOrder.RefundYue',

        414150 => 'refund.integral.notEnough',
        414151 => 'refund.integral.unpaid',
        414152 => 'refund.integral.failed',
        414153 => 'refund.integral.orderDeleted',
        414154 => 'refund.integral.backIntegral',
        414155 => 'refund.integral.useIntegral',
        414156 => 'refund.integral.backIntegralCheck',
        414157 => 'refund.integral.success',
        414158 => 'refund.integral.failed',
        414159 => 'refund.integral.regression',

        414200 => 'refund.apply.applying',
        414201 => 'refund.apply.refundNumCheck',
        414202 => 'refund.apply.notEnoughCartInfo',
        414203 => 'refund.apply.failed',

    ];

}
