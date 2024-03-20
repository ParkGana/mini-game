const WEB_TABLET = 1329 as const
const TABLET_MOBILE = 759 as const

export const ratio = {
    size: (options: { web?: string; tablet?: string; mobile?: string }) => {
        return `
            ${
                options.web &&
                `
                    @media (min-width: ${WEB_TABLET + 1}px) {
                        ${options.web}
                    }
                `
            }

            ${
                options.tablet &&
                `
                    @media (min-width: ${TABLET_MOBILE + 1}px) and (max-width: ${WEB_TABLET}px) {
                        ${options.tablet}
                    }
                `
            }
            
            ${
                options.mobile &&
                `
                    @media (max-width: ${TABLET_MOBILE}px) {
                        ${options.mobile}
                    }
                `
            }
            
        `
    }
}
