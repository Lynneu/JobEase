<template>
  <view class="ayi-search">
    <view class="ayi-search__prepend" v-if="slots.prepend">
      <slot name="prepend"></slot>
    </view>
    <view class="ayi-search__input">
      <ayi-input :border="false" class="input" v-model="value" :prefix-icon="searchIcon" :type="type" :placeholder="placeholder" :disabled="disabled" :clearable="clearable" :focus="isFocus" :placeholder-style="placeholderStyle" :placeholder-class="placeholderClass" :maxlength="maxlength" :cursor-spacing="cursorSpacing" :confirm-type="confirmType" :confirm-hold="confirmHold" :adjust-position="adjustPosition" :holdKeyboard="holdKeyboard" round @input="onInput" @focus="onFocus" @blur="onBlur" @confirm="onConfirm" @clear="onClear" @keyboardheightchange="onKeyboardheightchange"></ayi-input>
      <view class="ayi-search__btn">
        <ayi-button type="primary" round v-if="showSearchButton" :height="60" :disabled="!value" @click="search">
          {{ searchButtonText }}
        </ayi-button>
      </view>
    </view>
    <view class="ayi-search__append" v-if="slots.append">
      <slot name="append"></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
/**
 * @description 搜索框，可自定义前后内容
 * @example <ayi-search v-model="val" />
 */
import { ref, watch, useSlots } from "vue"
import ayiInput from "../yll1024335892-ayi-input/index.vue"
import ayiButton from "../yll1024335892-ayi-button/index.vue"
const props = defineProps({
	modelValue: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		default: "text"
	},
	password: Boolean,
	placeholder: String,
	placeholderStyle: String,
	placeholderClass: String,
	disabled: Boolean,
	focus: Boolean,
	clearable: {
		type: Boolean,
		default: true
	},
	maxlength: {
		type: Number,
		default: 140
	},
	cursorSpacing: {
		type: Number,
		default: 0
	},
	confirmType: {
		type: String,
		default: "done"
	},
	confirmHold: Boolean,
	adjustPosition: {
		type: Boolean,
		default: true
	},
	holdKeyboard: {
		type: Boolean,
		default: false
	},
	searchIcon: {
		type: String,
		default: "ayi-icon-search"
	},
	showSearchButton: {
		type: Boolean,
		default: true
	},
	searchButtonText: {
		type: String,
		default: "搜索"
	}
})
const emit = defineEmits(["update:modelValue", "focus", "blur", "confirm", "keyboardheightchange", "search"])
const slots = useSlots()
// 绑定值
const value = ref<string>("")
watch(
	() => props.modelValue,
	(val: string) => {
		value.value = val
	},
	{
		immediate: true
	}
)
// 是否聚焦
const isFocus = ref<boolean>(false)
watch(
	() => props.focus,
	(val: boolean) => {
		isFocus.value = val
	},
	{
		immediate: true
	}
)
function onInput(e: any) {
	emit("update:modelValue", e)
}
function onFocus(e: any) {
	emit("focus", e)
}
function onBlur(e: any) {
	emit("blur", e)
}
function onConfirm(e: any) {
	emit("confirm", e)
	search()
}
function onClear() {
	search()
}
function onKeyboardheightchange(e: any) {
	emit("keyboardheightchange", e)
}
function search() {
	emit("search", value.value)
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
