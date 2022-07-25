<template>
	<view :style="colorStyle">
		<view class="my-order">
			<view class="header bg-color">
				<view class="picTxt acea-row row-between-wrapper">
					<view class="text">
						<view class="name">{{$t(`order_info`)}}</view>
						<view>{{$t(`consumption_order`)}}：{{ orderData.order_count || 0 }} {{$t(`total_consumption`)}}：{{$t(`money`)}}{{ orderData.sum_price || 0 }}</view>
					</view>
					<view class="pictrue">
						<image src="../static/orderTime.png"></image>
					</view>
				</view>
			</view>
			<view class="nav acea-row row-around">
				<view class="item" :class="orderStatus == 0 ? 'on' : ''" @click="statusClick(0)">
					<view>{{$t(`to_pay`)}}</view>
					<view class="num">{{ orderData.unpaid_count || 0 }}</view>
				</view>
				<view class="item" :class="orderStatus == 1 ? 'on' : ''" @click="statusClick(1)">
					<view>{{$t(`to_ship`)}}</view>
					<view class="num">{{ orderData.unshipped_count || 0 }}</view>
				</view>
				<view class="item" :class="orderStatus == 2 ? 'on' : ''" @click="statusClick(2)">
					<view>{{$t(`to_receive`)}}</view>
					<view class="num ">{{ orderData.received_count || 0 }}</view>
				</view>
				<view class="item" :class="orderStatus == 3 ? 'on' : ''" @click="statusClick(3)">
					<view>{{$t(`to_rate`)}}</view>
					<view class="num">{{ orderData.evaluated_count || 0 }}</view>
				</view>
				<view class="item" :class="orderStatus == 4 ? 'on' : ''" @click="statusClick(4)">
					<view>{{$t(`completed`)}}</view>
					<view class="num">{{ orderData.complete_count || 0 }}</view>
				</view>
			</view>
			<view class="list">
				<view class="item" v-for="(item, index) in orderList" :key="index">
					<view @click="goOrderDetails(item.order_id)">
						<view class="title acea-row row-between-wrapper">
							<view class="acea-row row-middle">
								<text class="sign cart-color acea-row row-center-wrapper"
									v-if="item.type == 2">{{$t(`haggle`)}}</text>
								<text class="sign cart-color acea-row row-center-wrapper"
									v-else-if="item.type == 3">{{$t(`group`)}}</text>
								<text class="sign cart-color acea-row row-center-wrapper"
									v-else-if="item.type == 1">{{$t(`seckill`)}}</text>
								<text class="sign cart-color acea-row row-center-wrapper"
									v-else-if="item.type == 4">{{$t(`pre_sales`)}}</text>
								<view>{{ item._add_time }}</view>
							</view>
							<view v-if="item._status._type == 9" class="font-color">{{$t(`offline_payment_unpaid`)}}</view>
							<view v-else-if="item._status._type == 0" class="font-color">{{$t(`to_pay`)}}</view>
							<view v-else-if="item._status._type == 1 && item.shipping_type == 1" class="font-color">{{$t(`to_ship`)}}
								<text v-if="item.refund.length">，{{item.is_all_refund?$t(`in_refund`):$t(`partial_refund`)}}</text>
							</view>
							<view v-else-if="item._status._type == 2" class="font-color">{{$t(`to_receive`)}}
								<text v-if="item.refund.length">，{{item.is_all_refund?$t(`in_refund`):$t(`partial_refund`)}}</text>
							</view>
							<view v-else-if="item._status._type == 3" class="font-color">{{$t(`to_rate`)}}
								<text v-if="item.refund.length">，{{item.is_all_refund?$t(`in_refund`):$t(`partial_refund`)}}</text>
							</view>
							<view v-else-if="item._status._type == 4" class="font-color">{{$t(`completed`)}}
								<text v-if="item.refund.length">，{{item.is_all_refund?$t(`in_refund`):$t(`partial_refund`)}}</text>
							</view>
							<view v-else-if="item._status._type == 5 && item.status == 0" class="font-color">{{$t(`not_written_off`)}}
								<text v-if="item.refund.length">，{{item.is_all_refund?$t(`in_refund`):$t(`partial_refund`)}}</text>
							</view>
							<view v-else-if="item._status._type == -2" class="font-color">{{$t(`refunded`)}}
							</view>

						</view>
						<view class="item-info acea-row row-between row-top" v-for="(items, index) in item.cartInfo"
							:key="index">
							<view class="pictrue">
								<image :src="items.productInfo.image"></image>
							</view>
							<view class="text  row-between">
								<text class="name line2">{{ items.productInfo.store_name }}</text>
								<view class="money">
									<view v-if="items.productInfo.attrInfo">{{$t(`money`)}}{{ items.productInfo.attrInfo.price }}
									</view>
									<view v-else>{{$t(`money`)}}{{ items.productInfo.price }}</view>
									<view>x{{ items.cart_num }}</view>
									<view v-if="items.refund_num && item._status._type != -2" class="return">
										{{ items.refund_num }}{{$t(`refunding`)}}
									</view>
								</view>
							</view>
						</view>
						<view class="totalPrice">
							{{$t(`total_of`)}}{{ item.total_num || 0 }}{{$t(`items_total`)}}
							<text class="money">{{$t(`money`)}}{{ item.pay_price }}</text>
						</view>
					</view>
					<view class="bottom acea-row row-right row-middle">
						<view class="bnt cancelBnt" v-if="item._status._type == 0 || item._status._type == 9"
							@click="cancelOrder(index, item.order_id)">{{$t(`cancel_order`)}}</view>
						<view class="bnt bg-color" v-if="item._status._type == 0"
							@click="goPay(item.pay_price, item.order_id)">{{$t(`Immediate_payment`)}}</view>
						<!-- <view class="bnt bg-color" v-else-if="item._status._type == 3"
							@click="goOrderDetails(item.order_id)">去评价</view> -->
						<!-- <view class="bnt bg-color"
							v-else-if="item.seckill_id < 1 && item.bargain_id < 1 && item.combination_id < 1 && item._status._type == 4"
							@click="goOrderDetails(item.order_id)">
							再次购买
						</view> -->
						<view class="bnt cancelBnt" v-if="item._status._type == 4"
							@click="delOrder(item.order_id, index)">{{$t(`delete_order`)}}</view>
						<view class="bnt bg-color" @click="goOrderDetails(item.order_id)">{{$t(`check_details`)}}</view>
					</view>
				</view>
			</view>
			<view class="loadingicon acea-row row-center-wrapper" v-if="orderList.length > 0">
				<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				{{ loadTitle }}
			</view>
			<view v-if="orderList.length == 0">
				<emptyPage v-if="!loading" :title="$t(`no_order`)"></emptyPage>
				<view class="loadingicon acea-row row-center-wrapper">
					<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				</view>
			</view>
		</view>
		<!-- #ifndef MP -->
		<home></home>
		<!-- #endif -->
		<payment :payMode="payMode" :pay_close="pay_close" @onChangeFun="onChangeFun" :order_id="pay_order_id"
			:totalPrice="totalPrice"></payment>
	</view>
