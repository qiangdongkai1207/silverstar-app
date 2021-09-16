<template>
	<view>
		<mSearch :keywordList="keywordList" @searchInputChange="searchInputChange" @onSearchClick="onSearchClick">
		</mSearch>
	</view>
</template>

<script>
	//引用mSearch组件，如不需要删除即可
	import mSearch from '@/components/mehaotian-search-revision/search';
	export default {
		data() {
			return {
				keywordList: []
			}
		},
		onLoad() {},
		components: {
			//引用mSearch组件，如不需要删除即可
			mSearch
		},
		methods: {
			searchInputChange: function(data) {
				console.log(data);
			},
			onSearchClick: function(data) {
				console.log(data);
				this.openPages.openShopList();
			},
		}
	}
</script>
<style scoped>
	.serach .content .serachBtn {
		background: $font-color-blue !important;
	}
</style>
