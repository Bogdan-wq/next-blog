import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const ResponsiveContainer = styled.div`
    max-width:1200px;
    width:100%;
    padding:0 15px;
    margin:0 auto;
`

const Container = ({
    children
} : PropsWithChildren<{}>) => {
    return (
        <ResponsiveContainer>
            {children}
        </ResponsiveContainer>
    )
}

export default Container;