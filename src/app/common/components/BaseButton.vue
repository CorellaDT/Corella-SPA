<template>
	<button 
		:style="{ minWidth: minWidth + 'px' }" 
		class="base-button"
	>
		<slot name="icon"></slot>
		<span>{{ text }}</span>
	</button>
</template>

<script>
	export default {
		name: "base-button",
		props: {
			minWidth: {type: Number},
			text: {type: String}
		}
	}
</script>
<style lang="scss">
	.base-button {
		display: inline-flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		min-height: 56px;
		background-color: #0AB258;
		font-family: "Rubik";
		font-weight: 400;
		border: none;
		border-radius: 4px;
		color: #fff;
		cursor: pointer;
	}
</style>