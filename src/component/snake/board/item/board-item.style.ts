import styled from 'styled-components'

export namespace BoardItemStyle {
    export const Container = styled.div<{ isEven: boolean; isHead: boolean; isBody: boolean }>`
        ${({ theme, isEven, isHead, isBody }) => `
            width: 30px;
            height: 30px;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: ${
                isHead
                    ? theme.color.darkgreen
                    : isBody
                      ? theme.color.white
                      : isEven
                        ? theme.color.green
                        : theme.color.lightgreen
            };
            border-right: 1px solid ${theme.color.lightgray};
            border-bottom: 1px solid ${theme.color.lightgray};
        `}
    `
}
