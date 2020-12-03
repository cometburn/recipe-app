import { ActionTree, GetterTree, MutationTree } from 'vuex'

interface StateAccount {
    email: string;
    password: string;
    isLogged: boolean;
}

/**
* STATE
* - ari ka mag declare sa tanan nimo nga state property.
* Usage to components: vm.state.<module>.<statename>
* Example:
*  this.$store.state.authentication.email
*/

export const state = (): StateAccount => ({
    email: '',
    password: '',
    isLogged: false
})

/**
* GETTERS
* - ari ka mag fetch/get sa tanan nimo nga state or kung naa kay e transform
* nga di ma affeted ang imong state.
* Usage to components: vm[module/getterName]
* Example:
*  this.$store.getters['authentication/getEmail']
*/
export const getters: GetterTree<StateAccount, any> = {
    getEmail(state: StateAccount): string {
        return state.email
    },
    getToken(state: StateAccount): boolean {
        return state.isLogged || false
    }
}

/**
* MUTATIONS
* - ari ka mag update sa imong tanan state para mo reflect sa tanan store module nimo.
* Note: Dli ka pwd mo update ug state gawas sa mutation.
* Usage to components: vm.commit(module/mutationMethod, params)
* Example:
*  this.$store.commit('authentication/SET_EMAIL', 'test@test.com')
*/
export const mutations: MutationTree<StateAccount> = {
    SET_EMAIL(state: StateAccount, email: string): void {
        state.email = email
    },
    SET_PASSWORD(state: StateAccount, password: string): void {
        state.password = password
    },
    SET_TOKEN(state: StateAccount, islogged: boolean): void {
        state.isLogged = islogged
    }
}

/**
* Actions
* - ari ka mag apply sa imong mutations or mag integrate sa imong mga api via axios.
* Usage to components: vm.dispatch(module/actionMethod, params)
* Example:
*  this.$store.dispatch('authentication/LOGIN', { email: 'test@test.com', password: '123' })
*/
export const actions: ActionTree<StateAccount, any> = {
    async LOGIN({ state, commit }, payload: StateAccount): Promise<void> {
        await Promise.resolve(1)
        // sample ra nako ang ing-ani nga paagi ang code sa ubos. pwd ra ka imoha nga paagi
        // as long as na follow and rules sa vuex.

        // commit('SET_EMAIL', payload.email)
        // commit('SET_PASSWORD', payload.password)

        // const { data } = await this.$axios.post('/login', {
        //   email: state.email,
        //   password: state.password
        // })

        // commit('SET_TOKEN', data.token)
    }
}