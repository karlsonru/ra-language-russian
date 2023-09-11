import { TranslationMessages } from 'ra-core';

const RussianTranslation: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Добавить фильтр',
            add: 'Добавить',
            back: 'Назад',
            bulk_actions: '1 выбран |||| %{smart_count} выбрано |||| %{smart_count} выбрано',
            cancel: 'Отмена',
            clear_array_input: 'Очистить список',
            clear_input_value: 'Очистить',
            clone: 'Дублировать',
            confirm: 'Подтвердить',
            create: 'Создать',
            create_item: 'Создать %{item}',
            delete: 'Удалить',
            edit: 'Редактировать',
            export: 'Экспорт',
            list: 'Список',
            refresh: 'Обновить',
            remove_filter: 'Убрать фильтр',
            remove_all_filters: 'Убрать все фильтры',
            remove: 'Удалить',
            save: 'Сохранить',
            search: 'Поиск',
            select_all: 'Выбрать все',
            select_row: 'Выбрать эту запись',
            show: 'Просмотр',
            sort: 'Сортировка',
            undo: 'Отменить',
            unselect: 'Не выбрано',
            expand: 'Раскрыть',
            close: 'Закрыть',
            open_menu: 'Открыть меню',
            close_menu: 'Закрыть меню',
            update: 'Обновить',
            move_up: 'Переместить вверх',
            move_down: 'Переместить вниз',
            open: 'Открыть',
            toggle_theme: 'Переключить тему',
            select_columns: 'Столбцы',
            update_application: 'Обновить приложение',
        },
        boolean: {
            true: 'Да',
            false: 'Нет',
            null: ' ',
        },
        page: {
            create: 'Создать %{name}',
            dashboard: 'Главная',
            edit: '%{name} #%{id}',
            error: 'Что-то пошло не так',
            list: '%{name}',
            loading: 'Загрузка',
            not_found: 'Не найдено',
            show: '%{name} #%{id}',
            empty: 'Нет %{name}.',
            invite: 'Вы хотите добавить еще одну?',
        },
        input: {
            file: {
                upload_several: 'Перетащите файлы сюда или нажмите для выбора.',
                upload_single: 'Перетащите файл сюда или нажмите для выбора.',
            },
            image: {
                upload_several: 'Перетащите изображения сюда или нажмите для выбора.',
                upload_single: 'Перетащите изображение сюда или нажмите для выбора.',
            },
            references: {
                all_missing: 'Связанных данных не найдено',
                many_missing: 'Некоторые из связанных данных недоступны',
                single_missing: 'Связанный объект недоступен',
            },
            password: {
                toggle_visible: 'Скрыть пароль',
                toggle_hidden: 'Показать пароль',
            },
        },
        message: {
            about: 'Справка',
            are_you_sure: 'Вы уверены?',
            auth_error: 'Произошла ошибка при валидации токена аутентификации',
            bulk_delete_content:
                'Вы уверены, что хотите удалить %{name}? |||| Вы уверены, что хотите удалить %{smart_count} объектов? |||| Вы уверены, что хотите удалить %{smart_count} объектов?',
            bulk_delete_title:
                'Удалить %{name} |||| Удалить %{smart_count} %{name} |||| Удалить %{smart_count} %{name}',
            bulk_update_content:
                'Вы уверены, что хотите обновить %{name}? |||| Вы уверены, что хотите обновить %{smart_count} объектов?',
            bulk_update_title: 'Обновить %{name} |||| Обновить %{smart_count} %{name}',
            clear_array_input: 'Вы уверены, что хотите очистить весь список?',
            delete_content: 'Вы уверены что хотите удалить этот объект',
            delete_title: 'Удалить %{name} #%{id}',
            details: 'Описание',
            error: 'В процессе запроса возникла ошибка, и он не может быть завершен',
            invalid_form: 'Форма заполнена неверно, проверьте, пожалуйста, ошибки',
            loading: 'Идет загрузка, пожалуйста, подождите...',
            no: 'Нет',
            not_found: 'Ошибка URL или вы следуете по неверной ссылке',
            yes: 'Да',
            unsaved_changes: 'Некоторые из ваших изменений не были сохранены. Вы уверены, что хотите их игнорировать?',
        },
        navigation: {
            no_results: 'Результатов не найдено',
            no_more_results: 'Страница %{page} выходит за пределы нумерации, попробуйте предыдущую',
            page_out_of_boundaries: 'Страница %{page} вне границ',
            page_out_from_end: 'Невозможно переместиться дальше последней страницы',
            page_out_from_begin: 'Номер страницы не может быть меньше 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} из %{total}',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} из более %{offsetEnd}',
            current_page: 'Страница %{page}',
            page: 'На %{page} страницу',
            first: 'На первую страницу',
            last: 'На последнюю страницу',
            next: 'Следующая',
            prev: 'Предыдущая',
            previous: 'Предыдущая',
            page_rows_per_page: 'Строк на странице:',
            skip_nav: 'Перейти к содержанию',
        },
        sort: {
            sort_by: 'Сортировать по %{field} %{order}',
            ASC: 'возрастанию',
            DESC: 'убыванию',
        },
        auth: {
            auth_check_error: 'Пожалуйста, авторизуйтесь для продолжения работы',
            user_menu: 'Профиль',
            username: 'Имя пользователя',
            password: 'Пароль',
            sign_in: 'Войти',
            sign_in_error: 'Ошибка аутентификации, попробуйте снова',
            logout: 'Выйти',
        },
        notification: {
            updated: 'Элемент обновлен |||| %{smart_count} обновлено |||| %{smart_count} обновлено',
            created: 'Элемент создан',
            deleted: 'Элемент удален |||| %{smart_count} удалено |||| %{smart_count} удалено',
            bad_item: 'Элемент не валиден',
            item_doesnt_exist: 'Элемент не существует',
            http_error: 'Ошибка сервера',
            data_provider_error: 'Ошибка dataProvider, проверьте консоль',
            i18n_error: 'Не удалось загрузить перевод для указанного языка',
            canceled: 'Операция отменена',
            logged_out: 'Ваша сессия завершена, попробуйте переподключиться/войти снова',
            not_authorized: 'У вас нет доступа к этому ресурсу',
            application_update_available: 'Имеется новая версия приложения.',
        },
        validation: {
            required: 'Обязательно для заполнения',
            minLength: 'Минимальное кол-во символов %{min}',
            maxLength: 'Максимальное кол-во символов %{max}',
            minValue: 'Минимальное значение %{min}',
            maxValue: 'Значение может быть %{max} или меньше',
            number: 'Должно быть цифрой',
            email: 'Некорректный email',
            oneOf: 'Должно быть одним из: %{options}',
            regex: 'Должно быть в формате (regexp): %{pattern}',
            unique: 'Must be unique',
        },
        saved_queries: {
            label: 'Сохраненные запросы',
            query_name: 'Имя запроса',
            new_label: 'Сохранить текущий запрос...',
            new_dialog_title: 'Сохранить текущий запрос как',
            remove_label: 'Удалить сохраненный запрос',
            remove_label_with_name: 'Удалить запрос "%{name}"',
            remove_dialog_title: 'Удалить сохраненный запрос?',
            remove_message: 'Вы уверены, что хотите удалить этот запрос из списка сохраненных запросов?',
            help: 'Отфильтровать список и сохранить запрос на будущее',
        },
        configurable: {
            customize: 'Настроить',
            configureMode: 'Настроить эту страницу',
            inspector: {
                title: 'Инспектор',
                content: 'Наведите на UI-элементы приложения, чтобы настроить',
                reset: 'Сбросить настройки',
                hideAll: 'Скрыть все',
                showAll: 'Показать все',
            },
            Datagrid: {
                title: 'Таблица данных',
                unlabeled: 'Безымянный столбец #%{column}',
            },
            SimpleForm: {
                title: 'Форма',
                unlabeled: 'Безымянное поле ввода #%{input}',
            },
            SimpleList: {
                title: 'Список',
                primaryText: 'Первичный текст',
                secondaryText: 'Вторичный текст',
                tertiaryText: 'Третичный текст',
            },
        },
    },
};

export default RussianTranslation;
