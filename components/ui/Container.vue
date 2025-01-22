<template>
    <div>
        <div v-if="$slots.default" class="container">
            <slot></slot>
        </div>
        <div v-if="$slots.fullwidth" class="w-full overflow-hidden">
            <slot name="fullwidth"></slot>
        </div>
    </div>
</template>