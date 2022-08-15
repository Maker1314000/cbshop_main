import en_us from '../lang/en_us.json'
import zh_cn from '../lang/zh_cn.json'
import fr_fr from '../lang/fr_fr.json'
import th_th from '../lang/th_th.json'
import ja_jp from '../lang/ja_jp.json'
import it_it from '../lang/it_it.json'
import ko_kr from '../lang/ko_kr.json'
import mn_mn from '../lang/mn_mn.json'
import vi_vn from '../lang/vi_vn.json'
import zh_tw from '../lang/zh_tw.json'
import Vue from 'vue'; 
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: uni.getStorageSync('locale') ? uni.getStorageSync('locale') :'zh_cn',
	messages: {
		'en_us': en_us,
		'zh_cn': zh_cn,
		'fr_fr': fr_fr,
		'th_th': th_th,
		'ja_jp': ja_jp,
		'it_it': it_it,
		'ko_kr': ko_kr,
		'mn_mn': mn_mn,
		'vi_vn': vi_vn,
		'zh_tw': zh_tw,
	}
})
export default i18n 