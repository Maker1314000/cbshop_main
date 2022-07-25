<template>
	<view class="scan_login">
		<view class="head">
			<image :src="userInfo.avatar" mode=""></image>
			<view class="big">{{userInfo.nickname}}</view>
			<view class="small">{{$t(`service_desk`)}}</view>
			<view class="sub_btn btn" @click="scanLogin">{{$t(`auth_login`)}}</view>
			<view class="out btn" @click="closePage">{{$t(`cancel`)}}</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
	} from '@/api/user.js';
	import { codeStauts,kefuScanLogin } from '@/api/kefu.js'
	export default{
		name:'scan_login',
		data(){
			return {
				code:'',
				userInfo:{}
			}
		},
		onLoad(optios) {
			this.code = optios.key
			this.codeStauts()
			this.getUserInfo()
		},
		methods:{
			codeStauts(){
				codeStauts({
					code:this.code
				}).then(res=>{
					
				}).catch(error=>{
					this.openModel(error)
				})
			},
			// 确认
			scanLogin(){
				if(this.code){
					kefuScanLogin({
						code:this.code
					}).then(res=>{
						uni.showToast({
							title:res.msg,
							icon:'success'
						})
						setTimeout(res=>{
							WeixinJSBridge.call('closeWindow');
						},2000)
					}).catch(error=>{
						this.openModel(error)
					})
				}else{
					this.openModel(this.$t(`no_login_code`))
				}
				
			},
			openModel(data){
				uni.showModal({
					title: this.$t(`hint`),
					content:data,
					success: function (res) {
							if (res.confirm) {
									WeixinJSBridge.call('closeWindow');
							} else if (res.cancel) {
									console.log(this.$t(`user_clicks_cancel`));
							}
					}
				})
			},
			closePage(){
				WeixinJSBridge.call('closeWindow');
			},
			// 获取用户信息
			getUserInfo(){
				getUserInfo().then(res=>{
					this.userInfo = res.data
				})
			}
		}
	}
</script>

<style lang="stylus">
	page{
		height: 100%;
		background: #fff;
	}
	.scan_login
		.head
			display flex
			flex-direction column
			align-items center
			padding-top 96rpx
			image
				width 178rpx
				height 178rpx
				border-radius 50%
			.big
				margin 20rpx 0 10rpx
				font-size 32rpx
				color #282828
			.small
				color #9f9f9f
				font-size 28rpx
			.btn
				display flex
				align-items center
				justify-content center
				width 594rpx
				height 86rpx
				margin 28rpx auto 0
				font-size 30rpx
				color #fff
				border-radius 43rpx
				background: linear-gradient(90deg, #3875EA 0%, #1890FC 100%);
				&.out
					border 1px solid #3875EA
					background none
					color #3875EA
				&.sub_btn
						margin-top 96rpx
</style>
