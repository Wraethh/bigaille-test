import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import ProAreaView from './pages/ProArea.vue'
import ContactView from './pages/Contact.vue'
import TermsOfUseView from './pages/TermsOfUse.vue'
import PrivacyPolicyView from './pages/PrivacyPolicy.vue'
import LegalNoticesView from './pages/LegalNotices.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/espace-pro', component: ProAreaView },
    { path: '/contact', component: ContactView },
    { path: '/cgu', component: TermsOfUseView },
    { path: '/confidentialite', component: PrivacyPolicyView },
    { path: '/mentions-legales', component: LegalNoticesView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router