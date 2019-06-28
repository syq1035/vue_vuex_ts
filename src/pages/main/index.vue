<template>
	<div class="main">
		<header-nav />
		<div class="body">
			<left-nav class="left" />
			<div class="right">
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import entry from './entry'
export default entry
</script>