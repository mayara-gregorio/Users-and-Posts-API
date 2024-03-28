import styled, {css} from "styled-components";

export const Container = styled.div`
    ${({theme}) => css`
        background-color: ${theme.colors.blue1};
        gap: ${theme.spaces.gap1};
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfy};
        height: ${theme.dimension.height};
    `}
`
export const ContainerProfile = styled.div`
    ${({theme}) => css`
        gap: ${theme.spaces.gap1};
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfy};
    `}
`
export const ContainerUser = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionRow};
        align-items: ${theme.actions.alignEnd};
        background-color: ${theme.colors.green};
        padding: ${theme.spaces.padding};
        gap: ${theme.spaces.gap2};
        margin: ${theme.spaces.margin2};
        border-radius: ${theme.border.radius1};
        
    `}
`
export const Info = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfy};
        gap: ${theme.spaces.gap1};
        justify-content: ${theme.actions.justfy};

    `}
`
export const ContainerPosts = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        justify-content: ${theme.actions.justfy};
        gap: ${theme.spaces.gap1};
    `}
`
export const ContainerPost = styled.div`
    ${({theme}) => css`
        display: ${theme.actions.display};
        flex-direction: ${theme.actions.directionCol};
        border-radius: ${theme.border.radius1};
        padding: ${theme.spaces.padding};
        gap: ${theme.spaces.gap1};
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
        margin: ${theme.spaces.margin1} ${theme.spaces.margin2};
    `}
`
export const Img = styled.img`
    ${({theme}) => css`
        border-radius: ${theme.border.radius3};
        width: ${theme.dimension.widht};
    `}
`
export const Title = styled.h3`
    ${({theme}) => css`
        color: ${theme.colors.white};

    `}
`
export const Text = styled.p`
     ${({theme}) => css`
        color: ${theme.colors.text};
    `}
`