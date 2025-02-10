import styled from "styled-components";


export const Root = styled.div`
  width: 100%;
  max-height: 100%;
  min-height: 100%;
`

export const Status = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const Members = styled.div`
  min-width: 60rem; 
  height: 48rem; /* por enquanto, o certo é o members ter o height 100% do content e nao ultrapassar a caixa */
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;
  border: 1px solid ${( props ) => props.theme['border']};
  background: radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.02) 100%);
  `

export const Activity = styled.div`
   flex: 1; 
   display: flex;
   flex-direction: column;
   gap: 1rem;
   
`