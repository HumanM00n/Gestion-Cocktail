import router from "@/router"
import { routeLocationKey } from "vue-router"

export function AuthGuard(to) {
    let token = localStorage.getItem('token')
    console.log(token)

    if(token) {
        return true
    }

    router.push('/')
}