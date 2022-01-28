import {createRouter, createWebHistory} from 'vue-router'

import {loginPageRoutes} from '@/app/auth/loginPage/login-page.router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {userInstanceState} from "@/app/userInstance/user-instance.state"; // progress bar style

const routes = [{
    path: '/login',
    name: 'login-page',
    component: () => import('@/app/auth/loginPage/LoginPage'),
    children: loginPageRoutes
}, {
    path: '/',
    name: 'base-wrapper',
    component: () => import('@/app/common/baseWrapper/BaseWrapper'),
    children: [{
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/app/dashboard/Dashboard')
    },{
        path: '/',
        name: 'project-list',
        component: () => import('@/app/projects/projectList/ProjectList'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/:projectId/board',
        name: 'board',
        component: () => import('@/app/projects/projectBoard/ProjectBoard'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/create',
        name: 'create-project',
        component: () => import('@/app/projects/projectEditor/ProjectEditor'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/:projectId/settings',
        name: 'project-settings',
        component: () => import('@/app/projects/projectEditor/ProjectEditor'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/:projectId/task/:taskId',
        name: 'task',
        component: () => import('@/app/projects/tasks/task/Task'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/:projectId/create-task',
        name: 'create-task',
        component: () => import('@/app/projects/tasks/editTask/EditTask'),
        meta: { requiresAuth: true }
    }, {
        path: '/project/:projectId/task/:taskId/edit',
        name: 'edit-task',
        component: () => import('@/app/projects/tasks/editTask/EditTask'),
        meta: { requiresAuth: true }
    }, {
        path: '/admin/user-management',
        name: 'user-management',
        component: () => import('@/app/userManagement/UserManagement'),
        meta: { requiresAuth: true }
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import('@/app/userInstance/profile/ProfilePage'),
        meta: { requiresAuth: true }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'page-404',
        component: () => import('@/app/common/Page404'),
        meta: { requiresAuth: true }
    }],
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.matched.some(record => record.meta.requiresAuth) || to.matched.some(record => record.meta.requiresAdminAuth)) {
        if (!userInstanceState.isLoggedIn) {
            next('/login')
        } else {
            next()
        }
    }
    else {
        next()
    }
})

router.afterEach(() => {
    //finish nprogress
    NProgress.done()
})

export default router
