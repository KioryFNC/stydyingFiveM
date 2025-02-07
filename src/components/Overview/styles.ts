import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 12.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid;
  background: radial-gradient(
    79.03% 79.03% at 50% 20.97%, 
    rgba(255, 255, 255, 0.07) 0%, 
    rgba(153, 153, 153, 0.02) 100%
  );
`

export const Dot = styled.div<{ color: string }>`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  filter: drop-shadow(0px 0px 4px ${(props) => props.color});
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .4rem;
  margin-right: 3rem;
`

export const Value = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  background: linear-gradient(270deg, #999 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Label = styled.span`
  font-size: 'PuristaSemiBold';
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.50);
`