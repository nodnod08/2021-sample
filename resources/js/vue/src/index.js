require("./../../bootstrap")
import Vue from "vue"
import vuetify from "../plugins"
import VueRouter from "vue-router"
import store from "./store"

// Reusable
Vue.component("breadcrumbs-vue", require("./../components/reusable/BreadCrumbs.vue").default)
Vue.component("sidebar-vue", require("./../components/reusable/SideBar.vue").default)
Vue.component("appbar-vue", require("./../components/reusable/AppBar.vue").default)
Vue.component("menucard-vue", require("./../components/reusable/MenuCard.vue").default)
Vue.component("stepper-vue", require("./../components/reusable/Stepper.vue").default)
Vue.component("snackbar-vue", require("./../components/reusable/Snackbar.vue").default)
Vue.component("address-details", require("./../components/reusable/AddressDetails.vue").default)

import ProductIndex from "./../components/product/Index.vue"
import AddProduct from "./../components/product/add-product/Index.vue"
import ProductLists from "./../components/product/product-list/Index.vue"
import ImportProduct from "./../components/product/import-product/Index.vue"

import PurchasingIndex from "./../components/purchasing/Index.vue"
import CreatePurchasing from "./../components/purchasing/create-purchasing/CreatePurchasing.vue"
import PurchasingList from "./../components/purchasing/purchasing-list/PurchasingList.vue"
import PurchasingDetails from "./../components/purchasing/purchasing-list/PurchasingDetails.vue"

import SupplierReceiverList from "./../components/supplier/SupplierReceiverList.vue"

const routes = [
    { path: "/admin/products", component: ProductIndex },
    {
        path: "/admin/products/add-product-type",
        component: AddProduct
    },
    {
        path: "/admin/products/product-list",
        component: ProductLists
    },
    {
        path: "/admin/products/product-import",
        component: ImportProduct
    },
    { path: "/admin/purchasing", component: PurchasingIndex },
    {
        path: "/admin/purchasing/purchasing-order",
        component: CreatePurchasing
    },
    {
        path: "/admin/purchasing/purchasing-list",
        component: PurchasingList
    },
    {
        path: "/admin/purchasing/purchase-order/:transaction_id",
        component: PurchasingDetails
    },
    {
        path: "/admin/supplier-and-receiver-list",
        component: SupplierReceiverList
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    store
})
