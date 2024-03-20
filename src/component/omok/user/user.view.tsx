import { UserStyle } from './user.style'

export function User() {
    return (
        <UserStyle.Container>
            <UserStyle.SafetyContainer>
                <UserStyle.Stone user={1} />
                <UserStyle.Text>user1</UserStyle.Text>
            </UserStyle.SafetyContainer>
            <UserStyle.SafetyContainer>
                <UserStyle.Stone user={2} />
                <UserStyle.Text>user2</UserStyle.Text>
            </UserStyle.SafetyContainer>
        </UserStyle.Container>
    )
}