</template>

<script>
	import {
		getOrderList,
		orderData,
		orderCancel,
		orderDel,
		orderPay
	} from '@/api/order.js';
	import {
		getUserInfo
	} from '@/api/user.js';
	import {
		openOrderSubscribe
	} from '@/utils/SubscribeMessage.js';
	import home from '@/components/home';
	import payment from '@/components/payment';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from 'vuex';
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	import emptyPage from '@/components/emptyPage.vue';
	import colors from '@/mixins/color.js';
	export default {
		components: {
			payment,
			home,
			emptyPage,
			// #ifdef MP
			authorize
			// #endif
		},
		mixins: [colors],
		data() {
			return {
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: this.$t(`loading_more`), //提示语
				orderList: [], //订单数组
				orderData: {}, //订单详细统计
				orderStatus: 0, //订单状态
				page: 1,
				limit: 20,
				payMode: [{
						name: this.$t(`wechat_pay`),
						icon: 'icon-weixinzhifu',
						value: 'weixin',
						title: this.$t(`wechat_quick_pay`),
						payStatus: true
					},
					{
						name: this.$t(`pay_alipay`),
						icon: 'icon-zhifubao',
						value: 'alipay',
						title: this.$t(`online_alipay`),
						payStatus: true
					},
					{
						name: this.$t(`balance_payment`),
						icon: 'icon-yuezhifu',
						value: 'yue',
						title: this.$t(`available_balance`),
						number: 0,
						payStatus: true
					}, {
						"name": this.$t(`friend_pays`),
						"icon": "icon-haoyoudaizhifu",
						value: 'friend',
						title: this.$t(`friends_to_pay`),
						payStatus: 1,
					}
				],
				pay_close: false,
				pay_order_id: '',
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false //是否隐藏授权
			};
		},
		computed: mapGetters(['isLogin']),
		onShow() {
			if (this.isLogin) {
				this.page = 1;
				this.orderList = []
				this.loadend = false;
				this.onLoadFun();
				this.getOrderList();
			} else {
				toLogin();
			}
		},
		methods: {
			onLoadFun() {
				this.getOrderData();
				this.getUserInfo();
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e;
			},
			/**
			 * 事件回调
			 *
			 */
			onChangeFun: function(e) {
				let opt = e;
				let action = opt.action || null;
				let value = opt.value != undefined ? opt.value : null;
				action && this[action] && this[action](value);
			},
			/**
			 * 获取用户信息
			 *
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.payMode[2].number = res.data.now_money;
					that.$set(that, 'payMode', that.payMode);
				});
			},
			/**
			 * 关闭支付组件
			 *
			 */
			payClose: function() {
				this.pay_close = false;
			},
			/**
			 * 生命周期函数--监听页面加载
			 */
			onLoad: function(options) {
				if (options.status) this.orderStatus = options.status;
			},
			/**
			 * 获取订单统计数据
			 *
			 */
			getOrderData: function() {
				let that = this;
				orderData().then(res => {
					that.$set(that, 'orderData', res.data);
					that.payMode.map(item => {
						if (item.value == 'weixin') {
							item.payStatus = res.data.pay_weixin_open ? true : false;
						}
						if (item.value == 'alipay') {
							item.payStatus = res.data.ali_pay_status ? true : false;
						}
						if (item.value == 'yue') {
							item.payStatus = res.data.yue_pay_status == 1 ? true : false;
						}
						if (item.value == 'friend') {
							item.payStatus = res.data.friend_pay_status == 1 ? true : false;
						}
					});
					//#ifdef MP
					this.payMode[1].payStatus = false;
					//#endif
				});
			},
			/**
			 * 取消订单
			 *
			 */
			cancelOrder: function(index, order_id) {
				let that = this;
				if (!order_id)
					return that.$util.Tips({
						title: that.$t(`cannot_cancel_order`)
					});
				orderCancel(order_id)
					.then(res => {
						return that.$util.Tips({
								title: res.msg,
								icon: 'success'
							},
							function() {
								that.orderList.splice(index, 1);
								that.$set(that, 'orderList', that.orderList);
								that.$set(that.orderData, 'unpaid_count', that.orderData.unpaid_count - 1);
								that.getOrderData();
							}
						);
					})
					.catch(err => {
						return that.$util.Tips({
							title: err
						});
					});
			},
			/**
			 * 打开支付组件
			 *
			 */
			goPay: function(pay_price, order_id) {
				this.$set(this, 'pay_close', true);
				this.$set(this, 'pay_order_id', order_id);
				this.$set(this, 'totalPrice', pay_price);
			},
			/**
			 * 支付成功回调
			 *
			 */
			pay_complete: function() {
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.pay_close = false;
				uni.navigateTo({
					url: '/pages/goods/order_pay_status/index?order_id=' + this.pay_order_id +
						'&msg='+this.$t(`pay_success`)+'&type=3&totalPrice=' + this.totalPrice
				})
				this.pay_order_id = '';
				this.getOrderData();
				this.getOrderList();
			},
			/**
			 * 支付失败回调
			 *
			 */
			pay_fail: function() {
				this.pay_close = false;
				this.pay_order_id = '';
			},
			/**
			 * 去订单详情
			 */
			goOrderDetails: function(order_id) {
				if (!order_id)
					return that.$util.Tips({
						title: this.$t(`without_order_num`)
					});
				// #ifdef MP
				uni.showLoading({
					title: this.$t(`Loading`)
				});
				openOrderSubscribe()
					.then(() => {
						uni.hideLoading();
						uni.navigateTo({
							url: '/pages/goods/order_details/index?order_id=' + order_id
						})
					})
					.catch(err => {
						uni.hideLoading();
					});
				// #endif
				// #ifndef MP
				uni.navigateTo({
					url: '/pages/goods/order_details/index?order_id=' + order_id
				});
				// #endif
			},
			/**
			 * 切换类型
			 */
			statusClick: function(status) {
				if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.getOrderList();
			},
			/**
			 * 获取订单列表
			 */
			getOrderList: function() {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = this.$t(`loading_more`);
				getOrderList({
						type: that.orderStatus,
						page: that.page,
						limit: that.limit
					})
					.then(res => {
						let list = res.data || [];
						let loadend = list.length < that.limit;
						that.orderList = that.$util.SplitArray(list, that.orderList);
						that.$set(that, 'orderList', that.orderList);
						that.loadend = loadend;
						that.loading = false;
						that.loadTitle = loadend ? that.$t(`bottom_line`) : that.$t(`loading_more`);
						that.page = that.page + 1;
					})
					.catch(err => {
						that.loading = false;
						that.loadTitle = that.$t(`loading_more`);
					});
			},

			/**
			 * 删除订单
			 */
			delOrder: function(order_id, index) {
				let that = this;
				uni.showModal({
					title: that.$t(`delete_order`),
					content: that.$t(`confirm_delete_order`),
					success: function(res) {
						if (res.confirm) {
							orderDel(order_id)
								.then(res => {
									that.orderList.splice(index, 1);
									that.$set(that, 'orderList', that.orderList);
									that.$set(that.orderData, 'unpaid_count', that.orderData
										.unpaid_count - 1);
									that.getOrderData();
									return that.$util.Tips({
										title: that.$t(`success_deleted`),
										icon: 'success'
									});
								})
								.catch(err => {
									return that.$util.Tips({
										title: err
									});
								});
						} else if (res.cancel) {
							return that.$util.Tips({
								title: that.$t(`cancelled`)
							});
						}
					}
				});

			}
		},
		onReachBottom: function() {
			this.getOrderList();
		}
	};
