import Router from 'next/router'

export function useLayout() {
    /* 홈 화면으로 이동 */
    const onMoveToHome = () => {
        Router.push('/')
    }

    return {
        events: {
            onMoveToHome
        }
    }
}
