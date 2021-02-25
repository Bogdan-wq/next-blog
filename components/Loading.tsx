import styled from 'styled-components'

interface LoadingProps {
    label?:string,
}

const LoadingLabel = styled.span`
    font-size:20px;
    display:inline-block;
    margin-top:10px;
`

const Loading = (props : LoadingProps) => {
    return (
        <LoadingLabel>{props.label}...</LoadingLabel>
    )
}

Loading.defaultProps = {
    label:'Loading',
}

export default Loading;