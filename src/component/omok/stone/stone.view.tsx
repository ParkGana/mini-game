import { StoneStyle } from './stone.style'

export function Stone({ user }: { user: number }) {
    return <StoneStyle.Container user={user} />
}
