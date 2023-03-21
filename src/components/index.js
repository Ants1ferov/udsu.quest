import AppButton from "@/components/UI/AppButton.vue";

const components = [
    {name: 'AppButton', component: AppButton}
]

export default {
    install(app) {
        components.forEach(({ name, component}) => {
            app.component(name, component)
        })
    }
}