<template>
    <div class="Admin">
        <AdminHeader />

        <div class="ad_contain">
            <div class="ad_side">
                <AdminNav />
            </div>

            <div class="ad_display">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'

export default {
    name: 'AdminLayout',
    components: {
        AdminHeader,
        AdminNav
    }
}
</script>

<style>
.ad_contain {
    display: flex;
    justify-content: flex-start;
}

.ad_side {
    width: 20%;
    height: 100%;
    border-right: 1px solid black;
}

.ad_display {
    width: 100%;
    padding: 10px;
    text-align: left;
}
</style>