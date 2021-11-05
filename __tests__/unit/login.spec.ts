import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Account/Login.vue'

describe('Login Page Test', () => {
    it('renders input for email', () => {
        const wrapper = shallowMount(Login)
        expect(wrapper.find("input").isVisible()).toBe(true)
    })
})