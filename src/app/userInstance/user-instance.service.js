/**
 * ОБРАБАТЫВАЕМ ДАННЫЕ В НУЖНЫЙ ВИД ДЛЯ ПРИЛОЖЕНИЯ И СОХРАНЯЕМ
 *
 * Слой сервиса предназначен для обработки данных полученных репозиторием или выполнения бизнес-логики.
 *
 * В этом слое преобразуем данные, которые пришли из репозитория в нужный вид.
 * Взаиможействие со стором (сохранение, удаление, преобразование данных) так же происходит тут.
 * Обработка специфических ошибок, которые не может обработать стандартный обработчик HTTP-ошибок
 * так же производятся тут.
 *
 * Экземпляр сервиса является приватным полем контроллера, вызывать методы сервиса может только контроллер.
 */
import UserInstanceRepository from "@/app/userInstance/user-instance.repository";
import {setIsLoggedIn, userInstanceState} from "@/app/userInstance/user-instance.state";
import {notificationsHelper} from "@/helpers/notifications.helper";

export default class UserInstanceService {

    #repository = new UserInstanceRepository()

    async updateProfile(profile) {
        try {
            const userInfo = await this.#repository.updateProfile(profile)
            userInstanceState.info = userInfo
            notificationsHelper.success({ message: 'Profile has been successfully updated' })
            return userInfo
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }

    async getMe() {
        const userInfo = await this.#repository.getMe()
        userInstanceState.info = userInfo
        return userInfo
    }
    
    async login(credentials) {
        try {
            const data = await this.#repository.login(credentials)
            setIsLoggedIn(true)
            userInstanceState.info = data
            notificationsHelper.success({ message: 'Authorization is successful' })
            return data
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }
    
    async register(user) {
        return await this.#repository.register(user)
    }
    
}