</script>

<style scoped lang="scss">
	.my-order .header {
		height: 260rpx;
		padding: 0 30rpx;
	}

	.my-order .header .picTxt {
		height: 190rpx;
	}

	.my-order .header .picTxt .text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 26rpx;
		font-family: 'Guildford Pro';
	}

	.my-order .header .picTxt .text .name {
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 20rpx;
	}

	.my-order .header .picTxt .pictrue {
		width: 122rpx;
		height: 109rpx;
	}

	.my-order .header .picTxt .pictrue image {
		width: 100%;
		height: 100%;
	}

	.my-order .nav {
		background-color: #fff;
		width: 690rpx;
		height: 140rpx;
		border-radius: 6rpx;
		margin: -73rpx auto 0 auto;
	}

	.my-order .nav .item {
		text-align: center;
		font-size: 26rpx;
		color: #282828;
		padding: 27rpx 0;
		border-bottom: 5rpx solid transparent;
	}

	.my-order .nav .item.on {
		/* #ifdef H5 || MP */
		font-weight: bold;
		/* #endif */
		/* #ifdef APP-PLUS */
		color: #000;
		/* #endif */
		border-color: var(--view-theme);
	}

	.my-order .nav .item .num {
		margin-top: 18rpx;
	}

	.my-order .list {
		width: 690rpx;
		margin: 14rpx auto 0 auto;
	}

	.my-order .list .item {
		background-color: #fff;
		border-radius: 6rpx;
		margin-bottom: 14rpx;
	}

	.my-order .list .item .title {
		height: 84rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 28rpx;
		color: #282828;
	}

	.my-order .list .item .title .sign {
		font-size: 24rpx;
		padding: 0 7rpx;
		height: 36rpx;
		margin-right: 15rpx;
	}

	.my-order .list .item .item-info {
		padding: 0 30rpx;
		margin-top: 22rpx;
	}

	.my-order .list .item .item-info .pictrue {
		width: 120rpx;
		height: 120rpx;
	}

	.my-order .list .item .item-info .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 6rpx;
	}

	.my-order .list .item .item-info .text {
		width: 486rpx;
		font-size: 28rpx;
		color: #999;
		margin-top: 6rpx;
		display: flex;
	}

	.my-order .list .item .item-info .text .name {
		width: 306rpx;
		color: #282828;
		height: 78rpx;
	}

	.my-order .list .item .item-info .text .money {
		text-align: right;
		flex: 1;
	}

	.my-order .list .item .totalPrice {
		font-size: 26rpx;
		color: #282828;
		text-align: right;
		margin: 27rpx 0 0 30rpx;
		padding: 0 30rpx 30rpx 0;
		border-bottom: 1rpx solid #eee;
	}

	.my-order .list .item .totalPrice .money {
		font-size: 28rpx;
		font-weight: bold;
		color: var(--view-priceColor);
	}

	.my-order .list .item .bottom {
		height: 107rpx;
		padding: 0 30rpx;
	}

	.my-order .list .item .bottom .bnt {
		width: 176rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		border-radius: 50rpx;
		font-size: 27rpx;
	}

	.my-order .list .item .bottom .bnt.cancelBnt {
		border: 1rpx solid #ddd;
		color: #aaa;
	}

	.my-order .list .item .bottom .bnt~.bnt {
		margin-left: 17rpx;
	}

	.noCart {
		margin-top: 171rpx;
		padding-top: 0.1rpx;
	}

	.noCart .pictrue {
		width: 414rpx;
		height: 336rpx;
		margin: 78rpx auto 56rpx auto;
	}

	.noCart .pictrue image {
		width: 100%;
		height: 100%;
	}

	.my-order .list .item .item-info .text .money .return {
		// color: var(--view-priceColor);
		margin-top: 10rpx;
		font-size: 24rpx;
	}
</style>
