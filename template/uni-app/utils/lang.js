import en_us from '../lang/en_us.json'
import zh_cn from '../lang/zh_cn.json'
import Vue from 'vue'; 
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: uni.getStorageSync('locale') ? uni.getStorageSync('locale') :'zh_cn',
	messages: {
		'en_us': en_us,
		'zh_cn': zh_cn,
	}
})
export default i18n 